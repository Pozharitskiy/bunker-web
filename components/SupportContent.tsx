'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n'

export default function SupportContent() {
  const { t } = useLang()
  const s = t.support
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--primary)',
            letterSpacing: '0.18em',
            marginBottom: '0.75rem',
          }}
        >
          {s.label}
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 5vw, 2.5rem)',
            letterSpacing: '0.06em',
            color: 'var(--text)',
            marginBottom: '0.75rem',
          }}
        >
          {s.title}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            maxWidth: '560px',
            lineHeight: 1.8,
            marginBottom: '0.75rem',
          }}
        >
          {s.gameDesc}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            maxWidth: '500px',
            lineHeight: 1.8,
          }}
        >
          {s.helpDesc}
        </p>
      </div>

      {/* Contact card */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid rgba(242,56,79,0.3)',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: 'rgba(242,56,79,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '1.4rem',
          }}
        >
          ✉️
        </div>
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--text)',
              marginBottom: '0.3rem',
            }}
          >
            {s.emailLabel}
          </p>
          <a
            href="mailto:supportbunker@gmail.com"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              color: 'var(--primary)',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.opacity = '0.75')}
            onMouseLeave={e => ((e.target as HTMLElement).style.opacity = '1')}
          >
            supportbunker@gmail.com
          </a>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginTop: '0.3rem',
            }}
          >
            {s.emailNote}
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.12em',
            color: 'var(--primary)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          {s.faqTitle}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {s.faqs.map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(242,56,79,0.35)')
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')
              }
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  fontSize: '0.87rem',
                  color: 'var(--text)',
                  marginBottom: '0.5rem',
                }}
              >
                {q}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.8,
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {[
          { href: '/', label: s.backHome },
          { href: '/privacy', label: s.privacy },
          { href: '/terms', label: s.terms },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--text)')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
