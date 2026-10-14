import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Scroll-in reveal. Framer's `y` shorthand animates on the main thread, so the
 * full transform string is used instead — it stays hardware accelerated when
 * the page is busy. Duration sits inside the sub-300ms UI budget.
 */
export default function Reveal({ children, d = 0 }: { children: React.ReactNode; d?: number }) {
  const r = useRef(null)
  const seen = useInView(r, { once: true, margin: '-10% 0px' })
  return (
    <motion.div
      ref={r}
      initial={{ opacity: 0.001, transform: 'translateY(10px)' }}
      animate={{ opacity: seen ? 1 : 0.001, transform: seen ? 'translateY(0px)' : 'translateY(10px)' }}
      transition={{ duration: 0.28, delay: d, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  )
}
