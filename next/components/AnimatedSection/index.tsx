'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import styles from './AnimatedSection.module.css'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  className?: string
}

const directionVariants = {
  up: { y: 50, opacity: 0 },
  down: { y: -50, opacity: 0 },
  left: { x: 50, opacity: 0 },
  right: { x: -50, opacity: 0 },
  fade: { opacity: 0 },
}

const AnimatedSection = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: AnimatedSectionProps) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={elementRef}
      className={`${styles.animatedSection} ${className}`}
      initial={directionVariants[direction]}
      animate={
        hasIntersected
          ? { x: 0, y: 0, opacity: 1 }
          : directionVariants[direction]
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

export default AnimatedSection

