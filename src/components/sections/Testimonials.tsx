'use client'

import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: "Fluxio replaced our entire API gateway setup. Three engineers, two weeks, done. The auto-generated SDKs alone saved us a sprint.",
    name: 'Dev Patel',
    role: 'Staff Engineer',
    company: 'NexaCloud',
    handle: '@devpatel_dev',
  },
  {
    quote: "We process 200M requests/day through Fluxio. P99 is 3.8ms globally. I don't think about the routing layer anymore — that's the point.",
    name: 'Yuki Tanaka',
    role: 'Platform Lead',
    company: 'Gridex Systems',
    handle: '@yukitanaka',
  },
  {
    quote: "The observability dashboard finally gave our on-call team the context to debug in under 5 minutes. We went from 30min MTTR to under 4.",
    name: 'Priya Rajan',
    role: 'SRE',
    company: 'Axiom Labs',
    handle: '@priya_sre',
  },
]

export function Testimonials() {
  return (
    <section className="py-32 px-6 bg-f-bg-2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-4">// what builders say</p>
          <h2 className="heading-mono text-[clamp(2.5rem,5vw,5.5rem)] text-f-text max-w-2xl">
            Trusted in production.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid-card p-8 flex flex-col gap-6"
            >
              <p className="font-mono text-sm text-f-text-muted leading-relaxed flex-1">
                <span className="text-f-blue">// </span>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-f-border">
                <p className="font-mono text-sm font-semibold text-f-text">{t.name}</p>
                <p className="font-mono text-xs text-f-text-muted mt-0.5">
                  {t.role} · {t.company}
                </p>
                <p className="font-mono text-xs text-f-blue mt-1">{t.handle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
