import { useEffect } from 'react'

/**
 * The rail has no backdrop, so section headings would run underneath it.
 * It leaves on the way down and comes back on the way up — the page keeps its
 * full bleed and the type never collides with it.
 */
export function useRailHide() {
  useEffect(() => {
    if (document.documentElement.dataset.still) return
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const hidden = y > 140 && y > last
      document.documentElement.dataset.rail = hidden ? 'hidden' : 'shown'
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
