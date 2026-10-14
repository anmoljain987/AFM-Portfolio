import { readFileSync, writeFileSync } from 'node:fs'

/**
 * /dj is the same SPA, but a crawler never runs the JS — so without its own
 * HTML it would inherit the engineer share card. This writes a second
 * document with the DJ metadata; vercel.json rewrites /dj to it.
 */
const DIST = new URL('../dist/', import.meta.url)
const src = readFileSync(new URL('index.html', DIST), 'utf8')

const SWAPS = [
  ['Anmol Jain — Platform Engineer', 'AFM — DJ, and the software behind it'],
  ['Fifteen data sources. One schema. 600 billion rows a month at sub-250ms p95.',
   'I play, and I write the software I play with. AFM is the local-first library workstation behind the sets.'],
  ['og-engineer.png', 'og-dj.png'],
  ['href="/favicon.svg"', 'href="/afm/badge.png"'],
  ['https://anmoljain987.vercel.app/"', 'https://anmoljain987.vercel.app/dj"'],
  ['I own the layer where fifteen data sources become one. 600 billion rows a month on ClickHouse at sub-250ms p95.',
   'AFM. DJ, and the local-first library workstation behind the sets.'],
]

let out = src
for (const [from, to] of SWAPS) out = out.replaceAll(from, to)

if (out === src) { console.error('postbuild: nothing was swapped — check the strings'); process.exit(1) }
writeFileSync(new URL('dj.html', DIST), out)
console.log('postbuild: dist/dj.html written')
