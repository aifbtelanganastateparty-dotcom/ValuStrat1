'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  splitBy?: 'words' | 'chars' | 'none'
}

const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  splitBy = 'words',
}: AnimatedTextProps) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  if (splitBy === 'none') {
    return (
      <motion.span
        ref={elementRef}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay }}
      >
        {text}
      </motion.span>
    )
  }

  const items = splitBy === 'words' ? text.split(' ') : text.split('')

  return (
    <span ref={elementRef} className={className}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={
            hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.3,
            delay: delay + index * 0.05,
            ease: 'easeOut',
          }}
          style={{ display: 'inline-block', marginRight: splitBy === 'words' ? '0.25em' : '0.05em' }}
        >
          {item}
          {splitBy === 'words' && index < items.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  )
}

export default AnimatedText

