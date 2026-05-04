'use client'
import { ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Handle, Position } from '@xyflow/react'
import {
  GaugeIcon,
  SunIcon,
  LayoutDashboardIcon,
  BatteryChargingIcon,
  FactoryIcon,
  FileBarChart2Icon,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Badge } from '../ui/badge'
import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from '../systaliko-ui/text-scroll-read'

interface NodeDataT {
  icon: typeof SunIcon
  label: string
  description: string
}
const nodeTypes = {
  card: CardNode,
}

const nodes = [
  {
    id: 'node_source',
    type: 'card',
    position: { x: 20, y: 200 },
    data: {
      label: 'Energy Source',
      description: 'Solar grid or hybrid input',
      icon: SunIcon,
    },
  },
  {
    id: 'node_metering',
    type: 'card',
    position: { x: 250, y: 40 },
    data: {
      label: 'Metering',
      description: 'Collects live consumption data',
      icon: GaugeIcon,
    },
  },
  {
    id: 'node_platform',
    type: 'card',
    position: { x: 480, y: 200 },
    data: {
      label: 'Platform',
      description: 'Normalizes and analyzes data',
      icon: LayoutDashboardIcon,
    },
  },
  {
    id: 'node_storage',
    type: 'card',
    position: { x: 720, y: 40 },
    data: {
      label: 'Storage',
      description: 'Battery or load balancing',
      icon: BatteryChargingIcon,
    },
  },
  {
    id: 'node_operations',
    type: 'card',
    position: { x: 720, y: 400 },
    data: {
      label: 'Operations',
      description: 'Sites, facilities, equipment',
      icon: FactoryIcon,
    },
  },
  {
    id: 'node_reporting',
    type: 'card',
    position: { x: 950, y: 200 },
    data: {
      label: 'Reporting',
      description: 'Alerts, dashboards, exports',
      icon: FileBarChart2Icon,
    },
  },
]
const edges = [
  {
    id: 'e1-2',
    source: 'node_source',
    target: 'node_metering',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
  {
    id: 'e1-3',
    source: 'node_metering',
    target: 'node_platform',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
  {
    id: 'e1-4',
    source: 'node_platform',
    target: 'node_storage',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
  {
    id: 'e1-5',
    source: 'node_platform',
    target: 'node_operations',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
  {
    id: 'e1-6',
    source: 'node_platform',
    target: 'node_reporting',
    animated: true,
    style: { stroke: 'var(--primary)', strokeWidth: 1 },
  },
]

function CardNode({ data }: { data: NodeDataT }) {
  const { label, description, icon } = data
  const Icon = icon
  return (
    <div className="group bg-card text-card-foreground relative -z-1 flex max-w-[180px] flex-wrap items-center gap-2 rounded border p-4 shadow-xs lg:max-w-full">
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: 'var(--primary)' }}
      />
      <Badge className="ring-ring/20 shadow-primary absolute -top-2 right-2 text-[10px] shadow-sm ring">
        {label}
      </Badge>
      <div className="grid grid-cols-1 grid-rows-1 items-center *:col-start-1 *:row-start-1">
        <Icon
          strokeWidth={1.5}
          className="text-muted-foreground mx-auto size-5"
        />
        <motion.div
          className="border-primary/50 size-12 rounded-full border"
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <p className="text-blance text-muted-foreground flex-1 text-sm">
        {description}
      </p>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: 'var(--primary)' }}
      />
    </div>
  )
}

export function Process() {
  return (
    <section className="pt-20">
      <TextScrollRead spaceClass="h-20">
        <TextScrollReadWrap
          yRange={[0, 80]}
          className="mx-auto max-w-xl place-content-center p-8 text-center"
        >
          <ClipText className="bg-[linear-gradient(-90deg,var(--muted)_50%,var(--foreground)_50%)] text-3xl leading-normal font-semibold text-balance">
            Plug in meters and devices or link with existing APIs
          </ClipText>
        </TextScrollReadWrap>
      </TextScrollRead>
      <div className="mx-auto h-[500px] w-full max-w-7xl border-y border-dashed">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnScroll={false}
          zoomOnDoubleClick={false}
          proOptions={{ hideAttribution: true }}
        />
      </div>
    </section>
  )
}
