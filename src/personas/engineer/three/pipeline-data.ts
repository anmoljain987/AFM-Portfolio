export type NodeKind = 'source' | 'tracker' | 'normalise' | 'transport' | 'store' | 'out'

export interface PNode {
  id: string; label: string; kind: NodeKind
  pos: [number, number, number]
  note?: string
}

const SOURCES = ['Meta', 'Google', 'TikTok', 'Snapchat', 'NewsBreak', 'OpenAI Ads', 'SmartNews', 'MediaGo', 'BIGO', 'Shopify', 'Native', 'PPC']
const TRACKERS = ['Voluum', 'Redtrack', 'Clickflare']

/** Sources fan across a shallow arc at the back; the spine runs forward to the outputs. */
export const NODES: PNode[] = [
  ...SOURCES.map((label, i) => {
    const t = (i / (SOURCES.length - 1) - 0.5) * 2
    return { id: `s${i}`, label, kind: 'source' as const,
      pos: [t * 7.2, Math.cos(t * 1.5) * 0.9 + 1.4, -6.4 + Math.abs(t) * 1.1] as [number, number, number] }
  }),
  ...TRACKERS.map((label, i) => {
    const t = (i / (TRACKERS.length - 1) - 0.5) * 2
    return { id: `t${i}`, label, kind: 'tracker' as const,
      pos: [t * 3.1, -1.9, -5.6] as [number, number, number] }
  }),
  { id: 'norm', label: 'normalisation', kind: 'normalise', pos: [0, 0, -2.6], note: 'one schema, 15 in' },
  { id: 'kafka', label: 'Kafka', kind: 'transport', pos: [0, 0, -0.5] },
  { id: 'vector', label: 'Vector', kind: 'transport', pos: [0, 0, 1.3] },
  { id: 'ch', label: 'ClickHouse', kind: 'store', pos: [0, 0, 3.3], note: '~5B rows live · 117ms p95' },
  { id: 'report', label: 'reporting', kind: 'out', pos: [-3.0, 0.2, 5.6] },
  { id: 'auto', label: 'automation engine', kind: 'out', pos: [3.0, -0.2, 5.6], note: '~1,700 runs/day' },
]

export const EDGES: [string, string][] = [
  ...SOURCES.map((_, i) => [`s${i}`, 'norm'] as [string, string]),
  ...TRACKERS.map((_, i) => [`t${i}`, 'norm'] as [string, string]),
  ['norm', 'kafka'], ['kafka', 'vector'], ['vector', 'ch'],
  ['ch', 'report'], ['ch', 'auto'],
]

export const KIND_COLOR: Record<NodeKind, string> = {
  source: '#5EE6D0', tracker: '#7FA8FF', normalise: '#E8EAED',
  transport: '#5EE6D0', store: '#E8EAED', out: '#F0A64A',
}
