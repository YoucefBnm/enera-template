'use client'
import * as React from 'react'

import { AnimatePresence, motion, MotionConfig, Variants } from 'motion/react'
import { ANIMATION_VARIANTS, type AnimationT } from './animation-variants'

// ---------------------------------------------------------------------------
// WordStagger — unchanged from original, kept co-located for portability
// ---------------------------------------------------------------------------
interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT
}

export function WordStagger({ children, animation, ...props }: WordProps) {
  const characters = String(children).split('')
  const animationVariants = ANIMATION_VARIANTS[animation || 'default']

  return (
    <span className="inline-block text-nowrap" {...props}>
      {characters.map((char, index) => (
        <motion.span
          className="inline-block"
          variants={animationVariants}
          key={`${char}-${index}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

// ---------------------------------------------------------------------------
// buildContainerVariants
//
// Embedding `transition` inside the variant object is the idiomatic
// framer-motion pattern for per-state orchestration. This lets us use a
// forward stagger on enter ("visible") and a reversed stagger on exit
// ("hidden") without any imperative logic.
// ---------------------------------------------------------------------------
function buildContainerVariants(staggerValue: number): Variants {
  return {
    hidden: {
      // When AnimatePresence triggers exit → "hidden", children stagger
      // out in reverse order so the animation feels intentional, not abrupt.
      transition: {
        staggerChildren: staggerValue,
        staggerDirection: -1, // last character exits first
      },
    },
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: staggerValue,
        staggerDirection: 1, // first character enters first
        // staggerOrigin is not a built-in prop — we approximate it via
        // staggerChildren + custom per-child delays when staggerStart
        // is not "first". For "last" / "center" pass a custom `delay`
        // resolver through the child variants in animation-variants.ts.
      },
    },
  }
}

// ---------------------------------------------------------------------------
// TextStaggerInterval
// ---------------------------------------------------------------------------
export interface TextStaggerIntervalProps extends React.ComponentProps<'span'> {
  /** Array of words (or short phrases) to cycle through. */
  words: string[]
  /**
   * Time in milliseconds each word is fully visible before transitioning
   * to the next one.
   * @default 2000
   */
  interval?: number
  /**
   * Per-character stagger delay in seconds.
   * @default 0.03
   */
  staggerValue?: number
  animation?: AnimationT
  /**
   * Pause the interval while the user hovers over the element.
   * @default true
   */
  pauseOnHover?: boolean
  /** Extra class names applied to the outer wrapper. */
}

export function TextStaggerInterval({
  words,
  interval = 2000,
  staggerValue = 0.03,
  animation,
  pauseOnHover = true,
  ...props
}: TextStaggerIntervalProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  // Advance to the next word on every tick, unless paused.
  React.useEffect(() => {
    if (isPaused) return

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(id)
  }, [words.length, interval, isPaused])

  const containerVariants = React.useMemo(
    () => buildContainerVariants(staggerValue),
    [staggerValue]
  )

  return (
    <span
      onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
      {...props}
    >
      {/*
        mode="wait" — AnimatePresence will wait for the exiting element's
        animation to fully complete before mounting the entering one.
        This prevents two words from being visible simultaneously and
        keeps the stagger orchestration clean.
      */}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex} // key change triggers enter/exit cycle
          className="inline-block"
          initial="hidden"
          animate="visible"
          exit="hidden" // reuses "hidden" variant; container
          variants={containerVariants} // transition inside variant handles reverse stagger
        >
          <MotionConfig transition={{ ease: 'easeOut' }}>
            <WordStagger animation={animation}>
              {words[currentIndex]}
            </WordStagger>
          </MotionConfig>
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
