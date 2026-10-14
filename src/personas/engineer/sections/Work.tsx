import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { WORK } from '../content'

export default function Work() {
  return (
    <section className="shell" id="work">
      <Reveal><SectionHead n="03" title="Selected work" note={`${WORK.length} entries`} /></Reveal>
      <div className="eng-work">
        {WORK.map((w, i) => (
          <Reveal key={w.t} d={i * 0.03}>
            <article className="eng-w">
              <div className="i">{String(i + 1).padStart(2, '0')}</div>
              <div><h3>{w.t}</h3><p>{w.d}</p></div>
              <div className="tg">{w.tags.map(t => <span key={t}>{t}</span>)}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
