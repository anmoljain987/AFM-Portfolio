import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { PRINCIPLES } from '../content'

export default function Principles() {
  return (
    <section className="shell" id="how">
      <Reveal><SectionHead n="04" title="How I work" /></Reveal>
      <div className="eng-prin">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.t} d={i * 0.04}>
            <div><h3>{p.t}</h3><p>{p.d}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
