import { cn } from '@/lib/utils'
import React from 'react'

export function Pulse({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        '[&>*:first-child]:bg-primary/50 [&>*:last-child]:bg-primary relative flex size-1.5 rounded-full *:rounded-full',
        className
      )}
      {...props}
    >
      <span className="absolute inline-flex size-full animate-ping" />
      <span className="relative inline-flex size-full" />
    </div>
  )
}
