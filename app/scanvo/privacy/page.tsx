import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Scanvo',
  description: 'Privacy Policy for the Scanvo document scanner app.',
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

export default function ScanvoPrivacyPage() {
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
          Last updated: June 4, 2025 &nbsp;·&nbsp; Scanvo — Document Scanner
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
            This Privacy Policy explains how Scanvo (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;) handles information when you use our iOS document scanner application.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <strong style={{ color: 'var(--text)' }}>Core principle: all your documents stay on your device.</strong> We do not upload, transmit, or store your scans, photos, or PDFs on any server.
          </p>
        </Section>

        <Section title="2. Data We Do NOT Collect">
          <p>Scanvo does not collect or transmit:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Your documents, scans, or PDFs</li>
            <li>Photos imported from your gallery</li>
            <li>Signatures you create or apply</li>
            <li>Your name, email, or contact details</li>
            <li>Location data</li>
            <li>Contacts</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            All files are saved exclusively to local storage on your device and are never sent to our servers or any third party.
          </p>
        </Section>

        <Section title="3. Camera and Photo Library Access">
          <p>
            Scanvo requests access to your <strong style={{ color: 'var(--text)' }}>camera</strong> and <strong style={{ color: 'var(--text)' }}>photo library</strong> solely to let you scan documents and import images. This data is processed entirely on-device and is never transmitted.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            You may revoke these permissions at any time in iOS Settings → Scanvo.
          </p>
        </Section>

        <Section title="4. In-App Purchases — RevenueCat">
          <p>
            Scanvo uses <strong style={{ color: 'var(--text)' }}>RevenueCat</strong> to manage subscriptions and in-app purchases. RevenueCat may collect:
          </p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>A pseudonymous device identifier</li>
            <li>Purchase and subscription status</li>
            <li>App version and platform</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            RevenueCat does not receive any of your documents or personal data. Payment processing is handled entirely by Apple. See RevenueCat&apos;s{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Privacy Policy</a> for details.
          </p>
        </Section>

        <Section title="5. Apple Services">
          <p>The App uses Apple&apos;s native frameworks:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li><strong style={{ color: 'var(--text)' }}>VisionKit / AVFoundation</strong> — document scanning, processed on-device</li>
            <li><strong style={{ color: 'var(--text)' }}>StoreKit</strong> — subscription and purchase management via the App Store</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            Apple&apos;s data practices are governed by Apple&apos;s{' '}
            <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Privacy Policy</a>.
          </p>
        </Section>

        <Section title="6. Data Storage">
          <p>
            All documents, PDFs, and signatures created in Scanvo are stored locally on your device using the app&apos;s sandboxed file storage. This data is removed when you delete the app. We have no access to this data at any time.
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            Scanvo is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has used the app inappropriately, please contact us.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>
            Since we do not collect personal data, there is no data held by us to access, correct, or delete. To remove all app data, simply delete Scanvo from your device.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            For questions, email: <a href="mailto:support@bunkergame.app" style={{ color: 'var(--primary)' }}>support@bunkergame.app</a>
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically. We will notify you of significant changes by updating the &quot;Last updated&quot; date above. Continued use of the App after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Questions about this policy?<br />
            <a href="mailto:support@bunkergame.app" style={{ color: 'var(--primary)' }}>support@bunkergame.app</a>
          </p>
        </Section>
      </div>
    </div>
  )
}
