import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { SETS } from '../content'

export default function Sets() {
  return (
    <section className="shell" id="sets">
      <Reveal><SectionHead n="02" title="Sets" /></Reveal>
      <Reveal d={0.04}>
        {SETS.length === 0
          ? <div className="dj-empty">Mixes go here — add them in personas/dj/content.ts</div>
          : <div className="afm-grid">
              {SETS.map(s => (
                <div className="afm-f" key={s.title}>
                  <h4>{s.title}</h4>
                  <p>{s.where} · {s.when}</p>
                </div>
              ))}
            </div>}
      </Reveal>
    </section>
  )
}
