import './theme.css'
import Themed from '../../shared/components/Themed'
import WordBreak from '../../shared/components/WordBreak'
import Hero from './sections/Hero'
import Afm from './sections/Afm'
import Sets from './sections/Sets'
import Crossover from './sections/Crossover'

export default function Dj() {
  return (
    <>
      <Themed theme="night"><Hero /></Themed>
      <main>
        <Themed theme="smoke"><Afm /></Themed>
        <Themed theme="acid">
          <WordBreak word="afm.live" caption="The library workstation I built because nothing did the thing I actually needed between a messy library and a clean set." />
        </Themed>
        <Themed theme="night"><Sets /></Themed>
        <Themed theme="bone"><Crossover /></Themed>
      </main>
    </>
  )
}
