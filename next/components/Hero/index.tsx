'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const attemptPlay = async () => {
      try {
        await videoEl.play()
        setIsVideoReady(true)
      } catch {
        videoEl.muted = true
        try {
          await videoEl.play()
          setIsVideoReady(true)
        } catch {
          setIsVideoReady(false)
        }
      }
    }

    if (videoEl.readyState >= 2) {
      setIsVideoReady(true)
    } else {
      attemptPlay()
    }
  }, [])

  const handleVideoLoaded = () => {
    setIsVideoReady(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div
        className={styles.videoBackground}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoReady ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
        >
          <source src="/videos/wave.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
      </motion.div>
      <motion.div 
        className={styles.backgroundBlur}
        style={{ opacity }}
      />
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className={styles.title} 
            variants={itemVariants}
            style={isMounted ? { y } : undefined}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming Businesses with
            </motion.span>
            <motion.span
              className={styles.highlight}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(255, 87, 34, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {' '}Innovative Technology Solutions
            </motion.span>
          </motion.h1>
          
          <motion.p className={styles.subtitle} variants={itemVariants}>
            We help businesses leverage cutting-edge technology to drive growth,
            improve efficiency, and stay ahead of the competition.
          </motion.p>
          
          <motion.div
            className={styles.ctaContainer}
            variants={itemVariants}
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                filter: "blur(0px) drop-shadow(0 10px 20px rgba(255, 87, 34, 0.3))"
              }} 
              whileTap={{ scale: 0.95 }}
              initial={{ filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/contact" className={styles.primaryButton}>
                Get Started
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                filter: "blur(0px)"
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/services" className={styles.secondaryButton}>
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

