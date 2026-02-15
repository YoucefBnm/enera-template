'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import { SectionIntro } from '../section-intro'
import {
  CardsStackContainer,
  CardSticky,
} from '../systaliko-ui/cards/cards-stack'
import React from 'react'
const PROCESS_PHASES = [
  {
    label: 'Connect',
    description: 'Plug in meters and devices or link with existing APIs.',
  },
  {
    label: 'Monitor',
    description:
      'Centralize telemetry and visualize operations in one dashboard.',
  },
  {
    label: 'Optimize',
    description: 'Use alerts and automation to reduce waste and lower bills.',
  },
]
export function Process() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <section ref={ref} className="px-8 py-16">
      <div className="flex flex-wrap gap-6">
        <div className="top-12 h-fit flex-1 space-y-8 md:sticky">
          <SectionIntro
            title="our process"
            subtitle="Simple and efficient, and we're always looking for
            ways to improve."
          />
          <div className="px-12">
            <div className="bg-primary-foreground dark:bg-muted w-full overflow-hidden">
              <motion.div
                className="bg-primary dark:bg-muted-foreground h-0.5 w-full origin-left"
                style={{ scaleX }}
              />
            </div>
          </div>
        </div>
        <CardsStackContainer className="space-y-16 md:flex-1">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              className="bg-primary/90 odd:bg-accent/90 odd:text-accent-foreground text-primary-foreground flex aspect-2/1 items-center gap-8 rounded p-8 backdrop-blur md:aspect-4/3"
              key={phase.label}
              index={index + 2}
            >
              <div className="flex-1 text-4xl font-bold tracking-tighter">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{phase.label}</h2>
                <p className="text-balance">{phase.description}</p>
              </div>
            </CardSticky>
          ))}
        </CardsStackContainer>
      </div>
    </section>
  )
}
