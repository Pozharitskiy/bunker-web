import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import HexBackground from '@/components/HexBackground'
import { LangProvider } from '@/lib/i18n'
import { STUDIO_NAME, STUDIO_TAGLINE } from '@/lib/studio'

export const metadata: Metadata = {
  title: {
    default: `${STUDIO_NAME} — party games for one phone`,
    // Game pages set their own title; this keeps the studio behind it.
    template: `%s · ${STUDIO_NAME}`,
  },
  description: STUDIO_TAGLINE,
  keywords: ['party games', 'social deduction', 'mafia', 'werewolf', 'bunker', 'offline', 'iOS', 'one phone'],
  authors: [{ name: STUDIO_NAME }],
  openGraph: {
    title: `${STUDIO_NAME} — party games for one phone`,
    description: STUDIO_TAGLINE,
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
