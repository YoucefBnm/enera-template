import Image from 'next/image'
import React from 'react'
import {
  CircleCard,
  CircleCards,
  CircleCardsWrapper,
  CircleItem,
} from '../circle-cards'

const FEATURES_CARDS = [
  // {
  //   title: 'Real time Monitoring',
  //   description:
  //     'Live energy metrics, alerts, and historical trends to spot inefficiencies fast.',
  //   imageUrl: '/feature-time-image.png',
  //   outputRange: [30, -10],
  //   inputRange: [0, 0.4],
  // },
  {
    title: 'Device Integration',
    description:
      'Connect your devices to the platform and start monitoring their performance.',
    imageUrl: '/feature-integrate-image.png',
    outputRange: [30, -4],
    inputRange: [0, 0.4],
  },
  {
    title: 'Actionable Analytics',
    description:
      'Gain insights into your energy consumption and identify areas for improvement.',
    imageUrl: '/feature-analyse-image.png',

    outputRange: [32, -3],
    inputRange: [0.2, 0.6],
  },
  {
    title: 'Entriprise Grade',
    description:
      'Role-based access, encrypted data flows, and audit-ready controls designed for regulated environments.',
    imageUrl: '/feature-entreprise-image.png',
    outputRange: [34, -2],
    inputRange: [0.4, 0.8],
  },
  {
    title: 'Scalable Architecture',
    description:
      'Deploy from a single site to large multi-region infrastructures without performance or reliability trade-offs.',
    imageUrl: '/feature-scale-image.png',
    outputRange: [36, -1],
    inputRange: [0.6, 1],
  },
]

function FeatureCard({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className="bg-card/80 text-card-foreground w-2xs space-y-8 rounded-xl border p-8 shadow backdrop-blur md:w-xs"
      {...props}
    />
  )
}

export function Features() {
  return (
    <section>
      <CircleCards spacerClassName="h-[500px]">
        <CircleCardsWrapper yOutput={[0, 500]}>
          {FEATURES_CARDS.map((card) => (
            <CircleItem
              key={card.title}
              outputRange={card.outputRange}
              inputRange={card.inputRange}
            >
              <CircleCard>
                <FeatureCard>
                  <div className="mx-auto w-11/12">
                    <Image
                      width={215}
                      height={215}
                      src={card.imageUrl}
                      alt={card.title}
                      className="aspect-square h-auto w-full object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium">{card.title}</h3>

                    <p className="text-muted-foreground text-sm text-balance">
                      {card.description}
                    </p>
                  </div>
                </FeatureCard>
              </CircleCard>
            </CircleItem>
          ))}
        </CircleCardsWrapper>
      </CircleCards>
    </section>
  )
}
