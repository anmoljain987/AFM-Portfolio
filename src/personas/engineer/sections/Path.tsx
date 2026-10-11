import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { TIMELINE } from '../content'

export default function Path() {
  return (
    <section className="shell" id="path">
      <Reveal><SectionHead n="04" title="Four years, one company" note="junior to lead in 22 months" /></Reveal>
      <div className="eng-path">
        {TIMELINE.map((r, i) => (
          <Reveal key={r.t} d={i * 0.03}>
            <div className="eng-p">
              <span className="y">{r.y}</span>
              <div><div className="t">{r.t}</div><div className="d">{r.d}</div></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
