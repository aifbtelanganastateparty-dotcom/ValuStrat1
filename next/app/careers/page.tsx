import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Careers - ValuStrat',
  description:
    'Join our team and build the future with us. Explore open positions and career opportunities at ValuStrat.',
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Careers</h1>
          <p className={styles.description}>Join our team and build the future with us.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

