import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { BEFORE, EDUCATION } from '../content'

export default function Before() {
  return (
    <section className="shell" id="before">
      <Reveal><SectionHead n="08" title="Before this" note="table tennis, then code" /></Reveal>
      <Reveal d={0.04}>
        <div className="eng-before">
          <p className="lede">{BEFORE.lede}</p>
          <ul className="tt-stats">
            {BEFORE.stats.map(s => (
              <li key={s.u}><span className="k">{s.k}</span><span className="u">{s.u}</span></li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal d={0.08}><p className="eng-before-note">{BEFORE.note}</p></Reveal>
      <div className="eng-path eng-edu">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.t} d={0.1 + i * 0.03}>
            <div className="eng-p">
              <span className="y">{e.y}</span>
              <div><div className="t">{e.t}</div><div className="d">{e.d}</div></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
