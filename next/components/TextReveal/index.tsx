'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface TextRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

const TextReveal = ({ children, delay = 0, className = '' }: TextRevealProps) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default TextReveal

