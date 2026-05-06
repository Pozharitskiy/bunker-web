'use client'

// Flat-top hexagon grid, properly tiling
// r = circumradius, a = apothem (inradius) = sqrt(3)/2 * r
// Tile W = 3*r, Tile H = sqrt(3)*r
// Centers: (r, a), (2.5*r, 0), (2.5*r, 2*a)

const r = 28
const a = Math.round((r * Math.sqrt(3)) / 2) // ≈ 24
const W = r * 3        // 84
const H = a * 2        // 48

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
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0 }}
      >
        <defs>
          <pattern
            id="hex-grid"
            x="0"
            y="0"
            width={W}
            height={H}
            patternUnits="userSpaceOnUse"
          >
            {/* Hex 1: center column, middle row */}
            <path
              d={hexPath(r, a)}
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.8"
              opacity="0.08"
            />
            {/* Hex 2: right column, top (partially above tile — wraps) */}
            <path
              d={hexPath(r * 2.5, 0)}
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.8"
              opacity="0.08"
            />
            {/* Hex 3: right column, bottom (partially below tile — wraps) */}
            <path
              d={hexPath(r * 2.5, H)}
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.8"
              opacity="0.08"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>
    </div>
  )
}
