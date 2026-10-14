import Reveal from '../../../shared/components/Reveal'
import SectionHead from '../../../shared/components/SectionHead'
import { SOUND, DJ } from '../content'

export default function Sound() {
  return (
    <section className="shell" id="sound">
      <Reveal><SectionHead n="01" title="The sound" note={DJ.city} /></Reveal>
      <Reveal d={0.04}>
        <div className="dj-sound">
          <p className="dj-statement">{SOUND.body}</p>
          <ul className="dj-genres">
            {SOUND.genres.map(g => <li key={g}>{g}</li>)}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
