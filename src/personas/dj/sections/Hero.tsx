import { DJ } from '../content'
import SplitText from '../../../shared/components/SplitText'

const MARQUEE = ['afm.live', 'library prep', 'hot cues', 'local-first',
  'rekordbox', 'soundcloud', 'spotify', 'no cloud account']

export default function Hero() {
  const loop = [...MARQUEE, ...MARQUEE]
  return (
    <header className="big-hero">
      <h1 className="big-type">
        <span className="ln"><SplitText text={DJ.line1} delay={0.04} /></span>
        <span className="ln ind"><SplitText text={DJ.line2} delay={0.12} /></span>
        <span className="ln"><SplitText text={DJ.line3} delay={0.2} /></span>
        <span className="ln ind sig"><SplitText text={DJ.line4} delay={0.28} /></span>
      </h1>

      <div className="big-bottom">
        <p className="sub">{DJ.sub}</p>
        <span className="big-scroll">{DJ.tag} — scroll ↓</span>
      </div>

      <div className="big-marquee" aria-hidden="true">
        <span>{loop.map(w => `${w} — `).join('')}</span>
      </div>
    </header>
  )
}
