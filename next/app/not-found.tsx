import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './not-found.module.css'

export const metadata: Metadata = {
  title: '404 - Page Not Found | ValuStrat',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Page Not Found</h2>
            <p className={styles.description}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className={styles.actions}>
              <Link href="/" className={styles.button}>
                Go to Homepage
              </Link>
              <Link href="/contact" className={styles.buttonSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

