import {
  EvChargerIcon,
  HousePlugIcon,
  SolarPanelIcon,
  SquareDashedMousePointerIcon,
  WebhookIcon,
} from 'lucide-react'

const iconStyle =
  '*:opacity-40 size-10 stroke-1 *:transition-[transform_opacity] *:duration-200 *:ease-out'

export const SERVICES = [
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
        className={`${iconStyle} group-hover:[&_path:first-child]:translate-y-[-2px] group-hover:[&_path:first-child]:opacity-100 group-hover:[&_path:last-child]:origin-[50%_50%] group-hover:[&_path:last-child]:scale-115 group-hover:[&_path:last-child]:opacity-100`}
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
