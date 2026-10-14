import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { PLAYED, SHOTS } from '../content'

/** Hides itself when there is nothing to show. An empty list reads worse than no section. */
export default function Played({ n }: { n: string }) {
  if (PLAYED.length === 0) return null
  return (
    <section className="shell" id="played">
      <Reveal><SectionHead n={n} title="Played at" note={`${PLAYED.length} rooms`} /></Reveal>
      <div className="dj-strip">
        {SHOTS.map(s => (
          <figure key={s.src}><img src={s.src} alt={s.alt} loading="lazy" width="900" height="1200" /></figure>
        ))}
      </div>
      <div className="dj-rooms">
        {PLAYED.map((p, i) => (
          <Reveal key={p.venue + p.when} d={i * 0.03}>
            <div className="dj-room">
              <span className="v">{p.venue}</span>
              <span className="c">{p.city}</span>
              <span className="w">{p.when}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
