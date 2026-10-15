import Reveal from '../../../shared/components/Reveal'
import { PERSON } from '../content'

export default function Contact() {
  return (
    <section className="eng-contact shell" id="contact">
      <Reveal>
        <h2>Happy to talk about data<br />infrastructure at scale.</h2>
        <div className="eng-links">
          <a className="eng-lk eng-lk-cv" href="/Anmol-Jain-Resume.pdf" download>Résumé (PDF) ↓</a>
          <a className="eng-lk" href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
          <a className="eng-lk" href={PERSON.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="eng-lk" href={PERSON.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <div className="eng-foot">
          {PERSON.location}<br />
          Every figure on this page is measured, not estimated. Sources are listed beside each one.<br />
          Built with React, TypeScript and three.js.
        </div>
      </Reveal>
    </section>
  )
}
