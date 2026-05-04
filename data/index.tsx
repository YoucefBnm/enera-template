import {
  BatteryChargingIcon,
  EvChargerIcon,
  FactoryIcon,
  FileBarChart2Icon,
  GaugeIcon,
  HousePlugIcon,
  LayoutDashboardIcon,
  SolarPanelIcon,
  SquareDashedMousePointerIcon,
  SunIcon,
  WebhookIcon,
} from 'lucide-react'

export const SHADER_COLORS: [string, string, string] = [
  '#63af87',
  '#805cd6',
  '#d38955',
]
const iconStyle =
  '*:opacity-40 size-10 stroke-1 *:transition-[transform_opacity] *:duration-200 *:ease-out'

export const hero_text = {
  heading: 'Manage energy smarter Save cost reduce carbon',
  paragrph:
    'Real time monitoring, scalable integrations, and actionable insights for utilities and businesses.',
}

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

export const site_links = [
  {
    id: 'site-link-about',
    label: 'About',
    href: '#',
  },
  {
    id: 'site-link-services',
    label: 'Services',
    href: '#',
  },
  {
    id: 'site-link-casestudies',
    label: 'Case Studies',
    href: '#',
  },
  {
    id: 'site-link-partners',
    label: 'Partners',
    href: '#',
  },
]

export const process_nodes = [
  {
    id: 'node_source',
    type: 'card',
    position: { x: 20, y: 200 },
    data: {
      label: 'Energy Source',
      description: 'Solar grid or hybrid input',
      icon: SunIcon,
    },
  },
  {
    id: 'node_metering',
    type: 'card',
    position: { x: 250, y: 40 },
    data: {
      label: 'Metering',
      description: 'Collects live consumption data',
      icon: GaugeIcon,
    },
  },
  {
    id: 'node_platform',
    type: 'card',
    position: { x: 480, y: 200 },
    data: {
      label: 'Platform',
      description: 'Normalizes and analyzes data',
      icon: LayoutDashboardIcon,
    },
  },
  {
    id: 'node_storage',
    type: 'card',
    position: { x: 720, y: 40 },
    data: {
      label: 'Storage',
      description: 'Battery or load balancing',
      icon: BatteryChargingIcon,
    },
  },
  {
    id: 'node_operations',
    type: 'card',
    position: { x: 720, y: 400 },
    data: {
      label: 'Operations',
      description: 'Sites, facilities, equipment',
      icon: FactoryIcon,
    },
  },
  {
    id: 'node_reporting',
    type: 'card',
    position: { x: 950, y: 200 },
    data: {
      label: 'Reporting',
      description: 'Alerts, dashboards, exports',
      icon: FileBarChart2Icon,
    },
  },
]
export const nodes_edges = [
  {
    id: 'e1-2',
    source: 'node_source',
    target: 'node_metering',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
  {
    id: 'e1-3',
    source: 'node_metering',
    target: 'node_platform',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
  {
    id: 'e1-4',
    source: 'node_platform',
    target: 'node_storage',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
  {
    id: 'e1-5',
    source: 'node_platform',
    target: 'node_operations',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
  {
    id: 'e1-6',
    source: 'node_platform',
    target: 'node_reporting',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
]
