import Link from 'next/link'
import { BgMask } from '../bg-mask'
import { Button } from '../ui/button'
import { Logo } from '../logo'

export function Footer() {
  return (
    <footer className="border-t px-8">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap">
        <div className="md:border- border-r/50 flex flex-col items-start space-y-4 py-12 md:border-r">
          <p className="text-balance">
            delivers straightforward energy technology and services that help
            organizations measure, manage, and optimize energy usage. Built for
            operations teams, facilities managers, and grid operators who need
            reliable data and fast answers.
          </p>
          <Button size="lg">Start your Project</Button>

          <Logo className="mt-auto w-32" />
        </div>

        <div className="space-y-4 px-8 py-12">
          <h3 className="text-2xl font-medium">Sitemap</h3>

          <ul className="flex flex-col items-start">
            <BgMask
              as={'li'}
              className="hover:*:text-primary-foreground p-1 text-lg font-medium *:transition-colors *:duration-300 *:ease-in-out"
            >
              <Link href="#">About</Link>
            </BgMask>
            <BgMask
              as={'li'}
              className="hover:*:text-primary-foreground p-1 text-lg font-medium *:transition-colors *:duration-300 *:ease-in-out"
            >
              <Link href="#">Case Studies</Link>
            </BgMask>
            <BgMask
              as={'li'}
              className="hover:*:text-primary-foreground p-1 text-lg font-medium *:transition-colors *:duration-300 *:ease-in-out"
            >
              <Link href="#">Services</Link>
            </BgMask>
            <BgMask
              as={'li'}
              className="hover:*:text-primary-foreground p-1 text-lg font-medium *:transition-colors *:duration-300 *:ease-in-out"
            >
              <Link href="#">Contact</Link>
            </BgMask>
            <BgMask
              as={'li'}
              className="hover:*:text-primary-foreground p-1 text-lg font-medium *:transition-colors *:duration-300 *:ease-in-out"
            >
              <Link href="#">Patners</Link>
            </BgMask>
          </ul>

          <ul className="text-primary dark:text-muted-foreground flex items-start">
            <BgMask
              as={'li'}
              className="hover:*:text-primary-foreground p-1 font-medium *:transition-colors *:duration-300 *:ease-in-out"
            >
              <Link href="#">Linkedin</Link>
            </BgMask>
            <BgMask
              as={'li'}
              className="hover:*:text-primary-foreground p-1 font-medium *:transition-colors *:duration-300 *:ease-in-out"
            >
              <Link href="#">X</Link>
            </BgMask>
            <BgMask
              as={'li'}
              className="hover:*:text-primary-foreground p-1 font-medium *:transition-colors *:duration-300 *:ease-in-out"
            >
              <Link href="#">Instagram</Link>
            </BgMask>
          </ul>
        </div>
      </div>
    </footer>
  )
}
