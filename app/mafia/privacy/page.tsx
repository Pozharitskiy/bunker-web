import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Mafia & Werewolf Party',
  description:
    'Privacy Policy for Mafia & Werewolf Party, the offline social deduction party game for iOS.',
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

export default function MafiaPrivacyPage() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.72rem', color: 'var(--primary)', letterSpacing: '0.18em', marginBottom: '0.75rem' }}>
          LEGAL
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
          Privacy Policy
        </h1>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Last updated: November 16, 2026 &nbsp;·&nbsp; Mafia &amp; Werewolf Party
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
        <Section title="1. Overview">
          <p>
            This Privacy Policy explains how Mafia &amp; Werewolf Party (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;) handles
            information when you use our iOS party game.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <strong style={{ color: 'var(--text)' }}>Core principle: the App collects nothing and sends nothing.</strong> It runs
            entirely offline on a single device, with no account, no sign-up and no network connection of its own.
          </p>
        </Section>

        <Section title="2. Data We Do NOT Collect">
          <p>The App does not collect, transmit or store:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Player names you type when setting up a game</li>
            <li>Game results, roles, votes or any other gameplay data</li>
            <li>Your name, email or contact details</li>
            <li>Location data</li>
            <li>Contacts, photos, microphone or camera data</li>
            <li>Advertising or tracking identifiers</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            There is no analytics service, no advertising SDK and no tracking of any kind in the App.
          </p>
        </Section>

        <Section title="3. Data Stored on Your Device">
          <p>The App saves a small amount of data locally so you don&apos;t have to retype it every session:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>The player names from your recent games</li>
            <li>Your chosen theme, role setup and game settings</li>
            <li>Sound, voice and haptics preferences</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            This data never leaves the device, is not readable by us, and is removed completely when you delete the App.
          </p>
        </Section>

        <Section title="4. Speech Synthesis">
          <p>
            In the &quot;Eyes closed&quot; night mode the App can read the night narration aloud using Apple&apos;s built-in{' '}
            <strong style={{ color: 'var(--text)' }}>text-to-speech</strong> (AVSpeechSynthesis). The spoken lines are the game&apos;s own
            scripted narration plus player names you entered. Speech is produced by iOS on the device; Apple&apos;s data practices are
            governed by Apple&apos;s{' '}
            <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Privacy Policy</a>.
          </p>
        </Section>

        <Section title="5. Children's Privacy">
          <p>
            The App is not directed at children under 13 and collects no personal information from anyone, children included.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>
            Since we do not collect personal data, there is nothing held by us to access, correct, export or delete. To remove all
            app data, delete the App from your device.
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically — for example if a future version adds optional analytics or in-app
            purchases. We will update the &quot;Last updated&quot; date above and describe what changed.
          </p>
        </Section>

        <Section title="8. Contact">
          <p>
            Questions about this policy?<br />
            <a href="mailto:support@bunkergame.app" style={{ color: 'var(--primary)' }}>support@bunkergame.app</a>
          </p>
        </Section>
      </div>
    </div>
  )
}
