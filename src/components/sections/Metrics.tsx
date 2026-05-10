'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'

const STATS = [
  { value: 1_000_000_000, label: 'API requests / month', display: '1B+', prefix: '' },
  { value: 3.8, label: 'Average P99 latency (ms)', display: '3.8ms', prefix: '' },
  { value: 99.99, label: 'Uptime last 12 months', display: '99.99%', prefix: '' },
  { value: 34, label: 'Global edge regions', display: '34', prefix: '' },
]

export function Metrics() {
  return (
    <section className="py-32 px-6 bg-f-bg-2 relative">
      <div className="blue-rule absolute top-0 left-0 right-0 opacity-30" />
      <div className="blue-rule absolute bottom-0 left-0 right-0 opacity-30" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-4">// by the numbers</p>
          <h2 className="heading-mono text-[clamp(2.5rem,5vw,5.5rem)] text-f-text max-w-2xl">
            Production-grade, by default.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-f-border">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-f-bg-2 px-8 py-10 hover:bg-f-bg-3 transition-colors"
            >
              <p className="font-mono font-bold text-[clamp(2.5rem,5vw,4rem)] text-f-blue leading-none mb-3">
                {s.display}
              </p>
              <p className="font-mono text-xs text-f-text-muted leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
