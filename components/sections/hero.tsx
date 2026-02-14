'use client'
import { MotionConfig, motion, stagger } from 'motion/react'
import { MapPin, WorldMap, WorldMapGLow, WorldMapSvg } from '../world-map'
import { ANIMATION_VARIANTS } from '../systaliko-ui/animation-variants'
import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'

const animationVariants = ANIMATION_VARIANTS['bottom']

function HeroText() {
  return (
    <motion.div
      transition={{ delayChildren: stagger(0.2), delay: 0.1 }}
      className="relative z-5 flex flex-col items-center justify-center space-y-4 text-center"
      initial="hidden"
      animate="visible"
    >
      <MotionConfig transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <motion.h1
          variants={animationVariants}
          className="max-w-[25ch] text-5xl font-semibold tracking-tighter text-balance md:text-6xl xl:text-7xl"
        >
          Manage energy smarter Save cost reduce carbon
        </motion.h1>

        <motion.p
          variants={animationVariants}
          className="text-accent-foreground max-w-[65ch] text-lg text-balance"
        >
          Real-time monitoring, scalable integrations, and actionable insights
          for utilities and businesses.
        </motion.p>

        <motion.div
          variants={animationVariants}
          className="flex flex-wrap items-center gap-3"
        >
          <Button size="lg">Get Started</Button>
          <Button size={'lg'} variant="outline">
            View Documentation <ArrowRightIcon className="text-primary" />
          </Button>
        </motion.div>
      </MotionConfig>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="grid h-screen grid-cols-1 grid-rows-1 place-content-center *:col-start-1 *:row-start-1">
      <WorldMap>
        <WorldMapGLow className="bg-background/50" />
        <WorldMapSvg>
          <MapPin x={280} y={100} delay={0} />
          {/* Europe */}
          <MapPin x={640} y={80} delay={1} />
          {/* Asia */}
          <MapPin x={900} y={120} delay={2} />
        </WorldMapSvg>
      </WorldMap>
      <HeroText />
    </section>
  )
}
