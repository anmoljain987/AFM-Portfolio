import { lazy, Suspense, useEffect, useState } from 'react'
import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import Boundary from '../../../shared/components/Boundary'
import { useWebGL } from '../../../shared/hooks/useWebGL'
import PipelineFlat from '../three/PipelineFlat'

const Pipeline = lazy(() => import('../three/Pipeline'))

export default function Diagram() {
  const gl = useWebGL()
  const [ready, setReady] = useState(false)
  useEffect(() => { const t = setTimeout(() => setReady(true), 120); return () => clearTimeout(t) }, [])
  return (
    <section className="shell" id="shape">
      <Reveal><SectionHead n="01" title="The shape of it" note="fifteen in, one schema out" /></Reveal>
      <div className="eng-viz" aria-hidden="true">
        {gl === false && <PipelineFlat />}
        {gl === true && ready && (
          <Boundary fallback={<PipelineFlat />}>
            <Suspense fallback={<PipelineFlat />}><Pipeline /></Suspense>
          </Boundary>
        )}
      </div>
    </section>
  )
}
