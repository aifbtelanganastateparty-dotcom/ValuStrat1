import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ValuStrat - Transforming Businesses with Innovative Technology',
  description: 'We help businesses leverage cutting-edge technology to drive growth, improve efficiency, and stay ahead of the competition.',
  openGraph: {
    title: 'ValuStrat - Transforming Businesses with Innovative Technology',
    description: 'We help businesses leverage cutting-edge technology to drive growth, improve efficiency, and stay ahead of the competition.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  )
}
