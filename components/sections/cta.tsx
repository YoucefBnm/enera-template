'use client'
import { SHADER_COLORS } from '@/data'
import { GradientShader } from '../shader'
import { Button } from '../ui/button'
import { motion, MotionConfig, stagger } from 'motion/react'
import { Suspense } from 'react'
import { ANIMATION_VARIANTS } from '../systaliko-ui/animation-variants'

const animation_variants = ANIMATION_VARIANTS['blur']
const MotionButton = motion.create(Button)
export function Cta() {
  return (
    <section id="cta" className="my-16 flex justify-center">
      <div className="mx-8 grid aspect-video max-w-3xl grid-cols-1 grid-rows-1 place-content-center overflow-hidden rounded-3xl border *:col-start-1 *:row-start-1">
        <Suspense fallback={<div className="size-full bg-zinc-900" />}>
          <GradientShader
            colors={SHADER_COLORS}
            intensity={1.7}
            density={1.2}
            animate={true}
          />
        </Suspense>
        <motion.div
          transition={{ delayChildren: stagger(0.3), delay: 0.1 }}
          className="place-content-center space-y-6 text-center text-white"
        >
          <MotionConfig transition={{ duration: 0.5, ease: 'easeOut' }}>
            <motion.h2
              variants={animation_variants}
              className="text-4xl font-semibold text-balance"
            >
              Meet sustainability targets with generation monitoring
            </motion.h2>
            <motion.p variants={animation_variants} className="text-balance">
              Our solutions are designed to help you optimize your energy
              management and reduce your costs while growing your business and
              expanding your reach.
            </motion.p>
            <MotionButton variants={animation_variants}>
              Book a demo
            </MotionButton>
          </MotionConfig>
        </motion.div>
      </div>
    </section>
  )
}
