'use client'

import Link from 'next/link'

const faqs = [
  {
    q: 'How many players do I need?',
    a: 'Bunker works best with 4–12 players. One person runs the app; everyone else plays on a single screen or their own device.',
  },
  {
    q: 'Do all players need to download the app?',
    a: 'No. One player downloads the app and acts as the host. Other players participate without installing anything.',
  },
  {
    q: 'How long does a game take?',
    a: 'A typical session lasts 20–45 minutes depending on player count and how much everyone debates.',
  },
  {
    q: 'The app crashed — what should I do?',
    a: 'Force-quit and reopen the app. Game state is preserved locally. If the issue persists, email us with your iOS version and device model.',
  },
  {
    q: 'How do I restore a purchase?',
    a: "Tap Settings → Restore Purchases inside the app. Make sure you're signed into the same Apple ID used for the original purchase.",
  },
]

export default function SupportContent() {
  return (
    <>
      {/* Contact card */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid rgba(251,191,36,0.3)',
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
            background: 'rgba(251,191,36,0.12)',
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
          <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text)', marginBottom: '0.3rem' }}>
            EMAIL SUPPORT
          </p>
          <a
            href="mailto:support@bunkergame.app"
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '1rem',
              color: 'var(--primary)',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.opacity = '0.75')}
            onMouseLeave={e => ((e.target as HTMLElement).style.opacity = '1')}
          >
            support@bunkergame.app
          </a>
          <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
            We reply within 24–48 hours.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.12em',
            color: 'var(--primary)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,191,36,0.35)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
            >
              <p style={{ fontFamily: 'Roboto Mono, monospace', fontWeight: 500, fontSize: '0.87rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                {q}
              </p>
              <p style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.8 }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* links */}
      <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link
          href="/privacy"
          style={{
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--text)')}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
        >
          → Privacy Policy
        </Link>
        <Link
          href="/terms"
          style={{
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--text)')}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
        >
          → Terms of Use
        </Link>
      </div>
    </>
  )
}
