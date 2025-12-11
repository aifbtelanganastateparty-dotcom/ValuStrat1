'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface RevealOnScrollProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

const RevealOnScroll = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: RevealOnScrollProps) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const directionMap = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  }

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={directionMap[direction]}
      animate={
        hasIntersected
          ? { x: 0, y: 0, opacity: 1 }
          : directionMap[direction]
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll

