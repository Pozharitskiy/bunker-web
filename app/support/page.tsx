import type { Metadata } from 'next'
import SupportContent from '@/components/SupportContent'

export const metadata: Metadata = {
  title: 'Support — Bunker',
  description: 'Get help with Bunker — the survival social deduction game.',
}

export default function SupportPage() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>
      <SupportContent />
    </div>
  )
}
