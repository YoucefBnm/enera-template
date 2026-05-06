import GithubIcon from '@/components/svg/github-icon'
import LinkedinIcon from '@/components/svg/linkedin-icon'
import XIcon from '@/components/svg/x-icon'
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
  '#1424FF',
  '#b2e6ff',
  '#1daddd',
]
export const gradient_style = {
  background: 'var(--primary)',
  backgroundImage:
    'radial-gradient(85% 70% at 90% 70%, #5C67FF 0%, #4754FF 22.92%, #3341FF 42.71%, var(--primary) 88.54%)',
} as const
export const link_style =
  'text-muted-foreground/70 p-2 text-sm font-medium duration-150 ease-out transition-colors hover:text-muted-foreground hover:bg-muted rounded'

const iconStyle =
  '*:opacity-70 size-8 stroke-[1.2] *:transition-[transform_opacity] *:duration-200 *:ease-out'

export const hero_text = {
  heading: 'Manage energy smarter Save cost reduce carbon',
  paragrph:
    'Real time monitoring, scalable integrations, and actionable insights for utilities and businesses.',
}

export const PRODUCTS = [
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
export const company_profiles = [
  {
    id: 'site-profile-x',
    label: 'x',
    href: '#',
    icon: XIcon,
  },
  {
    id: 'site-profile-github',
    label: 'github',
    href: '#',
    icon: GithubIcon,
  },
  {
    id: 'site-profile-linkedin',
    label: 'linkedin',
    href: '#',
    icon: LinkedinIcon,
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

export const FEATURES = [
  {
    label: 'Device Integration',
    desc: 'Connect your devices to the platform and start monitoring their performance.',
    iconStyle:
      '[&_g_path:nth-child(2)]:opacity-100 [&_g_path:nth-child(4)]:opacity-100',
  },
  {
    label: 'Actionable Analytics',
    desc: 'Gain insights into your energy consumption and identify areas for improvement.',
    iconStyle:
      '[&_g_path:nth-child(2)]:opacity-100 [&_g_path:nth-child(4)]:opacity-100 [&_g_path:nth-child(6)]:opacity-100  [&_g_path:nth-child(8)]:opacity-100',
  },
  {
    label: 'Entreprise Grade',
    desc: 'Role based access control, encrypted data flows, and audit ready controls designed for regulated environements.',
    iconStyle:
      '[&_g_path:nth-child(2)]:opacity-100 [&_g_path:nth-child(3)]:opacity-100 [&_g_path:nth-child(5)]:opacity-100 [&_g_path:nth-child(4)]:opacity-100 [&_g_path:nth-child(6)]:opacity-100  [&_g_path:nth-child(8)]:opacity-100',
  },
  {
    label: 'Scalable Architecture',
    desc: 'Deploy from a single site to large multi-region infrastructures without performance or reliability trade-offs.',
    iconStyle:
      '[&_g_path:nth-child(2)]:opacity-100 [&_g_path:nth-child(7)]:opacity-100 [&_g_path:nth-child(9)]:opacity-100 [&_g_path:nth-child(3)]:opacity-100 [&_g_path:nth-child(5)]:opacity-100 [&_g_path:nth-child(4)]:opacity-100 [&_g_path:nth-child(6)]:opacity-100  [&_g_path:nth-child(8)]:opacity-100',
  },
]
