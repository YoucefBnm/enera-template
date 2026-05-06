import { ChevronsRightIcon } from 'lucide-react'
import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from '../systaliko-ui/text-scroll-read'
import { Button } from '../ui/button'
import { gradient_style, SERVICES } from '@/data'

const card_style =
  'group bg-secondary text-secondary-foreground space-y-6 rounded border p-8'
export function Services() {
  return (
    <section className="flex justify-center" id="sevices">
      <div className="bg-card mx-8 max-w-6xl rounded-3xl border p-8 shadow-xs">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <TextScrollRead className="max-w-xl" spaceClass="h-10">
            <TextScrollReadWrap yRange={[0, 40]}>
              <ClipText className="bg-[linear-gradient(-90deg,var(--muted)_50%,var(--foreground)_50%)] text-3xl leading-normal font-semibold text-balance">
                Experts with passion for innovation and delivering exceptional
                results.
              </ClipText>
            </TextScrollReadWrap>
          </TextScrollRead>

          <div className="flex-1 space-y-2">
            <p className="text-muted-foreground text-balance">
              Easiest way to scale, Improve uptime and reliability with
              predictive alerts
            </p>
            <Button size="sm">
              Learn more
              <ChevronsRightIcon />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(18rem,100%),1fr))] gap-4 p-8">
          {SERVICES.map(({ title, Icon, description }) => (
            <div className={card_style} key={title}>
              <Icon />

              <div className="space-y-2">
                <h2 className="text-xl font-medium">{title}</h2>
                <p className="text-muted-foreground text-sm text-balance">
                  {description}
                </p>
              </div>
            </div>
          ))}
          <div className={card_style} style={gradient_style}>
            <h2 className="text-primary-foreground text-xl font-medium">
              Optimize your energy
            </h2>
            <p className="text-muted text-sm text-balance">
              We can help you optimize your energy consumption and reduce your
              costs.
            </p>
            <Button
              variant="link"
              className="text-primary-foreground"
              size="sm"
            >
              Learn more <ChevronsRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
