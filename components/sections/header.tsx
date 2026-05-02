'use client'
import { useIsMobile } from '@/lib/use-is-mobile'
import { MobileHeader } from '../mobile-header'
import { DesktopHeader } from '../desktop-header'
import Link from 'next/link'
import { Logo } from '../logo'
import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from '../systaliko-ui/animated-menu'
import { Variants } from 'motion'

const menuListVariants = {
  open: {
    width: 181,
    height: 280,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: '100%',
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
      <AnimatedMenuButton>
        <AnimatedMenuButtonLabel />
        <AnimatedMenuButtonToggleIcon />
      </AnimatedMenuButton>

      <AnimatedMenuList
        variants={menuListVariants}
        className="bg-accent text-popover-foreground border shadow-xs"
      >
        <div className="flex size-full flex-col place-content-center items-start justify-evenly gap-4 p-8">
          <div className="flex flex-col gap-5">
            <AnimatedMenuItem>
              <Link className="hover:text-primary-foreground" href="#">
                About
              </Link>
            </AnimatedMenuItem>
            <AnimatedMenuItem order={1}>
              <Link className="hover:text-primary-foreground" href="#">
                Services
              </Link>
            </AnimatedMenuItem>
            <AnimatedMenuItem order={2}>
              <Link className="hover:text-primary-foreground" href="#">
                Case Studies
              </Link>
            </AnimatedMenuItem>
            <AnimatedMenuItem order={3}>
              <Link className="hover:text-primary-foreground" href="#">
                Partners
              </Link>
            </AnimatedMenuItem>
          </div>
        </div>
      </AnimatedMenuList>
    </AnimatedMenu>
  )
}
export function Header() {
  const isMobile = useIsMobile()
  return (
    <header className="fixed top-0 left-0 z-999 flex h-16 w-full items-center justify-between px-12">
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
