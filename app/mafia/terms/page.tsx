import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — Mafia & Werewolf Party',
  description: 'Terms of Use for Mafia & Werewolf Party, the offline social deduction party game for iOS.',
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

export default function MafiaTermsPage() {
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
          Terms of Use
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
        <Section title="1. Acceptance of Terms">
          <p>
            By downloading, installing or using Mafia &amp; Werewolf Party (&quot;the App&quot;), you agree to these Terms of Use. If you
            do not agree, do not use the App.
          </p>
        </Section>

        <Section title="2. License">
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial
            entertainment on iOS devices you own or control.
          </p>
          <p style={{ marginTop: '0.75rem' }}>You may not:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Copy, modify or distribute the App or its source code</li>
            <li>Reverse engineer, decompile or disassemble the App</li>
            <li>Rent, lease, lend or sublicense the App</li>
            <li>Use the App&apos;s content or artwork to build a competing product</li>
          </ul>
        </Section>

        <Section title="3. The Game">
          <p>
            The App is a digital host for a traditional social deduction party game. It deals hidden roles, runs the night and day
            phases, and tallies votes. It does not moderate what players say to each other — the conversation at your table is
            yours to run.
          </p>
        </Section>

        <Section title="4. Purchases">
          <p>
            The App is free and contains no advertising. If a future version introduces optional in-app purchases, payment will be
            charged to your Apple ID at confirmation of purchase and managed entirely through the App Store, under Apple&apos;s terms
            and refund policy.
          </p>
        </Section>

        <Section title="5. Your Content">
          <p>
            Player names and settings you enter stay on your device. We claim no ownership over them and have no access to them.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content in the App — interface, artwork, narration text, icons and code — is owned by or licensed to us and
            protected by applicable intellectual property laws. Nothing in these Terms transfers any IP rights to you. &quot;Mafia&quot;
            and &quot;Werewolf&quot; are traditional public-domain party games; this App is an independent implementation and is not
            affiliated with, endorsed by or connected to any commercial publisher of a game of that name.
          </p>
        </Section>

        <Section title="7. Disclaimer of Warranties">
          <p>
            The App is provided &quot;as is&quot;, without warranties of any kind, express or implied. We do not warrant that the App will
            be uninterrupted or error-free.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, we are not liable for any indirect, incidental or consequential damages arising
            out of your use of the App.
          </p>
        </Section>

        <Section title="9. Changes to These Terms">
          <p>
            We may update these Terms periodically. Continued use of the App after an update constitutes acceptance of the revised
            Terms.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            <a href="mailto:support@bunkergame.app" style={{ color: 'var(--primary)' }}>support@bunkergame.app</a>
          </p>
        </Section>
      </div>
    </div>
  )
}
