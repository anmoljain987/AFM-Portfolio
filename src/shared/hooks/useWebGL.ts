import { useEffect, useState } from 'react'

/** Feature-detect once. Never assume a GPU is there. */
export function useWebGL() {
  const [ok, setOk] = useState<boolean | null>(null)
  useEffect(() => {
    try {
      const c = document.createElement('canvas')
      setOk(Boolean(c.getContext('webgl2') || c.getContext('webgl')))
    } catch { setOk(false) }
  }, [])
  return ok
}
