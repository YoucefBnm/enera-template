import Image from 'next/image'
import {
  Slideshow,
  SlideshowImageContainer,
  SlideshowImageWrap,
  SlideshowIndicator,
} from '../systaliko-ui/slideshow'
import { SectionIntro } from '../section-intro'
import Link from 'next/link'

const CASE_STUDIES = [
  {
    client: 'Homa Appliances',
    solution: 'Energy Cost Reduction',
    imageUrl:
      'https://images.unsplash.com/photo-1717386255893-59c0846cdef0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    client: 'Christopher Burns',
    solution: 'Performance Optimization',
    imageUrl:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    client: 'Charles Chen',
    solution: 'Improved Grid Reliability',
    imageUrl:
      'https://images.unsplash.com/photo-1759847527437-a548715aef7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    client: 'Marcin Jozwiak',
    solution: 'Peak Load Management',
    imageUrl:
      'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    client: 'Kamekich',
    solution: 'Multisite Energy Visibility',
    imageUrl:
      'https://images.unsplash.com/photo-1726111262949-e22631a8c376?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    client: 'Hannes Egler',
    solution: 'Smart Load Scheduling',
    imageUrl:
      'https://images.unsplash.com/photo-1504376830547-506dedfe1fe9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    client: 'Hoi An and Da Nang',
    solution: 'Operational Efficiency',
    imageUrl:
      'https://images.unsplash.com/photo-1768796373577-2e6e51351165?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export function CaseStudies() {
  return (
    <section className="place-content-center py-12">
      <SectionIntro
        title="case studies"
        subtitle="Real world success stories"
      />
      <Slideshow className="flex flex-col justify-center px-8 md:flex-row">
        <div className="bg-border flex basis-1/2 flex-col gap-px p-px">
          {CASE_STUDIES.map((cs, index) => (
            <Link
              className="bg-background flex cursor-pointer items-center justify-between gap-4 px-4 py-2.5"
              href="#"
              key={cs.client}
            >
              <SlideshowIndicator
                index={index}
                className="inline-flex flex-1 items-center text-2xl font-medium uppercase"
              >
                {cs.client}
              </SlideshowIndicator>
            </Link>
          ))}
        </div>
        <SlideshowImageContainer className="md: flex-1 border-t-0 border-r border-b border-l p-4 md:border-y md:border-l-0">
          {CASE_STUDIES.map((cs, index) => (
            <SlideshowImageWrap
              index={index}
              key={cs.client}
              className="relative size-full min-h-70"
            >
              <Image
                fill
                src={cs.imageUrl}
                alt={cs.client}
                loading="eager"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="inline-block size-full object-contain align-middle"
              />
            </SlideshowImageWrap>
          ))}
        </SlideshowImageContainer>
      </Slideshow>
    </section>
  )
}
