import type { Metadata } from 'next'
import SupportContent from '@/components/SupportContent'

export const metadata: Metadata = {
  title: 'Support — Bunker',
  description: 'Get help with Bunker — the survival social deduction game.',
}

export default function SupportPage() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.72rem', color: 'var(--primary)', letterSpacing: '0.18em', marginBottom: '0.75rem' }}>
          HELP & SUPPORT
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
          SUPPORT
        </h1>
        <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '500px', lineHeight: 1.8 }}>
          Need help? We&apos;ve got you covered. Browse the FAQ below or reach out directly.
        </p>
      </div>

      <SupportContent />
    </div>
  )
}
