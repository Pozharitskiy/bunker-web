'use strict';

/**
 * designloop capture adapter for this site: `node scripts/shot.js <screenId>
 * <outPath>`.
 *
 * Drives headless Chrome over CDP rather than using `--screenshot` directly.
 * That flag lays the page out at one width and crops the image to another, so
 * a 375px capture of a perfectly fine page comes back looking like it
 * overflows horizontally — a false fault that costs a loop round to chase.
 * Emulation.setDeviceMetricsOverride is what makes a narrow capture match
 * what a phone actually renders.
 *
 * The dev server has to be running: npm run dev -- -p 3100
 */
const { spawn } = require('child_process');
const fs = require('fs');

const BASE = process.env.DESIGNLOOP_BASE_URL || 'http://localhost:3100';

/** Screen id -> what to point the browser at, and at what size. */
const SCREENS = {
  'studio-desktop': { path: '/', width: 1440, height: 900 },
  'studio-mobile': { path: '/', width: 375, height: 812 },
  'studio-tablet': { path: '/', width: 1024, height: 768 },
  'bunker-desktop': { path: '/bunker', width: 1440, height: 900 },
};

const screenId = process.argv[2];
const out = process.argv[3];
const screen = SCREENS[screenId];
if (!screen) {
  console.error(`Unknown screen "${screenId}". Known: ${Object.keys(SCREENS).join(', ')}`);
  process.exit(1);
}
const url = BASE + screen.path;
const w = screen.width;
const h = screen.height;

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9334 + Math.floor(Math.random() * 300);
const tmp = fs.mkdtempSync(require('os').tmpdir() + '/cdp-');
const chrome = spawn(CHROME, ['--headless', '--disable-gpu', '--hide-scrollbars',
  `--remote-debugging-port=${port}`, `--user-data-dir=${tmp}`, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  await sleep(2200);
  const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if (pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); }
  };
  const send = (method, params) =>
    new Promise(res => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
  await new Promise(r => (ws.onopen = r));

  await send('Page.enable');
  // DPR 1, not 2: these are full-page captures several thousand pixels tall,
  // and at 2x a desktop shot came back too large for the review model to
  // accept at all. 1x is still well past what the audit needs to read type.
  await send('Emulation.setDeviceMetricsOverride', {
    width: w, height: h, deviceScaleFactor: 1, mobile: w < 700,
  });
  await send('Page.navigate', { url });
  await sleep(4500);

  // Smooth scrolling is on site-wide, so a scripted scroll has to be taken
  // off before the shot or the capture lands mid-animation.
  await send('Runtime.evaluate', {
    expression: "document.documentElement.style.scrollBehavior = 'auto'",
  });
  // Step down the page rather than jumping to the bottom: the sections use
  // IntersectionObserver to reveal themselves, and a single jump never puts
  // the middle of the page in the viewport, so it stays at opacity 0 and the
  // capture is a column of black where the content should be.
  const { result: pageHeight } = await send('Runtime.evaluate', {
    expression: 'document.body.scrollHeight', returnByValue: true,
  });
  for (let y = 0; y < pageHeight.value; y += Math.floor(h * 0.75)) {
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y})` });
    await sleep(260);
  }
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
  await sleep(500);
  // Belt and braces: anything the walk missed is shown anyway, so a capture
  // can never report a reveal animation as missing content.
  await send('Runtime.evaluate', {
    expression: "document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))",
  });
  await sleep(700);

  // A full-page screenshot paints `position: fixed` elements over the first
  // viewport only, so the site's fixed backdrop ends in a hard seam partway
  // down the image — which reads as a design fault that no scrolling user
  // can ever see. Pin those layers to the document instead, so the capture
  // shows the background the way it actually behaves.
  await send('Runtime.evaluate', {
    expression: `(() => {
      const docHeight = document.body.scrollHeight;
      document.querySelectorAll('body *').forEach(el => {
        if (getComputedStyle(el).position !== 'fixed') return;
        // Only backdrops, never the header or anything interactive.
        if (!el.hasAttribute('aria-hidden')) return;
        el.style.position = 'absolute';
        el.style.top = '0';
        el.style.height = docHeight + 'px';
      });
    })()`,
  });
  await sleep(400);

  const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
  fs.writeFileSync(out, Buffer.from(data, 'base64'));
  console.log(`captured ${screenId} -> ${out} (${w}x${h})`);
  chrome.kill();
  process.exit(0);
})();
