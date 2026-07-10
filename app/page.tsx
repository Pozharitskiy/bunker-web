'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { useLang, Lang } from '@/lib/i18n'

const APP_STORE_URL = '#'

const galleryTitle: Record<Lang, string> = {
  en: 'INSIDE THE APP',
  ru: 'ВНУТРИ ПРИЛОЖЕНИЯ',
  pl: 'WEWNĄTRZ APLIKACJI',
  de: 'EINBLICK IN DIE APP',
  fr: "À L'INTÉRIEUR DE L'APP",
  es: 'DENTRO DE LA APP',
  it: "DENTRO L'APP",
  pt: 'DENTRO DO APP',
  tr: 'UYGULAMANIN İÇİ',
  zh: '应用内截图',
  ja: 'アプリの中身',
  ko: '앱 미리보기',
  ar: 'داخل التطبيق',
}

function AppleLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function RadiationMark({ size = 220 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <circle cx="50" cy="50" r="9" />
      <path d="M50 44 A6 6 0 0 0 44 50 L20 50 A30 30 0 0 1 35 24 Z" transform="rotate(0 50 50)" />
      <path d="M50 44 A6 6 0 0 0 44 50 L20 50 A30 30 0 0 1 35 24 Z" transform="rotate(120 50 50)" />
      <path d="M50 44 A6 6 0 0 0 44 50 L20 50 A30 30 0 0 1 35 24 Z" transform="rotate(240 50 50)" />
    </svg>
  )
}

export default function HomePage() {
  const { t, lang } = useLang()
  const { features } = t

  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '4.5rem 1.5rem 5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          minHeight: '88vh',
        }}
      >
        {/* left: copy */}
        <div style={{ flex: '1 1 420px', maxWidth: '580px' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                color: 'var(--primary)',
                border: '1px solid var(--border)',
                background: 'var(--primary-soft)',
                borderRadius: '9999px',
                padding: '0.35rem 1.1rem',
                marginBottom: '2rem',
                textTransform: 'uppercase',
              }}
            >
              <span
                className="pulse-dot"
                style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}
              />
              {t.hero.badge}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(4rem, 12vw, 7.5rem)',
                letterSpacing: '0.05em',
                lineHeight: 0.95,
                margin: '0 0 1.5rem',
                color: 'var(--text)',
                textShadow: '0 0 60px rgba(242,56,79,0.45), 0 0 120px rgba(242,56,79,0.2)',
                textTransform: 'uppercase',
              }}
            >
              BUNKER
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.88rem, 2.2vw, 1.05rem)',
                color: 'var(--text-muted)',
                maxWidth: '480px',
                margin: '0 0 2.5rem',
                lineHeight: 1.85,
              }}
            >
              {t.hero.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href={APP_STORE_URL} className="btn-cta">
                <AppleLogo />
                {t.hero.cta}
              </a>
              <a href="#how" className="btn-ghost">
                {features.sectionTitle}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
              {[features.items[5]?.title, features.items[4]?.title].filter(Boolean).map(chip => (
                <span
                  key={chip}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: '9999px',
                    padding: '0.35rem 0.95rem',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* right: phone */}
        <ScrollReveal delay={2}>
          <div style={{ position: 'relative', flex: '0 0 auto' }}>
            {/* glow behind phone */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-15%',
                background: 'radial-gradient(ellipse at center, rgba(242,56,79,0.22) 0%, transparent 65%)',
                filter: 'blur(10px)',
              }}
            />
            <div className="phone-float" style={{ position: 'relative' }}>
              <img
                src="/hero-phone.jpg"
                alt="Bunker game — character card screen"
                width={640}
                height={1346}
                style={{
                  width: 'min(78vw, 310px)',
                  height: 'auto',
                  borderRadius: '32px',
                  border: '1px solid rgba(245,243,247,0.1)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(242,56,79,0.15)',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FEATURES ── */}
      <section id="how" style={{ maxWidth: '1120px', margin: '0 auto', padding: '4rem 1.5rem 5rem', scrollMarginTop: '5rem' }}>
        <ScrollReveal>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
              letterSpacing: '0.08em',
              color: 'var(--text)',
              marginBottom: '0.6rem',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            {features.sectionTitle}
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.06em',
              marginBottom: '3.5rem',
            }}
          >
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
              <div className="feature-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
                  <span style={{ fontSize: '1.9rem', lineHeight: 1 }}>{f.icon}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.2em',
                      color: 'var(--primary)',
                      opacity: 0.75,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    letterSpacing: '0.08em',
                    color: 'var(--text)',
                    margin: '0 0 0.6rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.75 }}>
                  {f.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section style={{ padding: '3rem 0 4rem' }}>
        <ScrollReveal>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
              letterSpacing: '0.08em',
              color: 'var(--text)',
              margin: '0 auto 0.5rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              padding: '0 1.5rem',
            }}
          >
            {galleryTitle[lang]}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="shots-track" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {['01', '02', '03', '04', '05'].map(n => (
              <div className="shot-card" key={n}>
                <img
                  src={`/shots/${n}.jpg`}
                  alt={`Bunker app screenshot ${n}`}
                  width={646}
                  height={1400}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '3rem 1.5rem 7rem' }}>
        <ScrollReveal>
          <div
            style={{
              position: 'relative',
              maxWidth: '760px',
              margin: '0 auto',
              background: 'linear-gradient(160deg, rgba(242,56,79,0.10) 0%, var(--bg-card) 45%)',
              border: '1px solid var(--border)',
              borderRadius: '28px',
              padding: 'clamp(2.5rem, 7vw, 4rem) 2rem',
              textAlign: 'center',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.45), 0 0 80px rgba(242,56,79,0.07)',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                color: 'var(--primary)',
                opacity: 0.07,
                transform: 'rotate(12deg)',
              }}
            >
              <RadiationMark size={260} />
            </div>

            <h2
              style={{
                position: 'relative',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem, 6vw, 3.2rem)',
                letterSpacing: '0.06em',
                color: 'var(--text)',
                margin: '0 0 1.1rem',
                textTransform: 'uppercase',
                textShadow: '0 0 40px rgba(242,56,79,0.35)',
              }}
            >
              {t.cta.title}
            </h2>
            <p
              style={{
                position: 'relative',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                maxWidth: '460px',
                margin: '0 auto 2.2rem',
                lineHeight: 1.85,
              }}
            >
              {t.cta.body}
            </p>
            <a href={APP_STORE_URL} className="btn-cta" style={{ position: 'relative' }}>
              <AppleLogo />
              {t.cta.button}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
