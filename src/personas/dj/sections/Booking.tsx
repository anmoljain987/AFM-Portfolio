import Reveal from '../../../shared/components/Reveal'
import { DJ, LINKS } from '../content'

export default function Booking() {
  return (
    <section className="shell dj-booking" id="booking">
      <Reveal>
        <h2>Bookings<br />and record talk.</h2>
        <div className="eng-links">
          <a className="dj-lk" href={LINKS.instagram} target="_blank" rel="noreferrer">{LINKS.handle} ↗</a>
          <a className="dj-lk" href={LINKS.site} target="_blank" rel="noreferrer">afm.live ↗</a>
        </div>
        <div className="eng-foot">{DJ.alias} · {DJ.say} · {DJ.city}</div>
      </Reveal>
    </section>
  )
}
