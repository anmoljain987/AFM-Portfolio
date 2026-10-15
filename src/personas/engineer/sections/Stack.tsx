import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { STACK } from '../content'

/** Full stack as a claim is cheap. This names the layer, the work and the tools. */
export default function Stack() {
  return (
    <section className="shell" id="stack">
      <Reveal><SectionHead n="02" title="End to end" note={`${STACK.length} layers, all mine`} /></Reveal>
      <div className="eng-stack">
        {STACK.map((l, i) => (
          <Reveal key={l.layer} d={i * 0.03}>
            <div className="eng-layer">
              <span className="lay">{l.layer}</span>
              <p className="wht">{l.what}</p>
              <div className="tg">{l.tools.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
