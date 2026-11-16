import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support — Mafia & Werewolf Party',
  description: 'Get help with Mafia & Werewolf Party — the offline social deduction party game.',
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
          Mafia &amp; Werewolf Party
        </h1>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.8 }}>
          The party game of secret roles and public lies, for 4–20 people sharing one phone. No cards, no wifi, no account.
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
        <Section title="How to play">
          <p>
            Add 4–20 player names, pick a theme (Mafia or Werewolf), and the app deals a secret role to each player. At night the
            phone goes around the circle — or stays put and narrates, if you prefer the classic eyes-closed version. In the morning
            it announces who didn&apos;t make it, times the discussion, and runs the vote.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Full rules and every role are in the app: <strong style={{ color: 'var(--text)' }}>Settings → Rules &amp; roles</strong>.
          </p>
        </Section>

        <Section title="Common questions">
          <p><strong style={{ color: 'var(--text)' }}>Does it need internet?</strong><br />No. The game is fully offline.</p>
          <p style={{ marginTop: '0.75rem' }}>
            <strong style={{ color: 'var(--text)' }}>How many phones do we need?</strong><br />One. The app replaces the human host.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <strong style={{ color: 'var(--text)' }}>Can someone see my role?</strong><br />Only if you show them. Each reveal is behind a
            swipe, and every night turn looks identical so nobody can guess a role from how long a turn takes.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <strong style={{ color: 'var(--text)' }}>Night narration is silent.</strong><br />Check that the ringer switch is on and that
            <strong style={{ color: 'var(--text)' }}> Settings → Narrator voice</strong> is enabled. With it off, the app shows captions only.
          </p>
        </Section>

        <Section title="Contact us">
          <p>
            Bug, idea, or a rules question?<br />
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
