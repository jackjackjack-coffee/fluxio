import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Features } from '@/components/sections/Features'
import { Metrics } from '@/components/sections/Metrics'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { CTA } from '@/components/sections/CTA'

export default function App() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Metrics />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
