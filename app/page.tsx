import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Footer } from '@/components/sections/footer'

import { Testimonials } from '@/components/sections/testimonials'
import { Features } from '@/components/sections/features'
import { Locations } from '@/components/sections/locations'
import { Cta } from '@/components/sections/cta'
import { Process } from '@/components/sections/process'
import ReactLenis from 'lenis/react'

export default function Page() {
  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <Services />
      <Features />

      <Process />
      <Cta />
      <Locations />
      <Testimonials />
      {/* <Faq /> */}
      <Footer />
    </ReactLenis>
  )
}
