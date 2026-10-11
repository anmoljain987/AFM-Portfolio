import { NODES, EDGES } from './pipeline-data'

const byId = (id: string) => NODES.find(n => n.id === id)!
// orthographic projection of the same graph: x stays x, z becomes y
const X = (x: number) => 500 + x * 52
const Y = (z: number, y: number) => 210 + z * 25 - y * 16

// Sources sit shoulder to shoulder, so their labels alternate between two
// rows; trackers drop below the fan to clear the normalisation node.
const SOURCES = NODES.filter(n => n.kind === 'source').map(n => n.id)
const labelDy = (kind: string, id: string) =>
  kind === 'tracker' ? 26 : kind === 'source' ? (SOURCES.indexOf(id) % 2 ? -30 : -15) : -15

/** Static fallback drawn from the identical node data. No WebGL required. */
export default function PipelineFlat() {
  return (
    <svg className="eng-flat" viewBox="0 0 1000 420" role="img"
      aria-label="Fifteen data sources normalised into one schema, through Kafka and Vector into ClickHouse, out to reporting and an automation engine.">
      {EDGES.map(([a, b], i) => {
        const A = byId(a), B = byId(b)
        const spine = A.kind !== 'source' && A.kind !== 'tracker'
        return <line key={i} x1={X(A.pos[0])} y1={Y(A.pos[2], A.pos[1])}
          x2={X(B.pos[0])} y2={Y(B.pos[2], B.pos[1])}
          stroke="var(--viz-line)" strokeWidth={spine ? 1.4 : 0.6}
          opacity={spine ? 0.75 : 0.35} />
      })}
      {NODES.map(n => {
        const big = n.kind === 'store' || n.kind === 'normalise'
        const r = big ? 5.5 : n.kind === 'out' || n.kind === 'transport' ? 4 : 2.6
        return (
          <g key={n.id}>
            <circle cx={X(n.pos[0])} cy={Y(n.pos[2], n.pos[1])} r={r}
              fill={n.kind === 'out' ? 'var(--viz-flow)' : 'var(--viz-dot)'} />
            <text x={X(n.pos[0])} y={Y(n.pos[2], n.pos[1]) - (n.kind === 'tracker' ? -16 : 11)}
              textAnchor="middle" fill={big ? 'var(--ink)' : 'var(--muted)'}
              style={{ font: `${big ? 10 : 8}px var(--mono)`, letterSpacing: '.08em',
                       textTransform: 'uppercase' }}>
              {n.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
