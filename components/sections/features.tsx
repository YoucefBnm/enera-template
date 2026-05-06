import { FEATURES } from '@/data'
import { Logo } from '../logo'
import { TextStaggerInview } from '../systaliko-ui/text-stagger-inview'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { CardsStackContainer, CardSticky } from '../systaliko-ui/cards-stack'

function FeaturesText() {
  return (
    <>
      <TextStaggerInview
        animation="bottom"
        className="text-3xl font-semibold text-balance *:overflow-hidden"
      >
        Real time monitoring, scalable integrations, and actionable insights
      </TextStaggerInview>
      <p className="text-muted-foreground text-balance">
        utilities and businesses, with predictive alerts, and actionable
        insights for utilities and businesses, with predictive alerts, and
        actionable insights for utilities and businesses.
      </p>
      <Button>Book a demo</Button>
    </>
  )
}

function FeatureCard({
  label,
  desc,
  iconStyle,
}: {
  label: string
  desc: string
  iconStyle: string
}) {
  return (
    <div className="bg-card/80 text-card-foreground space-y-8 rounded-3xl border p-8 shadow-xs backdrop-blur-xl">
      <Logo
        className={cn(
          iconStyle,
          'text-primary [&_g_path:nth-child(3)]:opcaity-100 w-12 stroke-1 [&_g_path]:opacity-0 [&_g_path:nth-child(1)]:opacity-100 [&_g_path:nth-child(10)]:opacity-20'
        )}
      />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{label}</h3>
        <p className="text-muted-foreground text-balance">{desc}</p>
      </div>
    </div>
  )
}
export function Features() {
  return (
    <section
      id="features"
      className="bg-secondary text-secondary-foreground py-16"
    >
      <div className="flex items-start gap-12 px-8">
        <div className="sticky top-0 left-0 min-h-screen w-fit place-content-center space-y-4">
          <FeaturesText />
        </div>
        <CardsStackContainer className="place-content-center place-items-center space-y-8 py-12">
          {FEATURES.map((feature, index) => (
            <CardSticky key={feature.label} index={index}>
              <FeatureCard {...feature} />
            </CardSticky>
          ))}
        </CardsStackContainer>
      </div>
    </section>
  )
}
