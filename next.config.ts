import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // The dev-only overlay badge sits on top of the page in the bottom-left
  // corner, which is exactly where designloop's captures look for content —
  // it was being graded as a floating badge obscuring a statistics label.
  devIndicators: false,
}

export default nextConfig
