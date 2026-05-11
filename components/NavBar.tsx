'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import { useLang, langLabels } from '@/lib/i18n'

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

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/privacy', label: t.nav.privacy },
    { href: '/terms', label: t.nav.terms },
    { href: '/support', label: t.nav.support },
  ]

  return (
    <header
      className="relative z-20 w-full"
      style={{ borderBottom: '1px solid var(--border)', background: 'rgba(15,20,25,0.85)', backdropFilter: 'blur(12px)' }}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--primary)', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.12em', textDecoration: 'none', flexShrink: 0 }}
        >
          BUNKER
        </Link>

        <div className="flex items-center gap-6">
          <ul className="flex gap-5 list-none m-0 p-0 flex-wrap">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'Roboto Mono, monospace',
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
                fontFamily: 'Roboto Mono, monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                padding: '0.28rem 0.6rem',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                background: open ? 'rgba(251,191,36,0.1)' : 'transparent',
                color: 'var(--primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { if (!open) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,191,36,0.5)' }}
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
                  background: 'rgba(15,20,25,0.97)',
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
                      fontFamily: 'Roboto Mono, monospace',
                      fontSize: '0.68rem',
                      letterSpacing: '0.08em',
                      padding: '0.3rem 0.4rem',
                      borderRadius: '5px',
                      border: lang === code ? '1px solid rgba(251,191,36,0.6)' : '1px solid transparent',
                      background: lang === code ? 'rgba(251,191,36,0.12)' : 'transparent',
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
