import { PERSON, HERO } from '../content'
import SplitText from '../../../shared/components/SplitText'

const MARQUEE = ['meta', 'google', 'tiktok', 'snapchat', 'newsbreak', 'openai ads',
  'smartnews', 'mediago', 'bigo', 'shopify', 'voluum', 'redtrack', 'clickflare']

const FIGURES = [
  { n: '~5B', u: 'rows live' },
  { n: '117–131', u: 'ms p95' },
  { n: '~40 / 95', u: 'services owned' },
  { n: '1,700', u: 'runs / day' },
]

export default function Hero() {
  const loop = [...MARQUEE, ...MARQUEE]
  return (
    <header className="big-hero">
      <ul className="big-side">
        {FIGURES.map(f => (
          <li key={f.u}><span className="n">{f.n}</span><span className="u">{f.u}</span></li>
        ))}
      </ul>

      <h1 className="big-type">
        <span className="ln"><SplitText text={HERO.line1} delay={0.04} /></span>
        <span className="ln ind"><SplitText text={HERO.line2} delay={0.12} /></span>
        <span className="ln"><SplitText text={HERO.line3} delay={0.2} /></span>
        <span className="ln ind sig"><SplitText text={HERO.line4} delay={0.28} /></span>
      </h1>

      <div className="big-bottom">
        <p className="sub">{HERO.sub}</p>
        <span className="big-scroll">{PERSON.role} · {PERSON.company} — scroll ↓</span>
      </div>

      <div className="big-marquee" aria-hidden="true">
        <span>{loop.map(w => `${w} — `).join('')}</span>
      </div>
    </header>
  )
}
