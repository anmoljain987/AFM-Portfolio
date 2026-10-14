import type { Persona } from '../hooks/usePersona'

const NAME: Record<Persona, string> = { engineer: 'Anmol Jain', dj: 'AFM' }
const ROLE: Record<Persona, string> = { engineer: 'Platform engineer', dj: 'DJ · afm.live' }

/**
 * The slab that covers the persona swap. It is painted in the INCOMING
 * persona's colours, so the new palette arrives before its content does.
 */
export default function Wipe({ to }: { to: Persona | null }) {
  if (!to) return null
  return (
    <div className="wipe" data-to={to} aria-hidden="true">
      <span className="wipe-name">{NAME[to]}</span>
      <span className="wipe-role">{ROLE[to]}</span>
    </div>
  )
}
