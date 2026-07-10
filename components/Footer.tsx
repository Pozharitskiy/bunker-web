'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer
      className="relative z-20 w-full"
      style={{ borderTop: '1px solid var(--border)', background: 'rgba(11,7,16,0.82)' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}
        >
          BUNKER
        </span>

        <nav className="flex gap-5">
          {[
            { href: '/privacy', label: t.footer.privacy },
            { href: '/terms', label: t.footer.terms },
            { href: '/support', label: t.footer.support },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
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
        </nav>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>
          © {new Date().getFullYear()} Bunker Game. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
