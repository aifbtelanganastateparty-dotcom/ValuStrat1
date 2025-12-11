'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './GlowEffect.module.css'

interface GlowEffectProps {
  children: ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

const GlowEffect = ({
  children,
  className = '',
  intensity = 'medium',
}: GlowEffectProps) => {
  const intensityMap = {
    low: 'rgba(255, 87, 34, 0.2)',
    medium: 'rgba(255, 87, 34, 0.4)',
    high: 'rgba(255, 87, 34, 0.6)',
  }

  return (
    <motion.div
      className={`${styles.glowContainer} ${className}`}
      whileHover={{
        boxShadow: `0 0 30px ${intensityMap[intensity]}`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default GlowEffect

