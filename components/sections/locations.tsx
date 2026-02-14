'use client'
import { SectionIntro } from '../section-intro'
import {
  CustomCursor,
  CustomCursorProvider,
  useCustomCursor,
} from '../systaliko-ui/custom-cursor'
import { MapPin, WorldMap, WorldMapGLow, WorldMapSvg } from '../world-map'

function LocationInfo({
  country,
  description,
}: {
  country: string
  description: string
}) {
  return (
    <div className="bg-popover text-popover-foreground border-border/50 w-36 space-y-1 rounded border p-2">
      <h4 className="font-medium">{country}</h4>
      <p className="text-muted-foreground text-xs">{description}</p>
    </div>
  )
}

function LocationsContent() {
  const { setCursorChildren, containerRef } = useCustomCursor()

  const handleUsCursor = () => {
    setCursorChildren(
      <LocationInfo
        country="USA"
        description="Our headquarters in New York City and Washington, D.C."
      />
    )
  }
  const handleEuropeCursor = () => {
    setCursorChildren(
      <LocationInfo
        country="Europe"
        description="Our headquarters across Europe, including London, Paris, and Amsterdam"
      />
    )
  }
  const handleAsiaCursor = () => {
    setCursorChildren(
      <LocationInfo
        country="Asia"
        description="Our headquarters in Asia, including Tokyo, Seoul, and Singapore"
      />
    )
  }
  const handleClearCursor = () => {
    setCursorChildren(null)
  }
  return (
    <section className="bg-foreground text-background grid grid-cols-1 grid-rows-1 items-center *:col-start-1 *:row-start-1">
      <SectionIntro
        title="our locations"
        subtitle="From the USA to Asia, we have a global network of data centers, providing reliable energy solutions for our clients."
        className="relative z-10 size-fit place-content-center"
      />
      <WorldMap className="relative" ref={containerRef}>
        <CustomCursor />
        <WorldMapGLow className="bg-primary/20" />

        <WorldMapSvg>
          <g onMouseEnter={handleUsCursor} onMouseLeave={handleClearCursor}>
            <circle cx={280} cy={100} r={24} fill="transparent" />
            <MapPin x={280} y={100} delay={0} />
          </g>
          {/* Europe */}
          <g onMouseEnter={handleEuropeCursor} onMouseLeave={handleClearCursor}>
            <circle cx={640} cy={80} r={24} fill="transparent" />
            <MapPin x={640} y={80} delay={1} />
          </g>
          {/* Asia */}
          <g onMouseEnter={handleAsiaCursor} onMouseLeave={handleClearCursor}>
            <circle cx={900} cy={120} r={24} fill="transparent" />
            <MapPin x={900} y={120} delay={2} />
          </g>
        </WorldMapSvg>
      </WorldMap>
    </section>
  )
}

export function Locations() {
  return (
    <CustomCursorProvider>
      <LocationsContent />
    </CustomCursorProvider>
  )
}
