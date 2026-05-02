'use client'
import {
  ArrowRightIcon,
  BoxIcon,
  CalendarCheckIcon,
  CylinderIcon,
  DatabaseIcon,
  EvChargerIcon,
  HousePlugIcon,
  PlugIcon,
  SolarPanelIcon,
  SquareDashedMousePointerIcon,
  WebhookIcon,
} from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from '../systaliko-ui/text-scroll-read'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const iconStyle =
  '*:opacity-40 size-10 stroke-1 *:transition-[transform_opacity] *:duration-200 *:ease-out'
const SERVICES = [
  {
    Icon: () => (
      <HousePlugIcon
        className={`${iconStyle} group-hover:[&_*:not(:last-child)]:translate-y-[-3px] group-hover:[&_*:not(:last-child)]:opacity-100`}
      />
    ),
    title: 'Energy Management Platform (EMP)',
    description: 'Central dashboard for telemetry, alerts, and reporting.',
  },
  {
    Icon: () => (
      <SquareDashedMousePointerIcon
        className={`${iconStyle} group-hover:[&_path:first-child]:translate-x-[-3px] group-hover:[&_path:first-child]:translate-y-[-3px] group-hover:[&_path:first-child]:opacity-100`}
      />
    ),
    title: 'Smart Metering & Telemetry',
    description: 'Secure data collection and long-term storage.',
  },
  {
    Icon: () => (
      <SolarPanelIcon className={`${iconStyle} group-hover:*:opacity-100`} />
    ),
    title: 'Storage & Solar Integration',
    description: 'Coordinate generation and batteries for reliability.',
  },
  {
    Icon: () => (
      <EvChargerIcon
        className={`${iconStyle} group-hover:[&_path:first-child]:translate-y-[-2px] group-hover:[&_path:last-child]:origin-[50%_50%] group-hover:[&_path:last-child]:scale-115 group-hover:[&_path:last-child]:opacity-100`}
      />
    ),
    title: 'EV Charging Solutions',
    description: 'Site planning, smart scheduling, and billing.',
  },
  {
    Icon: () => (
      <WebhookIcon
        className={`${iconStyle} group-hover:animate-spin group-hover:*:opacity-100`}
      />
    ),
    title: 'Consulting & Integration',
    description: 'Custom onboarding, API integrations, and system design.',
  },
]

export function Services() {
  return (
    <section className="">
      <TextScrollRead spaceClass="h-20">
        <TextScrollReadWrap
          yRange={[0, 80]}
          className="mx-auto max-w-xl place-content-center p-8 text-center"
        >
          <ClipText className="bg-[linear-gradient(-90deg,var(--muted)_50%,var(--foreground)_50%)] text-3xl leading-normal font-semibold text-balance">
            Experts with passion for innovation and delivering exceptional
            results.
          </ClipText>
        </TextScrollReadWrap>
      </TextScrollRead>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(18rem,100%),1fr))] gap-4 p-8">
        <div className="bg-primary text-primary-foreground space-y-4 rounded p-8">
          <h2 className="font-medium">Easiest way to scale</h2>
          <p className="text-muted text-balance">
            Improve uptime and reliability with predictive alerts
          </p>

          <Button className={'text-primary-foreground'} variant="link">
            Learn more <ArrowRightIcon />
          </Button>
        </div>

        {SERVICES.map(({ title, Icon, description }) => (
          <div
            className="group bg-card text-card-foreground space-y-6 rounded p-8"
            key={title}
          >
            <Icon />

            <div className="space-y-2">
              <h2 className="font-medium">{title}</h2>
              <p className="text-muted-foreground text-sm text-balance">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
