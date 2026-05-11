'use client'

import { useLang } from '@/lib/i18n'

interface Props {
  type: 'privacy' | 'terms'
}

export default function LegalPageHeader({ type }: Props) {
  const { t } = useLang()
  const title = type === 'privacy' ? t.legal.privacyTitle : t.legal.termsTitle

  return (
    <div style={{ marginBottom: '3rem' }}>
      <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.72rem', color: 'var(--primary)', letterSpacing: '0.18em', marginBottom: '0.75rem' }}>
        {t.legal.label}
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
        {title}
      </h1>
      <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
        {t.legal.lastUpdated} May 1, 2025 &nbsp;·&nbsp; Bundle ID: com.dzianis.bunker
      </p>
    </div>
  )
}
