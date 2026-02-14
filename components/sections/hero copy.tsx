'use client';

import { RevealMask } from '@/components/reveal-mask';
import { motion, MotionConfig, stagger } from 'motion/react';
import { ANIMATION_VARIANTS } from '../systaliko-ui/animation-variants';
import { useAnimation } from 'motion/react';
import { Button } from '../ui/button';

export function Hero() {
  const animationVariants = ANIMATION_VARIANTS["bottom"]
  const controls = useAnimation();
  const startTextAnimation = () => controls.start("visible")

  return (
   <section 
      className="relative py-12 px-8 w-full h-screen overflow-hidden" 
    >
      <RevealMask onAnimationComplete={startTextAnimation}/>
      <video
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />

      <div 
        className="absolute inset-0 bg-black/30 pointer-events-none" 
        aria-hidden 
      />

      <motion.div 
        className="relative z-10 h-full place-content-center text-white space-y-4 max-w-3xl"
        transition={{ delay: 0.1, delayChildren: stagger(0.2)}}
        initial={"hidden"}
        animate={controls}
        viewport={{ once: true }}
      >
        <MotionConfig transition={{duration: 0.5, ease: "easeOut"}}>
          <motion.h1 
            className='text-5xl md:text-6xl xl:text-7xl font-medium text-balance'
            variants={animationVariants}
          >
            Manage energy smarter Save cost reduce carbon
          </motion.h1>

          <motion.p 
            variants={animationVariants}
            className="text-balance max-w-[45ch]"
          >
              Real-time monitoring, scalable integrations, and actionable insights for utilities and businesses.
          </motion.p>

          <motion.div 
            variants={animationVariants}
          >
            <Button size="lg">
                Get Started
            </Button>
          </motion.div>
        </MotionConfig>
      </motion.div>
    </section>
  );
}