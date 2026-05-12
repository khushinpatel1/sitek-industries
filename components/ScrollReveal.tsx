'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  distance?: number
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  distance = 36,
}: Props) {
  const x =
    direction === 'left' ? -distance : direction === 'right' ? distance : 0
  const y =
    direction === 'up' ? distance : direction === 'down' ? -distance : 0

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
