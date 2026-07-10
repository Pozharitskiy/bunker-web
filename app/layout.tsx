import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import HexBackground from '@/components/HexBackground'
import { LangProvider } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Bunker — Survival Social Deduction Game',
  description:
    'A social deduction party game about surviving a nuclear apocalypse. Who gets a spot in the bunker?',
  keywords: ['bunker', 'social deduction', 'party game', 'survival', 'nuclear', 'iOS', 'mobile game'],
  authors: [{ name: 'Bunker Game' }],
  openGraph: {
    title: 'Bunker — Survival Social Deduction Game',
    description: 'Who deserves a spot in the bunker? A tense social deduction game for 4–12 players.',
    type: 'website',
  },
  icons: {
    icon: '/app-icon.jpg',
    apple: '/app-icon.jpg',
  },
}

export const viewport = {
  themeColor: '#0b0710',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <HexBackground />
          <NavBar />
          <main className="relative z-10 min-h-screen">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
