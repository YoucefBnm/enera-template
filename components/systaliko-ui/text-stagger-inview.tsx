'use client';
import * as React from 'react';

import {
  HTMLMotionProps,
  motion,
  MotionConfig,
  stagger,
  StaggerOrigin,
} from 'motion/react';
import { ANIMATION_VARIANTS, AnimationT } from './animation-variants';
interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
}

export function WordStagger({ children, animation, ...props }: WordProps) {
  const characters = String(children).split('');
  const animationVariants = ANIMATION_VARIANTS[animation || 'default'];
  return (
    <span className="inline-block text-nowrap" {...props}>
      {characters.map((char, index) => (
        <motion.span
          className="inline-block"
          variants={animationVariants}
          key={`${char}-${index}`}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

interface TextStaggerProps extends HTMLMotionProps<'div'> {
  staggerValue?: number;
  staggerStart?: StaggerOrigin;
  animation?: AnimationT;
}

export function TextStaggerInview({
  children,
  transition,
  className,
  viewport = { once: true, amount: "some" },
  staggerValue = 0.02,
  staggerStart = 'first',
  animation,
  ...props
}: TextStaggerProps) {
  const words = String(children).split(' ');
  return (
    <motion.div
      initial="hidden"
      whileInView={'visible'}
      viewport={viewport}
      className={className}
      transition={{
        delay: 0.1,
        delayChildren: stagger(staggerValue, { from: staggerStart }),
      }}
      {...props}
    >
      <MotionConfig
        transition={{
          ease: transition?.ease || 'easeOut',
        }}
      >
        {words.map((word, index) => (
          <React.Fragment key={`${word}-${index}`}>
            <WordStagger data-word={word} animation={animation}>
              {word}
            </WordStagger>
            {index < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </MotionConfig>
    </motion.div>
  );
}