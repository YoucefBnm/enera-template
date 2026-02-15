import { CogIcon, Building2Icon, RotateCwIcon, VanIcon } from 'lucide-react'
import React from 'react'
import {
  ScrollAnimation,
  ScrollOpacity,
  ScrollTranslateX,
  ScrollTranslateY,
} from '../systaliko-ui/scroll-animation'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface SolutionCardProps extends React.ComponentProps<'div'> {
  title: string
  description: string
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
}
const SOLUTIONS: SolutionCardProps[] = [
  {
    title: 'For utilities',
    description: 'Load balancing, outage detection, and demand forecasting.',
    Icon: CogIcon,
  },
  {
    title: 'For Commercial',
    description:
      'Energy optimization for campuses, warehouses, and retail chains.',
    Icon: Building2Icon,
  },
  {
    title: 'For Renewable Projects',
    description:
      'PV performance monitoring, inverter telemetry, and storage orchestration.',
    Icon: RotateCwIcon,
  },
  {
    title: 'For Fleets & EV Charging',
    description: 'Charge scheduling, load management, and cost allocation.',
    Icon: VanIcon,
  },
]

function SolutionCard({
  title,
  description,
  Icon,
  className,
  ...props
}: SolutionCardProps) {
  return (
    <div
      className={cn(
        'bg-accent text-accent-foreground aspect-square place-content-center space-y-6 p-6',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="bg-primary text-primary-foreground flex items-center justify-center p-2">
          <Icon className="strock-[1.5] size-5" />
        </div>
      </div>

      <p className="text-balance">{description}</p>
    </div>
  )
}
export function Cta() {
  return (
    <section className="">
      <ScrollAnimation spacerClass="h-[900px]">
        <ScrollTranslateY
          yRange={[0, 900]}
          className="grid h-svh grid-cols-1 grid-rows-1 items-center justify-center overflow-hidden *:col-start-1 *:row-start-1"
        >
          <ScrollOpacity
            inputRange={[0, 0.5]}
            opacityRange={[1, 0]}
            className="mx-auto flex w-10/12 origin-center flex-col items-center justify-center text-center md:w-8/12"
          >
            <h2 className="text-4xl font-semibold tracking-tight text-balance">
              Grow Your Business with efficient energy management solutions
            </h2>
          </ScrollOpacity>
          <ScrollOpacity
            inputRange={[0.6, 1]}
            opacityRange={[0, 1]}
            className="mx-auto flex w-10/12 origin-center flex-col items-center justify-center space-y-4 text-center md:w-8/12"
          >
            <h2 className="text-4xl font-semibold tracking-tight text-balance">
              Meet sustainability targets with generation monitoring
            </h2>
            <p className="text-balance">
              Our solutions are designed to help you optimize your energy
              management and reduce your costs while growing your business and
              expanding your reach.
            </p>
            <Button>Book a demo</Button>
          </ScrollOpacity>
          <ScrollTranslateX
            xRange={['-200%', '100%']}
            inputRange={[0.2, 0.8]}
            className="flex max-w-full origin-bottom flex-nowrap gap-4"
          >
            {SOLUTIONS.map((solution) => (
              <SolutionCard
                className="flex-1"
                key={solution.title}
                {...solution}
              />
            ))}
          </ScrollTranslateX>
        </ScrollTranslateY>
      </ScrollAnimation>
    </section>
  )
}
