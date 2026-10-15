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
  ['Full-stack engineer on two advertising SaaS products. Fifteen data sources into one schema, ~5B rows live on ClickHouse, p95 under 135ms.',
   'A.FM. House, tech, and whatever slaps. Chandigarh. Eleven rooms and counting, and the library workstation behind the sets.'],
  ['og-engineer.png', 'og-dj.png'],
  ['href="/favicon.svg"', 'href="/afm/badge.png"'],
  ['https://anmoljain987.vercel.app/"', 'https://anmoljain987.vercel.app/dj"'],
  ['A.FM. DJ, and the local-first library workstation behind the sets.',
   'A.FM. DJ, and the local-first library workstation behind the sets.'],
]

let out = src
for (const [from, to] of SWAPS) out = out.replaceAll(from, to)

if (out === src) { console.error('postbuild: nothing was swapped — check the strings'); process.exit(1) }
writeFileSync(new URL('dj.html', DIST), out)
console.log('postbuild: dist/dj.html written')
