import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import HexBackground from '@/components/HexBackground'

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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔒</text></svg>",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HexBackground />
        <NavBar />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
