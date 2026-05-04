'use client'
import Link from 'next/link'
import { Logo } from '../logo'
import { Button } from '../ui/button'
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from '../systaliko-ui/animated-menu'
import { Variants } from 'motion'
import { site_links } from '@/data'

const menuListVariants = {
  open: {
    width: 220,
    height: 280,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 100,
    height: 32,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants
function HeaderLogo() {
  return (
    <Link
      aria-label="home page"
      className="flex items-center justify-center"
      href="/"
    >
      <Logo className="w-20" />
    </Link>
  )
}
function HeaderMenu() {
  return (
    <AnimatedMenu>
      <AnimatedMenuButton className="h-[32px] w-[100px]">
        <AnimatedMenuButtonLabel className="px-2" />
        <AnimatedMenuButtonToggleIcon className="flex-1 self-stretch border-l" />
      </AnimatedMenuButton>

      <AnimatedMenuList
        variants={menuListVariants}
        className="bg-popover/80 text-popover-foreground border shadow-xs backdrop-blur"
      >
        <div className="size-full place-content-center">
          <div className="flex flex-col">
            {site_links.map((link) => (
              <AnimatedMenuItem className="border-b px-8 py-2" key={link.id}>
                <Link href={link.href}>{link.label}</Link>
              </AnimatedMenuItem>
            ))}
          </div>
        </div>
      </AnimatedMenuList>
    </AnimatedMenu>
  )
}
export function Header() {
  return (
    <header className="bg-sidebar fixed top-0 left-0 z-999 flex h-16 w-full items-center justify-between px-12">
      <HeaderLogo />
      <div className="flex items-center gap-1">
        <Button size="sm" className={'relative z-999'}>
          Contact
        </Button>
        <HeaderMenu />
      </div>
    </header>
  )
}
