import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Case Studies - ValuStrat',
  description:
    'View our successful projects and client stories showcasing how we transform businesses with innovative technology.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Case Studies</h1>
          <p className={styles.description}>View our successful projects and client stories.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

