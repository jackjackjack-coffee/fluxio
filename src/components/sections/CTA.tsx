'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Grid bg accent */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,102,255,0.12)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-f-blue/8 blur-[120px] pointer-events-none animate-float" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          // ready to ship?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-mono text-[clamp(3.5rem,7.5vw,8.5rem)] text-f-text mb-8"
        >
          Build the API.
          <br />
          <span className="text-f-blue">Ship the product.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-mono text-f-text-muted text-base mb-12 max-w-lg mx-auto"
        >
          Free forever for hobby projects. No credit card. No vendor lock-in. Full docs from day one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#" className="btn-blue text-sm py-4 px-8 group">
            $ get started free
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="btn-mono text-sm py-4 px-8">
            $ read the docs
          </a>
        </motion.div>
      </div>
    </section>
  )
}
