import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog - ValuStrat',
  description:
    'Read our latest insights and articles about technology, AI, cloud computing, and digital transformation.',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.description}>Read our latest insights and articles.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

