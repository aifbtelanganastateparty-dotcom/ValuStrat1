'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FloatingElementsProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
}

const FloatingElements = ({
  children,
  className = '',
  duration = 3,
  delay = 0,
}: FloatingElementsProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default FloatingElements

