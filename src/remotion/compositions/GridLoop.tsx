import { useCurrentFrame, useVideoConfig, interpolate } from 'remotion'

export const GridLoop: React.FC = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()
  const progress = frame / durationInFrames

  // Grid line draw progress — resets each cycle
  const lineProgress = (frame % 60) / 60

  // Scan line
  const scanY = (progress * 110) % 110 - 10

  // Blue pulse radius
  const pulseR = 80 + 40 * Math.sin(progress * Math.PI * 4)
  const pulseOpacity = 0.15 + 0.1 * Math.sin(progress * Math.PI * 4)

  // Counter values
  const reqCount = Math.floor(interpolate(frame, [0, durationInFrames], [0, 1_240_000]))
  const latency = (4.1 - 1.5 * Math.sin(progress * Math.PI * 2)).toFixed(1)

  const GRID_SIZE = 60
  const COLS = Math.ceil(1920 / GRID_SIZE) + 1
  const ROWS = Math.ceil(1080 / GRID_SIZE) + 1

  return (
    <div style={{ width: '100%', height: '100%', background: '#0A0A0A', overflow: 'hidden', position: 'relative', fontFamily: 'JetBrains Mono, monospace' }}>
      {/* Grid lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {Array.from({ length: COLS }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * GRID_SIZE} y1={0}
            x2={i * GRID_SIZE} y2={1080}
            stroke="rgba(0,102,255,0.08)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: ROWS }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0} y1={i * GRID_SIZE}
            x2={1920} y2={i * GRID_SIZE}
            stroke="rgba(0,102,255,0.08)"
            strokeWidth="1"
          />
        ))}
        {/* Accent lines — thicker blue */}
        <line x1={0} y1={540} x2={1920} y2={540} stroke="rgba(0,102,255,0.18)" strokeWidth="1" />
        <line x1={960} y1={0} x2={960} y2={1080} stroke="rgba(0,102,255,0.18)" strokeWidth="1" />
      </svg>

      {/* Blue pulse at center */}
      <div style={{
        position: 'absolute',
        width: pulseR * 2,
        height: pulseR * 2,
        borderRadius: '50%',
        border: `1px solid rgba(0,102,255,${pulseOpacity * 2})`,
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
      }} />
      <div style={{
        position: 'absolute',
        width: pulseR * 4,
        height: pulseR * 4,
        borderRadius: '50%',
        border: `1px solid rgba(0,102,255,${pulseOpacity})`,
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
      }} />

      {/* Scan line */}
      <div style={{
        position: 'absolute',
        left: 0, right: 0,
        top: `${scanY}%`,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.6), rgba(0,102,255,0.9), rgba(0,102,255,0.6), transparent)',
      }} />

      {/* Live counters */}
      <div style={{ position: 'absolute', bottom: 80, left: 120, color: '#0066FF', fontSize: 14, letterSpacing: '0.12em' }}>
        <div style={{ color: 'rgba(240,240,240,0.3)', marginBottom: 8 }}>// REQUESTS PROCESSED</div>
        <div style={{ fontSize: 64, fontWeight: 700, color: '#F0F0F0', letterSpacing: '-0.04em', lineHeight: 1 }}>
          {reqCount.toLocaleString()}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 80, right: 120, color: '#0066FF', fontSize: 14, letterSpacing: '0.12em', textAlign: 'right' }}>
        <div style={{ color: 'rgba(240,240,240,0.3)', marginBottom: 8 }}>// AVG LATENCY (MS)</div>
        <div style={{ fontSize: 64, fontWeight: 700, color: '#F0F0F0', letterSpacing: '-0.04em', lineHeight: 1 }}>
          {latency}
        </div>
      </div>

      {/* Brand label */}
      <div style={{ position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)', fontSize: 13, letterSpacing: '0.25em', color: 'rgba(0,102,255,0.6)', textTransform: 'uppercase' }}>
        fluxio — api infrastructure
      </div>

      {/* Vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(10,10,10,0.7) 100%)' }} />
    </div>
  )
}
