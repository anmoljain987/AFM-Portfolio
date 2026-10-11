import React from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/base.css'
import './shared/styles/layout.css'
import App from './App'

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)

// arms the entrance animations; without it every reveal renders in its
// resting state, which is the correct degraded view rather than a blank one
document.documentElement.dataset.anim = '1'

// Still mode gives two reproducible ways to photograph one band:
//   ?only=<selector>  render that band alone at scroll 0  (preferred)
//   ?at=<selector>    scroll to it in the full page
// `only` exists because a scrolled headless capture composites unreliably.
const q = new URLSearchParams(location.search)
if (document.documentElement.dataset.still) {
  const only = q.get('only')
  const at = q.get('at')
  if (only) {
    const pick = () => {
      const el = document.querySelector(only)
      if (!el) return
      const band = el.closest('.band') ?? el
      document.documentElement.dataset.only = '1'
      document.querySelectorAll('#root > .band, #root > main > .band')
        .forEach(b => { if (b !== band) (b as HTMLElement).style.display = 'none' })
      scrollTo(0, 0)
    }
    ;[0, 300, 900, 1800, 3000].forEach(ms => setTimeout(pick, ms))
  } else if (at) {
    const seat = () => document.querySelector(at)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    ;[0, 300, 900, 1800, 3000, 4200].forEach(ms => setTimeout(seat, ms))
  }
}

// fonts decide whether the first paint is right, so the curtain waits on them
const done = () => (window as unknown as { __bootDone?: () => void }).__bootDone?.()
if (document.fonts?.ready) document.fonts.ready.then(() => requestAnimationFrame(done))
else requestAnimationFrame(done)
