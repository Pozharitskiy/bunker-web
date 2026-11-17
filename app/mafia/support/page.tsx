import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support — Mafia & Werewolf Party Game',
  description:
    'Get help with Mafia & Werewolf Party Game — the offline social deduction party game that runs the night for you.',
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: '2.5rem' }}>
    <h2
      style={{
        fontFamily: 'Orbitron, sans-serif',
        fontWeight: 700,
        fontSize: '0.9rem',
        letterSpacing: '0.12em',
        color: 'var(--primary)',
        marginBottom: '0.75rem',
        textTransform: 'uppercase',
      }}
    >
      {title}
    </h2>
    <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
      {children}
    </div>
  </section>
)

/**
 * One question and its answer. Every answer says *why*, not just *what* — a
 * limit that reads as a decision gets a shrug, the same limit unexplained gets
 * a one-star review.
 */
const Q = ({ q, children }: { q: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <p style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '0.35rem' }}>{q}</p>
    <div>{children}</div>
  </div>
)

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong style={{ color: 'var(--text)' }}>{children}</strong>
)

export default function MafiaSupportPage() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.72rem', color: 'var(--primary)', letterSpacing: '0.18em', marginBottom: '0.75rem' }}>
          SUPPORT
        </p>
        <h1
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 5vw, 2.5rem)',
            letterSpacing: '0.06em',
            color: 'var(--text)',
            marginBottom: '0.75rem',
          }}
        >
          Mafia &amp; Werewolf Party Game
        </h1>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.8 }}>
          Two party games on one phone, and nobody has to sit out to run them. 4–20 players, no cards, no wifi, no account.
        </p>
      </div>

      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
        }}
      >
        <Section title="How it works">
          <p>
            Put a phone on the table and type in names. Pick Mafia or Werewolf. The app deals every role, runs the night, keeps
            the day timer and counts the raised hands — so the person who always ends up narrating gets to play instead.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            At night the phone goes round the circle and every living player takes one turn. The turns are identical on purpose:
            same screen, same gesture, same number of seconds, whether your role has a real choice to make or the quiet decoy
            that everyone else gets. Nothing about a turn gives a role away, so there&apos;s nothing to be gained by watching
            someone&apos;s hands — and no reason to turn the lights off.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Full rules and every role are in the app: <Strong>Settings → Rules &amp; roles</Strong>.
          </p>
        </Section>

        <Section title="Questions">
          <Q q="Do we need someone to run the game?">
            No. That&apos;s the point of it. If you&apos;d rather play the classic way, <Strong>Game settings → Night protocol →
            Eyes closed</Strong> and the app narrates the night out loud instead. There&apos;s also a live-host mode in there,
            which gives one person a cheatsheet and a journal of the night and lets them run it by hand.
          </Q>

          <Q q="The narrator has gone quiet.">
            Check the volume, and check <Strong>Settings → Narrator voice</Strong> is on. You don&apos;t need to take the phone
            off silent — the narrator is deliberately allowed through the silent switch, because half a table has their phone
            muted at all times. And it needs no internet: the lines are in the app.
          </Q>

          <Q q="How many players?">
            4 to 20. The app suggests a role mix for the size of your group, and you can change any of it before you start.
          </Q>

          <Q q="Someone tapped the wrong name at night.">
            Two ways back, depending on when you notice.
            <br />
            <br />
            <em>Still your turn, phone still in your hand:</em> tap <Strong>Redo my turn</Strong> on the pass screen. Your turn
            goes to the back of the circle and you take it again at the end. One redo per player, per night.
            <br />
            <br />
            <em>Only found out in the morning:</em> the day screen has <Strong>Replay the night</Strong>. The whole round runs
            again with the same roles — nobody died, every player takes their turn over.
          </Q>

          <Q q="Why does my redone turn go to the end of the circle instead of just reopening?">
            Because by then the phone may already be in the next player&apos;s hands, and reopening your turn where they&apos;re
            standing would show them your role. Sending it to the back means your retake sits behind a pass screen with your own
            name on it, exactly like every other turn in the night.
          </Q>

          <Q q="Can we replay just one past turn, without redoing the whole night?">
            Not once the night is over. Singling one turn out of a finished night would tell the table whose turn it was, which
            is worth more than the mistake cost you. The whole round is the honest fix.
          </Q>

          <Q q="The phone died in the middle of a game.">
            Open the app again and the home screen offers the game straight back: same round, same roles, same point in the
            circle. Mid-night is saved too — you pick up on the same pass screen the night stopped on, never on somebody
            else&apos;s open turn.
          </Q>

          <Q q="Can we start a fresh game without losing the one we're in?">
            No — a new game deals new roles, and there&apos;s no way back to the old ones, so the app asks before it does it.
            The game in progress stays available on the home screen until you say otherwise.
          </Q>

          <Q q="Can someone see my role?">
            Only if you show them. Each reveal is behind a swipe, and it&apos;s gone again the moment you pass the phone on.
          </Q>

          <Q q="Can we change the discussion timer?">
            <Strong>Game settings</Strong> → 1, 2, 3 or 5 minutes. The same screen sets what a tied vote does: nobody is
            eliminated, or the room votes again on the tied names.
          </Q>

          <Q q="Does it need internet?">
            Never. No sign-up, no account, no network calls at all. It works on a plane and in a basement.
          </Q>

          <Q q="Is it free?">
            Yes, with nothing to buy and no ads.
          </Q>

          <Q q="What data do you collect?">
            None. The game doesn&apos;t talk to a server, so the names you type and the games you play never leave the phone.
            Details in the <a href="/mafia/privacy" style={{ color: 'var(--primary)' }}>privacy policy</a>.
          </Q>

          <Q q="Other languages?">
            English only for now. More are planned, and the app is already built to take them.
          </Q>
        </Section>

        <Section title="Write to us">
          <p>
            Bugs, ideas, and rules we&apos;ve got wrong:<br />
            <a href="mailto:support@bunkergame.app" style={{ color: 'var(--primary)' }}>support@bunkergame.app</a>
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            It helps if you include your iOS version, how many players were in the game, and which night mode you were using.
          </p>
        </Section>

        <Section title="Legal">
          <p>
            <a href="/mafia/privacy" style={{ color: 'var(--primary)' }}>Privacy Policy</a>
            {' '}&nbsp;·&nbsp;{' '}
            <a href="/mafia/terms" style={{ color: 'var(--primary)' }}>Terms of Use</a>
          </p>
        </Section>
      </div>
    </div>
  )
}
