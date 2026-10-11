import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { AFM } from '../content'

export default function Afm() {
  return (
    <section className="shell" id="afm">
      <Reveal><SectionHead n="01" title="The tool I built for it" note="open source" /></Reveal>
      <Reveal d={0.04}>
        <div className="afm-head">
          <span className="nm">{AFM.name}</span>
          <span className="kk">{AFM.kicker}</span>
        </div>
        <p className="afm-blurb">{AFM.blurb}</p>
        <div className="afm-stack">{AFM.stack.map(s => <span key={s}>{s}</span>)}</div>
      </Reveal>
      <div className="afm-grid">
        {AFM.features.map((f, i) => (
          <Reveal key={f.t} d={0.04 + (i % 3) * 0.04}>
            <div className="afm-f"><h4>{f.t}</h4><p>{f.d}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
