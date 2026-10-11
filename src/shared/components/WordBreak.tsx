import SplitText from './SplitText'

/**
 * One statement at display scale with nothing beside it. The page's punctuation:
 * it gives the scroll somewhere to land between dense sections.
 */
export default function WordBreak({ word, caption }: { word: string; caption?: string }) {
  return (
    <div className="wordbreak">
      <span className="w"><SplitText text={word} delay={0.02} /></span>
      {caption && <p className="cap mono">{caption}</p>}
    </div>
  )
}
