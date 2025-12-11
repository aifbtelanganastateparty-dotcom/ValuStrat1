import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Our Services - ValuStrat',
  description:
    'Comprehensive technology solutions for your business including AI & ML, Cloud Consulting, Data Engineering, and Web & Mobile Development.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.description}>Comprehensive technology solutions for your business.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

