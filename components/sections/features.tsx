import {
  ArrowDownIcon,
  AtomIcon,
  EllipsisVerticalIcon,
  FileTextIcon,
  HousePlugIcon,
  MapPinCheckInsideIcon,
  RotateCwIcon,
  ShieldCheckIcon,
} from 'lucide-react'
import { Graph } from '../svg/graph'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import Image from 'next/image'
import { gradient_style } from '@/data'

interface CardProps {
  className?: string
}
const card_style =
  'bg-card text-card-foreground border text-balance shadow-xs border p-6 place-content-center rounded-2xl'

function ConntectedSites() {
  return (
    <div className="bg-accent space-y-4 rounded-t p-6">
      <h3 className="text-foreground text-xl font-bold text-balance">
        +1200 sites connected
      </h3>
      <div className="space-y-2">
        <div className="bg-accent-foreground h-3 w-full rounded-full" />
        <div className="bg-accent-foreground h-3 w-full rounded-full" />
        <div className="bg-accent-foreground h-3 w-4/5 rounded-full" />
      </div>
    </div>
  )
}

function InvoiceGroup({
  fileName,
  iconStyle,
}: {
  fileName: string
  iconStyle?: string
}) {
  return (
    <div className="flex items-center justify-between gap-3 space-y-3">
      <div
        className={cn(
          'flex aspect-square size-fit items-center justify-center rounded-full p-2',
          iconStyle
        )}
      >
        <FileTextIcon className="size-4 stroke-[1.5]" />
      </div>

      <div className="space-y-1">
        <p>{fileName}</p>
        <div className="bg-muted-foreground h-2 w-full rounded-full" />
      </div>

      <EllipsisVerticalIcon className="size-5 self-start stroke-[1.5]" />
    </div>
  )
}
function MonthlyInvoice() {
  return (
    <div className="bg-muted text-muted-foreground mb-8 hidden space-y-4 rounded p-5 xl:block">
      <h3 className="text-lg font-medium">Monthly Invoice</h3>

      <div className="space-y-2">
        <InvoiceGroup
          fileName="Company_download.pdf"
          iconStyle="bg-chart-1 text-white"
        />
        <InvoiceGroup
          fileName="Cognify_AI_download.pdf"
          iconStyle="bg-chart-2 text-white"
        />
        <InvoiceGroup
          fileName="Abla_studio_download.pdf"
          iconStyle="bg-chart-3 text-white"
        />
      </div>
    </div>
  )
}
function CardConnected({ className }: CardProps) {
  return (
    <div className={cn(card_style, 'space-y-8 pb-0', className)}>
      <p className="text-muted-foreground max-w-xl text-balance">
        Take the pain out of book keeping!! Wave goodbye to mountains of
        paperwork and endless email reminders There&apos;s now a new way of
        accounting.
      </p>
      <div className="flex items-end gap-8">
        <ConntectedSites />

        <MonthlyInvoice />
      </div>
    </div>
  )
}

function CardReduce({ className }: CardProps) {
  return (
    <div className={cn(card_style, 'space-y-8', className)}>
      <p className="text-muted-foreground">
        Deploy from a single site to large multi region infrastructures without
        performance or reliability trade-offs.
      </p>

      <div className="bg-muted aspect-square w-full rounded pt-8">
        <div className="ml-4 flex items-center gap-1">
          <div className="text-chart-1 bg-muted-foreground flex aspect-square items-center justify-center rounded-full p-1">
            <ArrowDownIcon className="size-4 stroke-[1.5]" />
          </div>

          <span className="text-chart-1 text-sm font-medium">14.12%</span>
        </div>

        <Graph />
      </div>
    </div>
  )
}

function CardCta({ className }: CardProps) {
  return (
    <div
      className={cn(
        card_style,
        'text-primary-foreground space-y-8 text-balance',
        className
      )}
      style={gradient_style}
    >
      <h3 className="text-3xl font-bold tracking-tight">
        Grow your business with effecient management
      </h3>
      <p className="text-muted">
        Our solutions are designed to help you optimize your energy managment
        and reduce your costs while growing your business and expanding your
        reach.
      </p>
      <Button variant="secondary">Explore our solutions</Button>
    </div>
  )
}
function CardTools({ className }: CardProps) {
  return (
    <div
      className={cn(
        card_style,
        'place-content-center space-y-8 text-balance',
        className
      )}
    >
      <p className="text-muted-foreground text-center">
        Seamlessly collaborate with your team members like never before.
      </p>

      <div className="bg-muted aspect-square w-full rounded-full border p-4">
        <div className="bg-accent flex size-full items-center justify-center rounded-full">
          <div className="bg-primary text-primary-foreground flex items-center justify-center rounded-full p-1.5">
            <ShieldCheckIcon className="size-4 stroke-[1.5]" />
          </div>

          <div className="bg-primary text-primary-foreground flex items-center justify-center rounded-full p-1.5">
            <HousePlugIcon className="size-4 stroke-[1.5]" />
          </div>

          <div className="bg-primary text-primary-foreground flex items-center justify-center rounded-full p-1.5">
            <MapPinCheckInsideIcon className="size-4 stroke-[1.5]" />
          </div>
          <div className="bg-primary text-primary-foreground flex items-center justify-center rounded-full p-1.5">
            <RotateCwIcon className="size-4 stroke-[1.5]" />
          </div>
          <div className="bg-primary text-primary-foreground flex items-center justify-center rounded-full p-1.5">
            <AtomIcon className="size-4 stroke-[1.5]" />
          </div>
        </div>
      </div>
    </div>
  )
}
function CardBoost({ className }: CardProps) {
  return (
    <div className={cn(card_style, 'pb-0 text-balance', className)}>
      <div className="space-y-3 text-center">
        <h3 className="text-3xl font-bold tracking-tight">
          Boosting Business Today and Tomorrow
        </h3>
        <p className="text-muted-foreground">
          Gain insights into your energy consumption and identify areas of
          improments.
        </p>
        <div className="bg-muted mt-8 overflow-hidden rounded-t">
          <Image
            width={634}
            height={295}
            alt="Energy Consumption"
            src="/monthly-stats-image.png"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
export function Features() {
  return (
    <section className="p-8" id="features">
      <div className="grid grid-cols-12 items-end gap-4">
        <CardReduce className="col-span-8 md:col-span-3" />
        <CardBoost className="col-span-12 md:col-span-6" />
        <CardTools className="col-span-8 md:col-span-3" />

        <CardConnected className="col-span-12 self-start md:col-span-6" />
        <CardCta className="col-span-10 self-start md:col-span-6" />
      </div>
    </section>
  )
}
