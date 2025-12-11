import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Industries - ValuStrat',
  description: 'Explore the industries we serve with our innovative technology solutions.',
}

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Industries</h1>
          <p className={styles.description}>Explore the industries we serve.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

