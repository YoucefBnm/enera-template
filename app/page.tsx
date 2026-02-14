import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Solutions } from '@/components/sections/solutions'
import { Services } from '@/components/sections/services'
import { Footer } from '@/components/sections/footer'

import { Faq } from '@/components/sections/faq'
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

      <Process />
      {/* <Solutions /> */}
      <Features />
      <Cta />
      <Locations />
      <Testimonials />
      {/* <Faq /> */}
      <Footer />
    </ReactLenis>
  )
}
