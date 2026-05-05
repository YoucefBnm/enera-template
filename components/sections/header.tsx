'use client'

import { Logo } from '@/components/logo'
import { site_links } from '@/data'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useIsScrolled } from '@/lib/use-is-scrolled'
import clsx from 'clsx'
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from '../systaliko-ui/animated-menu'

const link_style =
  'text-muted-foreground/70 p-2 text-sm font-medium duration-150 ease-out transition-colors hover:text-muted-foreground hover:bg-muted rounded'
const menuListVariants = {
  open: {
    width: 220,
    height: 280,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 80,
    height: 32,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as const
function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center gap-1 p-1">
      <Logo className="text-primary w-6" />
      <span className="text-xl font-semibold">Enera</span>
    </Link>
  )
}

function NavDesktop() {
  return (
    <nav className="hidden items-center gap-1 md:flex">
      {site_links.map((link) => (
        <Link key={link.id} href={link.href} className={link_style}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

function NavMobile() {
  return (
    <AnimatedMenu className="md:hidden">
      <AnimatedMenuButton>
        <AnimatedMenuButtonToggleIcon className="*:rounded" />
        <AnimatedMenuButtonLabel />
      </AnimatedMenuButton>
      <AnimatedMenuList
        variants={menuListVariants}
        className="bg-popover/95 text-popover-foreground border-muted/50 place-content-center border-2 shadow-lg backdrop-blur"
      >
        <div className="flex flex-col gap-4 p-8">
          {site_links.map((item, i) => (
            <AnimatedMenuItem key={item.id} order={i}>
              <Link className={link_style} href={item.href} title={item.label}>
                {item.label}
              </Link>
            </AnimatedMenuItem>
          ))}
        </div>
      </AnimatedMenuList>
    </AnimatedMenu>
  )
}

export function Header() {
  const { isScrolled, sentinelRef } = useIsScrolled()

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full bg-transparent"
      />
      <header
        className={clsx(
          'sticky top-2 z-999 mx-auto flex items-center justify-between gap-4 rounded-3xl px-4 py-2 backdrop-blur',
          'transition-[background_border-color_shadow_width] duration-300 ease-in-out',
          isScrolled
            ? 'bg-sidebar/70 w-4/5 border shadow'
            : 'bg-background right-0 left-0 w-5/5'
        )}
      >
        <HeaderLogo />

        <NavDesktop />
        <NavMobile />
        <Button variant="outline">Contact us</Button>
      </header>
    </>
  )
}
