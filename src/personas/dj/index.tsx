import './theme.css'
import Themed from '../../shared/components/Themed'
import WordBreak from '../../shared/components/WordBreak'
import Hero from './sections/Hero'
import Sound from './sections/Sound'
import Played from './sections/Played'
import Mixes from './sections/Mixes'
import Afm from './sections/Afm'
import Booking from './sections/Booking'
import { PLAYED, MIXES } from './content'

/**
 * Promoter-facing order: who he is and what he plays first, the software last.
 * Played and Listen remove themselves while they have no content, so the
 * numbering is computed rather than hardcoded.
 */
export default function Dj() {
  let n = 1
  const next = () => String(n++).padStart(2, '0')
  const sound = next()
  const played = PLAYED.length ? next() : ''
  const mixes = MIXES.length ? next() : ''
  const afm = next()
  void sound
  return (
    <>
      <Themed theme="night"><Hero /></Themed>
      <main>
        <Themed theme="smoke"><Sound /></Themed>
        <Themed theme="acid">
          <WordBreak word="A.FM" caption="House, tech, and whatever slaps. Chandigarh." />
        </Themed>
        {PLAYED.length > 0 && <Themed theme="night"><Played n={played} /></Themed>}
        {MIXES.length > 0 && <Themed theme="smoke"><Mixes n={mixes} /></Themed>}
        <Themed theme="night"><Afm n={afm} /></Themed>
        <Themed theme="bone"><Booking /></Themed>
      </main>
    </>
  )
}
