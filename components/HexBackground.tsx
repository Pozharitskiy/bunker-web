'use client'

// Atmospheric background: faint hex grid + red glow pools + vignette,
// matching the in-app post-apocalyptic look.

const r = 28
const a = Math.round((r * Math.sqrt(3)) / 2)
const W = r * 3
const H = a * 2

function hexPath(cx: number, cy: number): string {
  const h = a
  const pts = [
    [cx + r,     cy    ],
    [cx + r / 2, cy + h],
    [cx - r / 2, cy + h],
    [cx - r,     cy    ],
    [cx - r / 2, cy - h],
    [cx + r / 2, cy - h],
  ]
  return pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ') + ' Z'
}

export default function HexBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* red glow pools */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120vmax',
          height: '80vmax',
          background: 'radial-gradient(ellipse at center, rgba(242,56,79,0.10) 0%, rgba(242,56,79,0.03) 40%, transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          right: '-15%',
          width: '70vmax',
          height: '70vmax',
          background: 'radial-gradient(circle at center, rgba(120,30,80,0.12) 0%, transparent 65%)',
        }}
      />

      {/* hex grid */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0 }}
      >
        <defs>
          <pattern id="hex-grid" x="0" y="0" width={W} height={H} patternUnits="userSpaceOnUse">
            <path d={hexPath(r, a)} fill="none" stroke="#f2384f" strokeWidth="0.7" opacity="0.06" />
            <path d={hexPath(r * 2.5, 0)} fill="none" stroke="#f2384f" strokeWidth="0.7" opacity="0.06" />
            <path d={hexPath(r * 2.5, H)} fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.04" />
          </pattern>
          <radialGradient id="hex-fade" cx="50%" cy="30%" r="80%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.15" />
          </radialGradient>
          <mask id="hex-mask">
            <rect width="100%" height="100%" fill="url(#hex-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" mask="url(#hex-mask)" />
      </svg>

      {/* vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, transparent 55%, rgba(5,3,8,0.55) 100%)',
        }}
      />
    </div>
  )
}
