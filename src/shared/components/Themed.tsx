import { useEffect, useRef, type ReactNode } from 'react'

export type Theme = 'bone' | 'ink' | 'clay' | 'signal' | 'night' | 'smoke' | 'acid'

/**
 * A block that owns a palette. While it holds the middle of the viewport the
 * root takes on its theme, so the whole page — background, grain, type, rules —
 * crossfades instead of each section painting its own box.
 */
export default function Themed({ theme, children, className = '', id, as: As = 'section' }: {
  theme: Theme
  children: ReactNode
  className?: string
  id?: string
  as?: 'section' | 'header' | 'footer' | 'div'
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) document.documentElement.dataset.theme = theme },
      // fires as the block crosses the horizontal midline of the viewport
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [theme])

  return <As ref={ref as never} className={className} id={id} data-theme-block={theme}>{children}</As>
}
