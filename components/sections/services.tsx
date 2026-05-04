import { ArrowRightIcon } from 'lucide-react'
import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from '../systaliko-ui/text-scroll-read'
import { Button } from '../ui/button'
import { SERVICES } from '@/constants'

export function Services() {
  return (
    <section>
      <TextScrollRead spaceClass="h-20">
        <TextScrollReadWrap
          yRange={[0, 80]}
          className="mx-auto max-w-xl place-content-center p-8 text-center"
        >
          <ClipText className="bg-[linear-gradient(-90deg,var(--muted)_50%,var(--foreground)_50%)] text-3xl leading-normal font-semibold text-balance">
            Experts with passion for innovation and delivering exceptional
            results.
          </ClipText>
        </TextScrollReadWrap>
      </TextScrollRead>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(18rem,100%),1fr))] gap-4 p-8">
        <div className="bg-primary text-primary-foreground space-y-4 rounded border p-8">
          <h2 className="text-xl font-medium">Easiest way to scale</h2>
          <p className="text-muted text-balance">
            Improve uptime and reliability with predictive alerts
          </p>

          <Button
            size="sm"
            className={'text-primary-foreground'}
            variant="link"
          >
            Learn more <ArrowRightIcon />
          </Button>
        </div>

        {SERVICES.map(({ title, Icon, description }) => (
          <div
            className="group bg-card text-card-foreground space-y-6 rounded border p-8"
            key={title}
          >
            <Icon />

            <div className="space-y-2">
              <h2 className="text-xl font-medium">{title}</h2>
              <p className="text-muted-foreground text-sm text-balance">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
