'use client'

import Link from 'next/link'
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from '@/components/systaliko-ui/animated-menu'
import { Logo } from './logo'
import { useIsScrolled } from '@/lib/use-is-scrolled'
import { Variants } from 'motion'
import { Button } from './ui/button'

const menuListVariants = {
  open: {
    width: 250,
    height: 300,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 40,
    height: 40,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants

export function MobileHeader() {
  const { isScrolled, sentinelRef } = useIsScrolled()

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full bg-transparent"
      />
      <header className="fixed inset-x-0 top-0 z-999 px-2 pt-1">
        <div
          className={`inset-[0_0_auto] flex justify-between px-4 py-2.5 transition-colors duration-400 ease-in-out ${isScrolled ? 'bg-background/50 text-foreground rounded border backdrop-blur-sm' : ''} `}
        >
          <Link
            aria-label="home page"
            className="flex items-center justify-center"
            href="/"
          >
            <Logo className="w-22" />
          </Link>
          <div className="flex items-center gap-2">
            <Button size="lg" variant="outline">
              <Link
                className="text-foreground"
                href="#"
                aria-label="contact us"
              >
                Contact us
              </Link>
            </Button>
            <AnimatedMenu className="relative block md:hidden">
              <AnimatedMenuButton className="text-primary-foreground size-10 cursor-pointer">
                <AnimatedMenuButtonToggleIcon />
              </AnimatedMenuButton>

              <AnimatedMenuList
                variants={menuListVariants}
                className="bg-primary text-primary-foreground/80 absolute top-0 right-0 rounded text-lg font-medium"
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
          </div>
        </div>
      </header>
    </>
  )
}
