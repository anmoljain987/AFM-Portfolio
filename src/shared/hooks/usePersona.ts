import { useCallback, useEffect, useState } from 'react'

export type Persona = 'engineer' | 'dj'
const read = (): Persona => (typeof window !== 'undefined' &&
  window.location.pathname.replace(/\/+$/, '').endsWith('/dj') ? 'dj' : 'engineer')

/** Persona lives in the URL so it is shareable and survives reload. No router needed. */
export function usePersona() {
  const [persona, set] = useState<Persona>(read)

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

  const go = useCallback((p: Persona) => {
    window.history.pushState({}, '', p === 'dj' ? '/dj' : '/')
    set(p)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  return { persona, go, other: (persona === 'dj' ? 'engineer' : 'dj') as Persona }
}
