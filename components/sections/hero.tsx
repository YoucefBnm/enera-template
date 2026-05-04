'use client'
import { MotionConfig, motion, stagger } from 'motion/react'
import { ANIMATION_VARIANTS } from '../systaliko-ui/animation-variants'
import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { Suspense, lazy } from 'react'
import { GodRays } from '@paper-design/shaders-react'

const HurricaneShader = lazy(() =>
  import('../shader').then((mod) => ({ default: mod.HurricaneShader }))
)

const animationVariants = ANIMATION_VARIANTS['blur']

function HeroText() {
  return (
    <motion.div
      transition={{ delayChildren: stagger(0.3), delay: 0.1 }}
      className="relative z-5 flex flex-col items-center justify-center space-y-4 text-center"
      initial="hidden"
      animate="visible"
    >
      <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <motion.h1
          variants={animationVariants}
          className="max-w-[25ch] text-4xl font-medium tracking-tight text-balance md:text-5xl xl:text-6xl"
        >
          Manage energy smarter Save cost reduce carbon
        </motion.h1>

        <motion.p
          variants={animationVariants}
          className="text-muted-foreground max-w-[65ch] text-balance"
        >
          Real-time monitoring, scalable integrations, and actionable insights
          for utilities and businesses.
        </motion.p>

        <motion.div
          variants={animationVariants}
          className="flex flex-wrap items-center gap-3"
        >
          <Button>Get Started</Button>
          <Button variant="secondary">
            View Documentation <ArrowRightIcon />
          </Button>
        </motion.div>
      </MotionConfig>
    </motion.div>
  )
}

export function Hero() {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-1 place-content-center overflow-hidden *:col-start-1 *:row-start-1">
      <HeroText />
      <Suspense fallback={<div className="bg-background size-full" />}>
        <HurricaneShader
          background="#fdfdfd"
          colors={['#63af87', '#805cd6', '#d38955']}
          speed={0.2}
        />
      </Suspense>
    </div>
  )
}
