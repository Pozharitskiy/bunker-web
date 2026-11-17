import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — Scanvo',
  description: 'Terms of Use for the Scanvo document scanner app.',
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

export default function ScanvoTermsPage() {
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
        <Section title="1. Acceptance of Terms">
          <p>
            By downloading, installing, or using Scanvo (&quot;the App&quot;), you agree to be bound by these Terms of Use. If you do not agree, do not use the App.
          </p>
        </Section>

        <Section title="2. License">
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal or professional document scanning purposes on iOS devices you own or control, subject to these Terms.
          </p>
          <p style={{ marginTop: '0.75rem' }}>You may not:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Copy, modify, or distribute the App or its source code</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Rent, lease, lend, or sublicense the App</li>
            <li>Use the App to build a competing product</li>
          </ul>
        </Section>

        <Section title="3. Subscriptions and In-App Purchases">
          <p>
            Scanvo offers optional auto-renewable subscriptions that unlock premium features. By subscribing:
          </p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
            <li>Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period</li>
            <li>You can manage or cancel subscriptions in your Apple ID account settings</li>
            <li>No refunds for the unused portion of a subscription period, except as required by applicable law or Apple&apos;s refund policy</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            Free tier features remain available without a subscription.
          </p>
        </Section>

        <Section title="4. Your Content">
          <p>
            All documents, scans, PDFs, and signatures you create with the App remain yours. We claim no ownership over your content. Since all content is stored locally on your device, you are solely responsible for backing up and protecting your files.
          </p>
        </Section>

        <Section title="5. Acceptable Use">
          <p>You agree to use the App only for lawful purposes. You must not use the App to:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Create, scan, or distribute fraudulent, forged, or illegal documents</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe the intellectual property rights of others</li>
          </ul>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content in the App — including the interface, icons, graphics, and code — is owned by or licensed to us and protected by applicable intellectual property laws. Nothing in these Terms transfers any IP rights to you.
          </p>
        </Section>

        <Section title="7. Disclaimer of Warranties">
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE APP, INCLUDING ANY LOSS OF DOCUMENTS OR DATA. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.
          </p>
        </Section>

        <Section title="9. Termination">
          <p>
            We reserve the right to suspend or terminate your access to the App at any time if we reasonably believe you have violated these Terms. Upon termination, your license to use the App ends immediately. Your locally stored documents are not affected.
          </p>
        </Section>

        <Section title="10. Updates and Changes">
          <p>
            We may update the App and these Terms at any time. We will notify you of material changes by updating the &quot;Last updated&quot; date above. Continued use of the App after changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="11. Apple Requirements">
          <p>
            These Terms are between you and us only, not with Apple Inc. Apple is not responsible for the App or its content. In the event of any conflict between these Terms and Apple&apos;s App Store terms, Apple&apos;s terms prevail with respect to usage rules.
          </p>
        </Section>

        <Section title="12. Governing Law">
          <p>
            These Terms are governed by applicable law. Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration or in the courts of competent jurisdiction.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>
            Questions about these Terms?<br />
            <a href="mailto:support@bunkergame.app" style={{ color: 'var(--primary)' }}>support@bunkergame.app</a>
          </p>
        </Section>
      </div>
    </div>
  )
}
