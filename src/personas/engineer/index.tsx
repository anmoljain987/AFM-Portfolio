import './theme.css'
import Themed from '../../shared/components/Themed'
import WordBreak from '../../shared/components/WordBreak'
import Hero from './sections/Hero'
import Diagram from './sections/Diagram'
import Numbers from './sections/Numbers'
import Work from './sections/Work'
import Principles from './sections/Principles'
import Path from './sections/Path'
import Contact from './sections/Contact'

/**
 * The scroll is a ladder of palettes: paper, dark, a full-bleed red slam on the
 * headline figure, clay, paper, dark, paper. Each band hands its theme to the
 * root as it crosses the middle of the viewport.
 */
export default function Engineer() {
  return (
    <>
      <Themed theme="bone"><Hero /></Themed>
      <main>
        <Themed theme="ink"><Diagram /></Themed>
        <Themed theme="signal">
          <WordBreak
            word="600 billion"
            caption="Rows scanned a month, across four production ClickHouse clusters. Counted from system.query_log over a rolling thirty days — not estimated."
          />
        </Themed>
        <Themed theme="bone"><Numbers /></Themed>
        <Themed theme="clay"><Work /></Themed>
        <Themed theme="bone"><Principles /></Themed>
        <Themed theme="ink"><Path /></Themed>
        <Themed theme="bone"><Contact /></Themed>
      </main>
    </>
  )
}
