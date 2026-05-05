'use client'
import Link from 'next/link'
import { BgMask } from '../bg-mask'
import { Button } from '../ui/button'
import { Logo } from '../logo'
import { ChevronRightIcon } from 'lucide-react'
import { motion, MotionConfig, stagger, Variants } from 'motion/react'

const clip_path_variants = {
  hidden: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  },
  visible: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
} as Variants

export function Footer() {
  return (
    <footer className="border-t">
      <div className="bg-accent relative z-2 flex min-h-fit flex-wrap items-end gap-4 px-8 py-20">
        <p className="text-muted-foreground flex-1 text-balance">
          Delivering straightforward energy technology and services that help
          organizations measure, manage, and optimize energy usage. Built for
          operations teams, facilities managers, and grid operators who need
          reliable data and fast answers.
        </p>

        <Button variant="outline">
          Get Started <ChevronRightIcon />
        </Button>
      </div>

      <div
        className="text-primary-foreground sticky bottom-0 left-0 flex h-fit w-full flex-wrap items-end justify-evenly gap-8 px-8 py-12"
        style={{
          background: 'var(--primary)',
          backgroundImage:
            'radial-gradient(85% 70% at 90% 70%, #A68DE2 0%, #9A7CDE 22.92%, #8D6CDA 42.71%, var(--primary) 88.54%) ',
        }}
      >
        <div className="space-y-4">
          <MotionConfig
            transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              className="overflow-hidden"
              variants={clip_path_variants}
              initial="hidden"
              whileInView="visible"
              // viewport={{ amount: 'all' }}
            >
              <Logo className="w-20" />
            </motion.div>

            <motion.ul
              className="flex items-center gap-1 overflow-hidden"
              variants={clip_path_variants}
              initial="hidden"
              whileInView="visible"
              // viewport={{ amount: 'all' }}
            >
              <li>Facebook</li>
              <li>X</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </motion.ul>
          </MotionConfig>
        </div>

        <motion.ul
          className="flex items-center gap-1 overflow-hidden"
          variants={clip_path_variants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ amount: 'all' }}
        >
          <li>Facebook</li>
          <li>X</li>
          <li>Instagram</li>
          <li>Linkedin</li>
        </motion.ul>
      </div>
    </footer>
  )
}
