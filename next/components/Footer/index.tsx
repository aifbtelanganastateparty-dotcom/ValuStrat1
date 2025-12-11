'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { COMPANY_INFO, SOCIAL_LINKS } from '@/lib/constants'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        {/* Banner Section */}
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bannerAbstract}></div>
          <div className={styles.bannerContent}>
            <div className={styles.bannerRow}>
              <div className={styles.bannerCol}>
                <motion.div
                  className={styles.bannerContentInner}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className={styles.bannerTitle}>
                    Book a Free Consultation to Unleash the Full Potential of Digital Transformation
                  </h2>
                </motion.div>
              </div>
              <div className={styles.bannerColRight}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link
                    href="/contact"
                    className={styles.bannerButton}
                  >
                    Book a Free Consultation
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          className={styles.footerGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoPlaceholder}></div>
            </Link>
            <h2 className={styles.companyTitle}>
              Innovation<br />
              <span className={styles.textOrange}>Accelerator</span>
            </h2>
          </div>

          {/* Company Links */}
          <div className={styles.footerColumn}>
            <div className={styles.footerHeading}>Company</div>
            <div className={styles.footerLinks}>
              <Link href="/about" className={styles.footerLink}>About Us</Link>
              <Link href="/services" className={styles.footerLink}>Services</Link>
              <Link href="/case-studies" className={styles.footerLink}>Case Studies</Link>
              <Link href="/careers" className={styles.footerLink}>Careers</Link>
              <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
            </div>
          </div>

          {/* Services Links */}
          <div className={styles.footerColumn}>
            <div className={styles.footerHeading}>Services</div>
            <div className={styles.footerLinks}>
              <Link href="/services/ai-ml" className={styles.footerLink}>AI & ML Services</Link>
              <Link href="/services/cloud-consulting" className={styles.footerLink}>Cloud Consulting</Link>
              <Link href="/services/data-engineering" className={styles.footerLink}>Data Engineering</Link>
              <Link href="/services/web-mobile" className={styles.footerLink}>Web & Mobile Development</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <div className={styles.footerHeading}>Contact Us</div>
            <div className={styles.footerLinks}>
              <Link href="/contact" className={styles.contactFormLink}>
                <span className={styles.iconLeft}>📧</span>
                <span>Enquiry Form</span>
              </Link>
              <a href={`mailto:${COMPANY_INFO.email}`} className={styles.contactFormLink}>
                <span className={styles.iconLeft}>✉️</span>
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.linkedin && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              )}
              {SOCIAL_LINKS.twitter && (
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <div>© {currentYear} {COMPANY_INFO.name} - All Rights Reserved</div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

