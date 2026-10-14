import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePersona } from './shared/hooks/usePersona'
import { useRailHide } from './shared/hooks/useRailHide'
import PersonaSwitch from './shared/components/PersonaSwitch'
import Wipe from './shared/components/Wipe'
import Engineer from './personas/engineer'
import Dj from './personas/dj'

export default function App() {
  const { persona, other, go, wiping } = usePersona()
  useRailHide()

  useEffect(() => {
    // still mode drives scroll position directly; smooth scrolling fights it
    if (document.documentElement.dataset.still) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    let id = requestAnimationFrame(function raf(t: number) { lenis.raf(t); id = requestAnimationFrame(raf) })
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])

  return (
    <>
      <PersonaSwitch persona={persona} other={other} go={go} />
      <Wipe to={wiping} />
      {persona === 'dj' ? <Dj /> : <Engineer />}
    </>
  )
}
