import { Building2Icon, CogIcon, RotateCwIcon, VanIcon } from 'lucide-react'
import { SectionIntro } from '../section-intro'
import { BgMask } from '../bg-mask'

const SOLUTIONS = [
  {
    title: 'For utilities',
    description: 'Load balancing, outage detection, and demand forecasting.',
    icon: CogIcon,
  },
  {
    title: 'For Commercial',
    description:
      'Energy optimization for campuses, warehouses, and retail chains.',
    icon: Building2Icon,
  },
  {
    title: 'For Renewable Projects',
    description:
      'PV performance monitoring, inverter telemetry, and storage orchestration.',
    icon: RotateCwIcon,
  },
  {
    title: 'For Fleets & EV Charging',
    description: 'Charge scheduling, load management, and cost allocation.',
    icon: VanIcon,
  },
]
export function Solutions() {
  return (
    <section className="py-16">
      <SectionIntro
        title="our solutions"
        subtitle="Reliable energy management solutions"
      />

      <div className="bg-border flex flex-col gap-px">
        {SOLUTIONS.map((solution) => {
          const Icon = solution.icon
          return (
            <div key={solution.title}>
              <BgMask className="hover:[&>*]:text-primary-foreground bg-background flex flex-wrap items-center gap-x-8 gap-y-4 px-6 py-8 md:justify-between md:px-12 [&>*]:transition-colors [&>*]:duration-300 [&>*]:ease-in-out">
                <Icon className="text-primary size-8" />
                <p className="text-muted-foreground w-60 text-center">
                  {solution.title}
                </p>
                <h1 className="text-4xl font-medium text-balance md:flex-1">
                  {solution.description}
                </h1>
              </BgMask>
            </div>
          )
        })}
      </div>
    </section>
  )
}
