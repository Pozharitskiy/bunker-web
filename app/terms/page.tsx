import type { Metadata } from 'next'
import LegalPageHeader from '@/components/LegalPageHeader'

export const metadata: Metadata = {
  title: 'Terms of Use — Bunker',
  description: 'Terms of Use for the Bunker mobile game.',
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

export default function TermsPage() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>
      <LegalPageHeader type="terms" />

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
            By downloading, installing, or using the Bunker mobile application (&quot;App&quot;, Bundle ID: com.dzianis.bunker), you agree to be bound by these Terms of Use. If you do not agree, do not use the App.
          </p>
        </Section>

        <Section title="2. License">
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial entertainment purposes on iOS devices you own or control, subject to these Terms.
          </p>
          <p style={{ marginTop: '0.75rem' }}>You may not:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Copy, modify, or distribute the App or its content</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Rent, lease, lend, or sublicense the App</li>
            <li>Use the App for commercial purposes without our written consent</li>
          </ul>
        </Section>

        <Section title="3. User Conduct">
          <p>You agree to use the App only for lawful purposes. You must not:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li>Use the App in any way that violates applicable law or regulation</li>
            <li>Attempt to gain unauthorized access to any part of the App</li>
            <li>Use cheats, exploits, bots, or any unauthorized third-party software</li>
            <li>Engage in conduct harmful to other players</li>
          </ul>
        </Section>

        <Section title="4. Intellectual Property">
          <p>
            All content in the App — including text, graphics, game mechanics, artwork, and code — is owned by or licensed to us and is protected by applicable intellectual property laws. Nothing in these Terms transfers any intellectual property rights to you.
          </p>
        </Section>

        <Section title="5. In-App Purchases">
          <p>
            The App may offer optional in-app purchases. All purchases are final and non-refundable except as required by applicable law or Apple&apos;s refund policy. Prices may change without notice.
          </p>
        </Section>

        <Section title="6. Disclaimer of Warranties">
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE APP. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.
          </p>
        </Section>

        <Section title="8. Termination">
          <p>
            We reserve the right to suspend or terminate your access to the App at any time, with or without notice, if we reasonably believe you have violated these Terms. Upon termination, your license to use the App ends immediately.
          </p>
        </Section>

        <Section title="9. Updates and Changes">
          <p>
            We may update the App and these Terms at any time. We will notify you of material changes by updating the &quot;Last updated&quot; date. Continued use of the App after changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These Terms are governed by applicable law. Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration or in the courts of competent jurisdiction.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Questions about these Terms? Contact us:<br />
            <a href="mailto:support@bunkergame.app" style={{ color: 'var(--primary)' }}>support@bunkergame.app</a>
          </p>
        </Section>
      </div>
    </div>
  )
}
