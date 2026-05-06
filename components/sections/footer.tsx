'use client'
import Link from 'next/link'
import { Logo } from '../logo'
import {
  company_profiles,
  gradient_style,
  link_style,
  site_links,
} from '@/data'
import { Cta } from './cta'

function FooterLogo() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-1">
        <Logo className="w-5" />
        <span className="text-2xl font-semibold">Enera</span>
      </div>

      <h2 className="font-semibold">Manage energy smarter</h2>
      <p className="text-muted text-sm text-balance">
        Real time monitoring, scalable integrations, and actionable insights for
        utilities and businesses.
      </p>
    </div>
  )
}

function FooterSocials() {
  return (
    <ul className="list-style-none flex gap-1">
      {company_profiles.map(({ id, label, href, icon }) => {
        const Icon = icon
        return (
          <li key={id}>
            <a
              href={href}
              className={`${link_style} text-primary-foreground block`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="size-4 stroke-[1.5]" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavGroup({ title, links }: { title: string; links: Array<any> }) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="list-style-none space-y-2">
        {links.map(({ id, label, href }) => (
          <li key={id}>
            <Link
              href={href}
              className={`${link_style} text-primary-foreground`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
function FooterNav() {
  return (
    <nav className="flex flex-1 items-start justify-evenly gap-8">
      <NavGroup title="Sitemap" links={site_links} />
      <NavGroup
        title="Company"
        links={[
          { id: 'company-link-about', label: 'About', href: '#' },
          { id: 'company-link-careers', label: 'Careers', href: '#' },
          { id: 'company-link-blog', label: 'Blog', href: '#' },
        ]}
      />
      <NavGroup
        title="Products"
        links={[
          {
            id: 'company-product-emp',
            label: 'EMP',
            href: '#',
          },
          {
            id: 'company-product-metering',
            label: 'Metering',
            href: '#',
          },
          {
            id: 'company-product-storage',
            label: 'Storage',
            href: '#',
          },
          {
            id: 'company-product-operations',
            label: 'Operations',
            href: '#',
          },
        ]}
      />
    </nav>
  )
}
export function Footer() {
  return (
    <footer className="text-primary-foreground">
      <Cta />

      <div
        className="sticky bottom-0 left-0 h-fit w-full px-8 py-16"
        style={gradient_style}
      >
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex flex-1 flex-col items-start justify-between gap-6">
            <FooterLogo />
            <FooterSocials />
          </div>
          <FooterNav />
        </div>
      </div>
    </footer>
  )
}
