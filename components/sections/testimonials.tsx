import { SectionIntro } from '../section-intro'
import {
  CardTestimonial,
  TestimonialAuthor,
  TestimonialQuote,
  TestimonialRating,
} from '../systaliko-ui/card-testimonial'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

const TESTIMONIALS = [
  {
    id: 'testimonial-enera-1',
    quote:
      'The platform helped us understand exactly where energy was being wasted across multiple sites. The insights were actionable, and the rollout was smooth. Cost savings were visible within the first quarter.',
    author: {
      name: 'Energy Manager',
      avatarUrl:
        'https://images.unsplash.com/photo-1623184663796-f0eb7e46d6ab?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Commercial Real Estate Group',
    },
    rating: 5,
  },
  {
    id: 'testimonial-enera-2',
    quote:
      'Peak demand charges were a major concern for our facilities. GridFlow’s monitoring and alerts allowed us to manage loads proactively and avoid unexpected costs.',
    author: {
      name: 'Logistics & Warehousing Company',
      avatarUrl:
        'https://images.unsplash.com/photo-1650091903029-fc3f1ddcb7f9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Infrastructure Lead',
    },
    rating: 5,
  },
  {
    id: 'testimonial-enera-3',
    quote:
      'Monitoring generation performance across projects used to be fragmented. With GridFlow, we now have consistent visibility and faster issue detection, which directly improved output reliability.',
    author: {
      name: 'Solar Project Developer',
      avatarUrl:
        'https://images.unsplash.com/photo-1686063165043-45243dab25ab?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Head of Renewables',
    },
    rating: 4.5,
  },
  {
    id: 'testimonial-enera-4',
    quote:
      'The automated reporting capabilities saved our team a significant amount of time. We now produce accurate sustainability and compliance reports with confidence.',

    author: {
      name: 'Public Sector Organization',
      avatarUrl:
        'https://images.unsplash.com/photo-1718392372850-84ccd5d36e7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Sustainability Officer',
    },
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-accent text-accent-foreground py-20">
      <SectionIntro
        title="Testimonials"
        subtitle="What our clients say about us"
      />

      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full px-8"
      >
        <CarouselContent>
          {TESTIMONIALS.map((testiminial, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2">
              <div className="p-1">
                <CardTestimonial
                  testimonialQuote={testiminial.quote}
                  testimonialRating={testiminial.rating}
                  testimonialAuthor={{
                    authorName: testiminial.author.name,
                    avatarUrl: testiminial.author.avatarUrl,
                    description: testiminial.author.description,
                  }}
                  role="article"
                  aria-labelledby={`card-${testiminial.id}-title`}
                  aria-describedby={`card-${testiminial.id}-content`}
                  className="w-full border bg-transparent shadow-none"
                >
                  <TestimonialRating className="text-primary" />
                  <div className="relative text-lg text-balance">
                    <TestimonialQuote>{testiminial.quote}</TestimonialQuote>
                  </div>
                  <TestimonialAuthor className="flex items-center gap-4" />
                </CardTestimonial>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-4 flex gap-2">
          <CarouselPrevious className="relative inset-0 m-0 size-8 translate-y-0" />
          <CarouselNext className="relative inset-0 m-0 size-8 translate-y-0" />
        </div>
      </Carousel>
    </section>
  )
}
