'use client'
import * as React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import svgMapPath from '@/data/svg-map-path'

export function WorldMapGLow({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 rounded-full blur-3xl',
        className
      )}
      {...props}
    />
  )
}
export function WorldMapSvg({
  className,
  children,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 1259 477"
      className={cn('size-full', className)}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        <linearGradient
          id="paint0_linear_255_765"
          x1="629.21"
          y1="-67.3351"
          x2="629.21"
          y2="627.144"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.274038" stopColor="var(--primary)" />
          <stop offset="0.735577" stopColor="var(--background)" />
        </linearGradient>
      </defs>

      {/* Map Path */}
      <path
        d={svgMapPath.p15b69c00}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="url(#paint0_linear_255_765)"
        fillOpacity="0.15"
      />

      {/* Decorative Active Points (Pulsing Dots) */}
      {/* North America */}
      {/* <MapPin x={280} y={100} delay={0} /> */}
      {/* Europe */}
      {/* <MapPin x={640} y={80} delay={1} /> */}
      {/* Asia */}
      {/* <MapPin x={900} y={120} delay={2} /> */}
      {/* South America */}
      {/* <MapPin x={350} y={300} delay={1.5} /> */}
      {children}
    </svg>
  )
}
export const WorldMap = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(function WorldMap({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex aspect-2/1 w-full items-center justify-center',
        className
      )}
      {...props}
    />
  )
})

export function MapPin({
  x,
  y,
  delay,
}: {
  x: number
  y: number
  delay: number
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <circle cx={x} cy={y} r="4" className="fill-primary" />
      <circle cx={x} cy={y} r="12" className="fill-primary/20 animate-pulse" />
    </motion.g>
  )
}
