import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Products } from '@/components/sections/products'
import { Footer } from '@/components/sections/footer'

import { Benefits } from '@/components/sections/benefits'
import { Locations } from '@/components/sections/locations'
import ReactLenis from 'lenis/react'
import { Process } from '@/components/sections/process'

export default function Page() {
  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <Products />
      <Locations />
      <Benefits />
      <Process />
      <Footer />
    </ReactLenis>
  )
}
