import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { MIXES } from '../content'

/** Hides itself until there are mixes. This is the section a promoter decides from. */
export default function Mixes({ n }: { n: string }) {
  if (MIXES.length === 0) return null
  return (
    <section className="shell" id="listen">
      <Reveal><SectionHead n={n} title="Listen" /></Reveal>
      <div className="dj-mixes">
        {MIXES.map((m, i) => (
          <Reveal key={m.url} d={i * 0.04}>
            <a className="dj-mix" href={m.url} target="_blank" rel="noreferrer">
              <span className="t">{m.title}</span>
              <span className="p">{m.platform}{m.when ? ` · ${m.when}` : ''}</span>
              <span className="go" aria-hidden="true">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
