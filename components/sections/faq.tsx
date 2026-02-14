import { SectionIntro } from '../section-intro'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

const FAQS = [
  {
    question: 'What devices do you support ?',
    answer:
      'Enera supports standard smart meters, common inverter brands, battery controllers, and OCPP-compatible chargers. We also provide custom integrations.',
  },
  {
    question: 'Is my data secure ?',
    answer:
      'Yes — TLS in transit, role-based access controls, and secure storage options are standard.',
  },
  {
    question: 'How long does onboarding take ?',
    answer:
      'Pilots can launch in weeks; larger rollouts depend on site count and integrations.',
  },
  {
    question: 'Do you offer SLA and support ?',
    answer:
      'Enterprise customers receive SLA-backed support and dedicated account management.',
  },
  {
    question: 'Can you integrate existing EMS or SCADA ?',
    answer:
      'Yes. We connect over APIs, MQTT, Modbus gateways, and custom adapters.',
  },
]
export function Faq() {
  return (
    <section className="py-16">
      <SectionIntro
        className="text-center"
        title="faq"
        subtitle="Frequently asked questions"
      />
      <div className="mx-auto max-w-3xl">
        <Accordion className="w-full border">
          {FAQS.map((fq) => (
            <AccordionItem
              key={fq.question}
              value={fq.question}
              className="w-full space-y-4 border-b px-4 py-2 last:border-b-0"
            >
              <AccordionTrigger className="text-xl font-medium">
                {fq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-balance">
                {fq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
