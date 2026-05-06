'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/support', label: 'Support' },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <header
      className="relative z-20 w-full"
      style={{ borderBottom: '1px solid var(--border)', background: 'rgba(15,20,25,0.85)', backdropFilter: 'blur(12px)' }}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--primary)', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.12em', textDecoration: 'none' }}
        >
          BUNKER
        </Link>

        <ul className="flex gap-6 list-none m-0 p-0">
          {links.map(({ href, label }) => {
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
      </nav>
    </header>
  )
}
