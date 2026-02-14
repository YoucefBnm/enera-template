import React from 'react'
import { Pulse } from './pulse'
import { TextStaggerInview } from './systaliko-ui/text-stagger-inview'
import { cn } from '@/lib/utils'

interface SectionIntroProps extends React.ComponentProps<'div'> {
  title: string
  subtitle: string
}
export function SectionIntro({
  title,
  subtitle,
  className,
  ...props
}: SectionIntroProps) {
  return (
    <div className={cn('mb-8 space-y-4 px-12', className)} {...props}>
      <div className="inline-flex items-center gap-2">
        <Pulse />
        <h4 className="text-muted-foreground text-xs tracking-wide uppercase">
          {title}
        </h4>
      </div>
      <TextStaggerInview
        animation="bottom"
        className="block text-4xl font-semibold tracking-tight text-balance *:overflow-hidden *:pb-px"
      >
        {subtitle}
      </TextStaggerInview>
    </div>
  )
}
