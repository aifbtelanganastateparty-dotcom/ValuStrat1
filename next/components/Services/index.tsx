'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import styles from './Services.module.css'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
  id: string
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  index,
}) => (
  <motion.div
    className={styles.serviceCard}
    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.6,
      delay: index * 0.1,
    }}
    whileHover={{
      y: -10,
      scale: 1.02,
      filter: 'blur(0px) drop-shadow(0 20px 40px rgba(255, 87, 34, 0.2))',
      rotateY: 5,
    }}
  >
    <motion.div
      className={styles.iconContainer}
      whileHover={{
        rotate: 360,
        scale: 1.1,
        filter: 'blur(0px) drop-shadow(0 10px 20px rgba(255, 87, 34, 0.3))',
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
        duration: 0.6,
      }}
    >
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
    </motion.div>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDescription}>{description}</p>
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link href={link} className={styles.learnMore}>
        Learn More →
      </Link>
    </motion.div>
  </motion.div>
)

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          }}
        >
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            We offer end-to-end technology solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/services" className={styles.viewAllButton}>
              View All Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

