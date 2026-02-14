'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { Logo } from './logo'
import { useIsScrolled } from '@/lib/use-is-scrolled'

export function DesktopHeader() {
  const { isScrolled, sentinelRef } = useIsScrolled()

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full bg-transparent"
      />
      <header className="fixed inset-x-0 top-0 z-999 px-4 pt-1">
        <div
          className={`inset-[0_0_auto] flex justify-between px-10 py-2.5 transition-all duration-400 ease-out ${isScrolled ? 'bg-background/50 text-foreground rounded border backdrop-blur-sm' : ''} `}
        >
          <Link
            aria-label="home page"
            className="flex items-center justify-center"
            href="/"
          >
            <Logo className="w-22" />
          </Link>

          <nav className="flex items-center gap-2">
            <div className="mr-4 flex">
              <Link
                className="hover:bg-muted hover:text-muted-foreground focus:bg-muted focus-visible:ring-ring/50 inline-flex h-9 w-max items-center justify-center px-2.5 py-1.5 text-sm font-medium transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                About
              </Link>
              <Link
                className="hover:bg-muted hover:text-muted-foreground focus:bg-muted focus-visible:ring-ring/50 inline-flex h-9 w-max items-center justify-center px-2.5 py-1.5 text-sm font-medium transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Services
              </Link>
              <Link
                className="hover:bg-muted hover:text-muted-foreground focus:bg-muted focus-visible:ring-ring/50 inline-flex h-9 w-max items-center justify-center px-2.5 py-1.5 text-sm font-medium transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Case Studies
              </Link>
              <Link
                className="hover:bg-muted hover:text-muted-foreground focus:bg-muted focus-visible:ring-ring/50 inline-flex h-9 w-max items-center justify-center px-2.5 py-1.5 text-sm font-medium transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Partners
              </Link>
            </div>

            <Button variant="outline">
              <Link
                className="text-foreground"
                href="#"
                aria-label="contact us"
              >
                Contact us
              </Link>
            </Button>
          </nav>
        </div>
      </header>
    </>
  )
}
