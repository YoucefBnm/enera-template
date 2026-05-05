import { TextStaggerInview } from '../systaliko-ui/text-stagger-inview'
import { Button } from '../ui/button'
import { MapPin, WorldMap, WorldMapGLow, WorldMapSvg } from '../world-map'

function LocationsText() {
  return (
    <div className="relative z-2 col-span-2 col-start-1 space-y-3 p-8">
      <TextStaggerInview
        animation="bottom"
        className="text-3xl font-semibold text-balance *:overflow-hidden"
      >
        Available in three continents
      </TextStaggerInview>
      <p className="text-balance">
        Europe and United States and Asia, we have a global network of data
        centers, providing reliable energy solutions for our clients.
      </p>
      <Button>Book a demo</Button>
    </div>
  )
}

export function Locations() {
  return (
    <section className="grid grid-cols-1 grid-rows-1 items-center *:row-start-1 md:grid-cols-4">
      <LocationsText />
      <WorldMap className="col-start-1 md:col-span-3 md:col-start-2">
        <WorldMapGLow className="bg-accent/20" />

        <WorldMapSvg>
          <g>
            <circle cx={280} cy={100} r={24} fill="transparent" />
            <MapPin x={280} y={100} delay={0} />
          </g>
          {/* Europe */}
          <g>
            <circle cx={640} cy={80} r={24} fill="transparent" />
            <MapPin x={640} y={80} delay={1} />
          </g>
          {/* Asia */}
          <g>
            <circle cx={900} cy={120} r={24} fill="transparent" />
            <MapPin x={900} y={120} delay={2} />
          </g>
        </WorldMapSvg>
      </WorldMap>
    </section>
  )
}
