'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/lib/i18n'

export default function HomePage() {
  const { t } = useLang()
  const { features } = t

  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 1.5rem 4rem' }}
      >
        <ScrollReveal>
          <div
            style={{
              display: 'inline-block',
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: 'var(--primary)',
              border: '1px solid var(--border)',
              borderRadius: '9999px',
              padding: '0.3rem 1rem',
              marginBottom: '2rem',
              textTransform: 'uppercase',
            }}
          >
            {t.hero.badge}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h1
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              letterSpacing: '0.08em',
              color: 'var(--text)',
              margin: '0 0 0.5rem',
              lineHeight: 1.1,
            }}
          >
            BUNKER
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)',
              color: 'var(--text-muted)',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
            }}
          >
            {t.hero.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--primary)',
                color: '#0f1419',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.opacity = '0.85'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.opacity = '1'; el.style.transform = 'translateY(0)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {t.hero.cta}
            </a>
          </div>
        </ScrollReveal>

        {/* scroll indicator */}
        <ScrollReveal delay={4}>
          <div
            style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', opacity: 0.4 }}
          >
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>SCROLL</span>
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--text-muted), transparent)' }} />
          </div>
        </ScrollReveal>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ maxWidth: '1024px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
        <ScrollReveal>
          <h2
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              letterSpacing: '0.08em',
              color: 'var(--text)',
              marginBottom: '0.75rem',
              textAlign: 'center',
            }}
          >
            {features.sectionTitle}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'Roboto Mono, monospace', fontSize: '0.85rem', marginBottom: '3rem' }}>
            {features.sectionSubtitle}
          </p>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {features.items.map((f, i) => (
            <ScrollReveal key={i} delay={(i % 3 + 1) as 1 | 2 | 3}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  transition: 'border-color 0.25s, transform 0.25s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(251,191,36,0.4)'
                  el.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--border)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    letterSpacing: '0.1em',
                    color: 'var(--primary)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.75 }}>
                  {f.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '4rem 1.5rem 6rem' }}>
        <ScrollReveal>
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              background: 'var(--bg-card)',
              border: '1px solid rgba(251,191,36,0.3)',
              borderRadius: '24px',
              padding: '3rem 2rem',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.4rem, 5vw, 2.2rem)',
                letterSpacing: '0.06em',
                color: 'var(--text)',
                marginBottom: '1rem',
              }}
            >
              {t.cta.title}
            </h2>
            <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
              {t.cta.body}
            </p>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--primary)',
                color: '#0f1419',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                padding: '0.85rem 2.2rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.opacity = '0.85'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.opacity = '1'; el.style.transform = 'translateY(0)' }}
            >
              {t.cta.button}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
