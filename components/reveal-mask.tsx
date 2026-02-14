'use client'

import * as React from 'react'
import { motion, Transition } from 'motion/react'
import { cn } from '@/lib/utils'

const TRANSITION = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
} as Transition

interface RevealMaskProps extends React.ComponentProps<typeof motion.div> {
  blindsCount?: number
  onComplete?: () => void
}

export function RevealMask({
  blindsCount = 24,
  onComplete,
  transition = TRANSITION,
  className,
  style,
  ...props
}: RevealMaskProps) {
  const [isComplete, setIsComplete] = React.useState(false)

  // Stabilize callback to prevent re-animations
  const onCompleteRef = React.useRef(onComplete)
  React.useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  const handleAnimationComplete = React.useCallback(() => {
    setIsComplete(true)
    onCompleteRef.current?.()
  }, [])

  if (isComplete) return null

  const maskHeight = 100 / blindsCount

  return (
    <motion.div
      className={cn(
        'pointer-events-none fixed inset-0 z-50 bg-white',
        className
      )}
      initial={{
        maskImage: `linear-gradient(to bottom, black 100%, transparent 100%)`,
      }}
      animate={{
        maskImage: `linear-gradient(to bottom, black 0%, transparent 0%)`,
      }}
      transition={transition}
      style={{
        maskSize: `100% ${maskHeight}%`,
        WebkitMaskSize: `100% ${maskHeight}%`,
        maskRepeat: 'repeat-y',
        WebkitMaskRepeat: 'repeat-y',
      }}
      onAnimationComplete={handleAnimationComplete}
      aria-hidden
      {...props}
    />
  )
}
