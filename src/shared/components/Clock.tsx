import { useEffect, useState } from 'react'

/** Live local time, like the city chip on agency sites. */
export default function Clock({ tz = 'Asia/Kolkata', label = 'IST' }: { tz?: string; label?: string }) {
  const [t, setT] = useState('')
  useEffect(() => {
    const tick = () => setT(new Intl.DateTimeFormat('en-GB',
      { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).format(new Date()))
    tick(); const id = setInterval(tick, 10_000)
    return () => clearInterval(id)
  }, [tz])
  return <span className="clock mono">{label} {t}</span>
}
