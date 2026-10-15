import { useEffect, useState } from 'react'

/** Change this to change the reveal. Typing it is both the gesture and the key. */
const SECRET = 'afm'
const STORE = 'aj.unlocked'

/**
 * The other life is not advertised. Typing the secret anywhere on the page
 * reveals the switch; typing it again hides it, so it can be put away after
 * showing someone. The state is remembered per browser.
 *
 * This is concealment, not security: /dj is still reachable directly and the
 * string ships in the bundle. It exists so the page does not announce the
 * other side to everyone who lands on it.
 */
export function useUnlock() {
  const [unlocked, setUnlocked] = useState(() => {
    if (typeof window === 'undefined') return false
    if (document.documentElement.dataset.still) return true
    try { return localStorage.getItem(STORE) === '1' } catch { return false }
  })

  useEffect(() => {
    let buf = ''
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const t = e.target as HTMLElement | null
      if (t && /^(INPUT|TEXTAREA)$/.test(t.tagName)) return
      if (e.key.length !== 1) return
      buf = (buf + e.key.toLowerCase()).slice(-SECRET.length)
      if (buf !== SECRET) return
      buf = ''
      setUnlocked(prev => {
        const next = !prev
        try { next ? localStorage.setItem(STORE, '1') : localStorage.removeItem(STORE) } catch { /* private mode */ }
        return next
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return unlocked
}
