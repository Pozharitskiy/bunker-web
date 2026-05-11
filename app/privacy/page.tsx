import type { Metadata } from 'next'
import LegalPageHeader from '@/components/LegalPageHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy — Bunker',
  description: 'Privacy Policy for the Bunker mobile game.',
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

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>
      <LegalPageHeader type="privacy" />

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
            This Privacy Policy explains how Bunker (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;) collects, uses, and protects information when you use our mobile game application (Bundle ID: com.dzianis.bunker) on iOS devices.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            We are committed to protecting your privacy. We do not sell, trade, or rent your personal information to third parties for marketing purposes.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p><strong style={{ color: 'var(--text)' }}>2.1 Information you provide</strong></p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Player names entered within the game session (stored locally only, not transmitted)</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}><strong style={{ color: 'var(--text)' }}>2.2 Automatically collected data</strong></p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Device type and iOS version</li>
            <li>App version and session duration</li>
            <li>In-game events (screens viewed, features used, game rounds completed)</li>
            <li>Crash reports and performance diagnostics</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}><strong style={{ color: 'var(--text)' }}>2.3 What we do NOT collect</strong></p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Full name, email address, or contact details (unless you contact support)</li>
            <li>Location data</li>
            <li>Camera or microphone data</li>
            <li>Contacts or photos</li>
            <li>Financial or payment information</li>
          </ul>
        </Section>

        <Section title="3. Analytics — Amplitude">
          <p>
            We use <strong style={{ color: 'var(--text)' }}>Amplitude</strong> for product analytics. Amplitude helps us understand how players interact with the game so we can improve it.
          </p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Data collected by Amplitude is anonymous and aggregated</li>
            <li>No personally identifiable information is sent to Amplitude</li>
            <li>Amplitude data is stored on Amplitude&apos;s servers (US) per their <a href="https://amplitude.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Privacy Policy</a></li>
          </ul>
        </Section>

        <Section title="4. How We Use Your Data">
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li>Improve gameplay, balance, and features</li>
            <li>Fix bugs and crashes</li>
            <li>Understand which features are used most</li>
            <li>Ensure the app functions correctly on different devices</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            We do <strong style={{ color: 'var(--text)' }}>not</strong> use your data for advertising, profiling, or selling to third parties.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            Analytics data is retained by Amplitude per their standard retention policy (up to 12 months). Local game data (player names, game state) is stored only on your device and is erased when you delete the app.
          </p>
        </Section>

        <Section title="6. Children's Privacy">
          <p>
            Bunker is rated 12+ and is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us personal information, contact us and we will delete it promptly.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Request access to data we hold about you</li>
            <li>Request deletion of your data</li>
            <li>Opt out of analytics collection (contact us)</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            To exercise these rights, email us at <a href="mailto:support@bunkergame.app" style={{ color: 'var(--primary)' }}>support@bunkergame.app</a>.
          </p>
        </Section>

        <Section title="8. Third-Party Services">
          <p>The App integrates the following third-party SDKs:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li><strong style={{ color: 'var(--text)' }}>Amplitude Analytics</strong> — usage analytics</li>
            <li><strong style={{ color: 'var(--text)' }}>Apple StoreKit</strong> — in-app purchases (if applicable)</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            Each third-party service operates under its own privacy policy. We are not responsible for their data practices.
          </p>
        </Section>

        <Section title="9. Security">
          <p>
            We implement industry-standard security measures. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically. We will notify you of significant changes by updating the &quot;Last updated&quot; date at the top of this page. Continued use of the App after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            Questions about this policy? Contact us:<br />
            <a href="mailto:support@bunkergame.app" style={{ color: 'var(--primary)' }}>support@bunkergame.app</a>
          </p>
        </Section>
      </div>
    </div>
  )
}
