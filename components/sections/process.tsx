'use client'
import { ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Handle, Position } from '@xyflow/react'
import { motion } from 'motion/react'
import { Badge } from '../ui/badge'
import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from '../systaliko-ui/text-scroll-read'
import { NodeDataT } from '@/types'
import { nodes_edges, process_nodes } from '@/data'

const nodeTypes = {
  card: CardNode,
}

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
          nodes={process_nodes}
          edges={nodes_edges}
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
