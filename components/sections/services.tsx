import {
  CalendarCheckIcon,
  DatabaseIcon,
  PlugIcon,
  SolarPanelIcon,
  WebhookIcon,
} from 'lucide-react'
import { SectionIntro } from '../section-intro'
import { BgMask } from '../bg-mask'

const SERVICES = [
  {
    icon: PlugIcon,
    title: 'Energy Management Platform (EMP)',
    description: 'Central dashboard for telemetry, alerts, and reporting.',
  },
  {
    icon: DatabaseIcon,
    title: 'Smart Metering & Telemetry',
    description: 'Secure data collection and long-term storage.',
  },
  {
    icon: SolarPanelIcon,
    title: 'Storage & Solar Integration',
    description: 'Coordinate generation and batteries for reliability.',
  },
  {
    icon: CalendarCheckIcon,
    title: 'EV Charging Solutions',
    description: 'Site planning, smart scheduling, and billing.',
  },
  {
    icon: WebhookIcon,
    title: 'Consulting & Integration',
    description: 'Custom onboarding, API integrations, and system design.',
  },
]

export function Services() {
  return (
    <section className="px-8 py-20">
      <div className="flex flex-wrap items-start gap-8">
        <SectionIntro
          title="services"
          subtitle="Experts with passion for innovation and delivering exceptional results."
          className="top-12 h-fit md:sticky md:flex-1"
        />

        <div>
          {SERVICES.map((service) => (
            <BgMask
              key={service.title}
              className="after:bg-accent flex items-start gap-8 border-b px-0 py-8 md:px-8"
            >
              <service.icon className="text-primary dark:text-foreground size-6" />

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </BgMask>
          ))}
        </div>
      </div>
    </section>
  )
}
