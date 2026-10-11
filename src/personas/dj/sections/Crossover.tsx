import Reveal from '../../../shared/components/Reveal'
import { CROSSOVER } from '../content'

export default function Crossover() {
  return (
    <section className="shell" id="both">
      <Reveal>
        <div className="dj-cross"><h3>{CROSSOVER.t}</h3><p>{CROSSOVER.d}</p></div>
      </Reveal>
    </section>
  )
}
