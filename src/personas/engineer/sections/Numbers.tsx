import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { METRICS } from '../content'

export default function Numbers() {
  return (
    <section className="shell" id="numbers">
      <Reveal><SectionHead n="03" title="Measured, not estimated" note="source shown per row" /></Reveal>
      <div className="eng-metrics">
        {METRICS.map((m, i) => (
          <Reveal key={m.k + m.unit} d={i * 0.03}>
            <div className="eng-m">
              <div><span className="k">{m.k}</span><span className="u">{m.unit}</span></div>
              <div className="l">{m.label}</div>
              <div className="h">{m.how}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
