import { useCallback, useEffect, useRef, useState } from 'react'

export type Persona = 'engineer' | 'dj'
const read = (): Persona => (typeof window !== 'undefined' &&
  window.location.pathname.replace(/\/+$/, '').endsWith('/dj') ? 'dj' : 'engineer')

/** Half of the wipe. Must match --d-panel in base.css. */
const WIPE_MS = 420

/** Persona lives in the URL so it is shareable and survives reload. No router needed. */
export function usePersona() {
  const [persona, set] = useState<Persona>(read)
  const [wiping, setWiping] = useState<Persona | null>(null)
  const timers = useRef<number[]>([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  useEffect(() => {
    const onPop = () => set(read())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.persona = persona
    document.title = persona === 'dj'
      ? 'Anmol Jain — DJ'
      : 'Anmol Jain — Platform Engineer'
  }, [persona])

  const swap = useCallback((p: Persona) => {
    window.history.pushState({}, '', p === 'dj' ? '/dj' : '/')
    set(p)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  /**
   * Switching persona replaces the entire page. Cutting straight to it reads as
   * a bug, so a slab carrying the incoming name covers the screen, the swap
   * happens behind it, and it leaves. Still mode and reduced motion cut
   * straight through — the wipe is covering a change, not explaining one.
   */
  const go = useCallback((p: Persona) => {
    const root = document.documentElement
    const instant = root.dataset.still ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (instant || wiping) { swap(p); return }

    setWiping(p)
    root.dataset.wipe = 'in'
    timers.current.push(window.setTimeout(() => {
      swap(p)
      root.dataset.wipe = 'out'
    }, WIPE_MS))
    timers.current.push(window.setTimeout(() => {
      delete root.dataset.wipe
      setWiping(null)
    }, WIPE_MS * 2))
  }, [swap, wiping])

  return { persona, go, wiping, other: (persona === 'dj' ? 'engineer' : 'dj') as Persona }
}
