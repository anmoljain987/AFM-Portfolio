import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { RECOGNITION } from '../content'

export default function Recognition() {
  return (
    <section className="shell" id="recognition">
      <Reveal><SectionHead n="06" title="Recognised" note="four awards in four years" /></Reveal>
      <div className="eng-rec">
        {RECOGNITION.map((r, i) => (
          <Reveal key={r.t} d={i * 0.03}>
            <div className="eng-r">
              <span className="y">{r.y}</span>
              <div><div className="t">{r.t}</div><div className="d">{r.d}</div></div>
              <span className="g">{r.tag}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
