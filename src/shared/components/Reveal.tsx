import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Reveal({ children, d = 0 }: { children: React.ReactNode; d?: number }) {
  const r = useRef(null)
  const seen = useInView(r, { once: true, margin: '-10% 0px' })
  return (
    <motion.div ref={r} initial={{ opacity: 0.001, y: 12 }}
      animate={{ opacity: 1, y: seen ? 0 : 12 }}
      transition={{ duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}
