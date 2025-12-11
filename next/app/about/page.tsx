import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About Us - ValuStrat',
  description:
    'Learn more about ValuStrat and our mission to transform businesses with innovative technology solutions.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.description}>
            Learn more about ValuStrat and our mission to transform businesses with innovative
            technology solutions.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

