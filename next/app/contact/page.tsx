import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact Us - ValuStrat',
  description:
    "Get in touch with our team. We'd love to hear from you and discuss how we can help transform your business.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.description}>
            Get in touch with our team. We'd love to hear from you and discuss how we can help transform
            your business with innovative technology solutions.
          </p>

          <form className={styles.contactForm} action="#" method="POST">
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input type="text" id="name" name="name" className={styles.input} required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input type="email" id="email" name="email" className={styles.input} required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea id="message" name="message" className={styles.textarea} required />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

