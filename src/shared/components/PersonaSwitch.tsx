import type { Persona } from '../hooks/usePersona'
import Clock from './Clock'

const TAG: Record<Persona, string> = { engineer: 'Platform engineer', dj: 'A.FM · DJ' }

export default function PersonaSwitch({ persona, other, go, unlocked }:
  { persona: Persona; other: Persona; go: (p: Persona) => void; unlocked: boolean }) {
  // engineer -> dj is concealed until unlocked; dj -> engineer is always open
  const canCross = persona === 'dj' || unlocked
  return (
    <div className="rail">
      <span className="rail-id">{persona === 'dj' ? 'A.FM' : 'Anmol Jain'}</span>
      <div className="rail-r">
        <span className="rail-now">{TAG[persona]}</span>
        <Clock />
        {canCross && (
          <button className="rail-btn" onClick={() => go(other)}
            aria-label={`Switch to ${other === 'dj' ? 'the DJ page' : 'the engineering page'}`}>
            {other === 'dj' ? 'DJ' : 'Engineer'} <span aria-hidden>↗</span>
          </button>
        )}
      </div>
    </div>
  )
}
