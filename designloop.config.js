'use strict';

/**
 * designloop configuration for the One Phone Games site.
 *
 * The pipeline was built around an iOS simulator, but its capture layer has a
 * `command` adapter for exactly this case: anything that can put a PNG at
 * {outPath}. Here that is headless Chrome driven over CDP
 * (scripts/shot.js) — `--window-size` alone lays a page out at one width and
 * crops it to another, which makes every narrow capture look like a
 * horizontal overflow that isn't there.
 *
 *   npm install --no-save ../designloop   # deliberately not a dependency:
 *                                         # a file: path in package.json
 *                                         # breaks the Vercel build, which
 *                                         # has no sibling checkout
 *   npm run dev -- -p 3100                # the loop screenshots a real page
 *   npx designloop capture studio-desktop studio-mobile
 *   npx designloop audit  studio-desktop studio-mobile
 *
 * Captures land in designloop/screens/<id>/current.png and are gitignored —
 * they are one command away and several thousand pixels tall.
 */
const SITE_BRIEF = `SITE: the marketing site of "One Phone Games", a one-person
studio that makes party games played by passing a single phone around a table.
Two products: Bunker (shipped, red #f2384f) and Mafia & Werewolf (in App Store
review, violet #9B6FFF).

The home page is a studio page, not a product page: a masthead, the two games
as an editorial spread, four working principles, and a way to reach a person.

VISUAL SYSTEM: near-black #0b0710 background, Playfair Display for the studio's
own editorial voice, Roboto Mono for labels and body. The studio deliberately
has NO accent colour of its own — the only colour on the page comes from the
two games, so neither competes with the work it exists to sell.

AUDIENCE: people deciding whether this studio is real and worth a download, and
press/stores looking for one link. The bar is "a studio that ships", not "a
developer's placeholder page". Most traffic is a phone.`;

module.exports = {
  brief: SITE_BRIEF,
  capture: {
    adapter: 'command',
    command: ['node', 'scripts/shot.js', '{screenId}', '{outPath}'],
    timeoutMs: 120000,
  },
  screens: [
    { id: 'studio-desktop', name: 'Studio home, desktop' },
    { id: 'studio-mobile', name: 'Studio home, phone' },
    { id: 'studio-tablet', name: 'Studio home, tablet' },
    { id: 'bunker-desktop', name: 'Bunker landing, desktop' },
  ],
};
