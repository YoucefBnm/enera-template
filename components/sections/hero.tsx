'use client'
import { MotionConfig, motion, stagger } from 'motion/react'
import { ANIMATION_VARIANTS } from '../systaliko-ui/animation-variants'
import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { Suspense, lazy } from 'react'
import { hero_text, SHADER_COLORS } from '@/data'
import { TextStaggerInterval } from '../systaliko-ui/text-stagger-interval'

const HurricaneShader = lazy(() =>
  import('../shader').then((mod) => ({ default: mod.HurricaneShader }))
)

const animationVariants = ANIMATION_VARIANTS['blur']

function HeroText() {
  return (
    <motion.div
      transition={{ delayChildren: stagger(0.3), delay: 0.1 }}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <motion.h1
          variants={animationVariants}
          className="max-w-[18ch] text-4xl font-semibold tracking-tight text-balance md:text-5xl xl:text-6xl"
        >
          Manage energy smarter{' '}
          <TextStaggerInterval
            words={['save', 'optimize', 'reduce']}
            interval={2500}
            staggerValue={0.03}
            animation="blur"
            className="text-primary inline-block min-w-[186px] font-serif font-normal tracking-normal italic"
          />{' '}
          <div>cost reduce carbon</div>
        </motion.h1>

        <motion.p
          variants={animationVariants}
          className="text-muted-foreground max-w-[45ch] text-balance"
        >
          {hero_text.paragrph}
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
    <section
      id="hero"
      className="grid min-h-screen grid-rows-[max-content_max-content] items-center px-8 py-12 lg:grid-cols-2"
    >
      <HeroText />
      <Suspense fallback={<div className="bg-background size-full" />}>
        <HurricaneShader
          className="h-[500px]"
          background="#fdfdfd"
          colors={SHADER_COLORS}
        />
      </Suspense>
    </section>
  )
}
