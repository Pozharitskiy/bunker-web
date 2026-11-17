'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import { useLang, langLabels } from '@/lib/i18n'
import { STUDIO_NAME } from '@/lib/studio'

export default function NavBar() {
  const pathname = usePathname()
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Catalogue-level, not Bunker-level: the site is a studio's now, and the
  // legal pages it used to carry up here live in the footer where they
  // belong. Left in English deliberately — the translated strings describe
  // Bunker's own pages, and the studio layer has no translations of its own.
  const navLinks = [
    { href: '/#games', label: 'Games' },
    { href: '/bunker', label: 'Bunker' },
    { href: '/mafia/support', label: 'Mafia' },
    { href: '/support', label: t.nav.support },
  ]

  return (
    <header
      className="relative z-20 w-full"
      style={{ borderBottom: '1px solid var(--border-soft)', background: 'rgba(11,7,16,0.82)', backdropFilter: 'blur(12px)' }}
    >
      {/* Wraps rather than overflows: the studio wordmark is a good deal
          wider than the single word that used to sit here, and brand + four
          links + the language picker no longer fit one 375px row. */}
      <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        {/* The studio wordmark, not a game's. Set in the editorial face the
            studio page uses, so the top of every page agrees with it. */}
        <Link
          href="/"
          aria-label={`${STUDIO_NAME} — home`}
          style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.35rem', fontFamily: 'var(--font-editorial)', color: 'var(--text)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.01em', textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' }}
        >
          One
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--text-muted)' }}>Phone</span>
          Games
        </Link>

        <div className="flex items-center gap-x-6 gap-y-3 flex-wrap">
          <ul className="flex gap-5 list-none m-0 p-0 flex-wrap">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      letterSpacing: '0.08em',
                      textDecoration: 'none',
                      color: active ? 'var(--primary)' : 'var(--text-muted)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = 'var(--text)' }}
                    onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = 'var(--text-muted)' }}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Language switcher */}
          <div ref={dropRef} style={{ position: 'relative', flexShrink: 0 }}>
            <button
              onClick={() => setOpen(v => !v)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                // A full touch target: the control used to be ~22pt tall,
                // which the layout audit flagged as shorter than a fingertip.
                minHeight: '44px',
                minWidth: '58px',
                justifyContent: 'center',
                padding: '0.28rem 0.7rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: open ? 'rgba(242,56,79,0.1)' : 'transparent',
                color: 'var(--primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { if (!open) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(242,56,79,0.5)' }}
              onMouseLeave={e => { if (!open) (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
            >
              {lang.toUpperCase()}
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" style={{ opacity: 0.6, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <path d="M0 2l4 4 4-4z" />
              </svg>
            </button>

            {open && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  right: 0,
                  background: 'rgba(17,11,24,0.97)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '0.6rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0.3rem',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(12px)',
                  zIndex: 50,
                  minWidth: '150px',
                }}
              >
                {langLabels.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setOpen(false) }}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.08em',
                      padding: '0.3rem 0.4rem',
                      borderRadius: '5px',
                      border: lang === code ? '1px solid rgba(242,56,79,0.6)' : '1px solid transparent',
                      background: lang === code ? 'rgba(242,56,79,0.12)' : 'transparent',
                      color: lang === code ? 'var(--primary)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => {
                      if (lang !== code) {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = 'var(--text)'
                        el.style.background = 'rgba(255,255,255,0.05)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (lang !== code) {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = 'var(--text-muted)'
                        el.style.background = 'transparent'
                      }
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
