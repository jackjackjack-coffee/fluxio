'use client'

import { motion } from 'framer-motion'
import { Zap, Eye, Globe, Shield, GitBranch, Box } from 'lucide-react'

const FEATURES = [
  {
    icon: Zap,
    cmd: 'fluxio.route()',
    title: 'Intelligent routing',
    description: 'Edge-aware request routing with automatic failover, load balancing, and rate limiting. Zero config.',
    size: 'large',
  },
  {
    icon: Eye,
    cmd: 'fluxio.observe()',
    title: 'Real-time observability',
    description: 'Every request traced end-to-end. P50/P95/P99 latency, error rates, and throughput in one dashboard.',
    size: 'small',
  },
  {
    icon: Globe,
    cmd: 'fluxio.deploy()',
    title: 'Global edge network',
    description: '34 regions. Sub-10ms routing to the nearest PoP. Your API feels local everywhere.',
    size: 'small',
  },
  {
    icon: Shield,
    cmd: 'fluxio.secure()',
    title: 'API security layer',
    description: 'Auth, rate limiting, IP allowlisting, and WAF — applied with a single decorator.',
    size: 'small',
  },
  {
    icon: GitBranch,
    cmd: 'fluxio.version()',
    title: 'API versioning',
    description: 'Ship breaking changes without breaking clients. Semantic versioning, migration guides, deprecation warnings built in.',
    size: 'small',
  },
  {
    icon: Box,
    cmd: 'fluxio.sdk()',
    title: 'Auto-generated SDKs',
    description: 'Deploy an API. Get TypeScript, Python, Go, and Ruby SDKs generated automatically.',
    size: 'small',
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-4">// platform features</p>
          <h2 className="heading-mono text-[clamp(2.5rem,5vw,5.5rem)] text-f-text max-w-3xl">
            Everything the API layer needs.
          </h2>
          <div className="blue-rule mt-6 max-w-xs" />
        </motion.div>

        {/* Bento — 12 col, dense */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -2 }}
                className="grid-card p-8 flex flex-col gap-5 cursor-default group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded border border-f-border flex items-center justify-center group-hover:border-f-border-blue transition-colors">
                    <Icon className="w-4 h-4 text-f-text-muted group-hover:text-f-blue transition-colors" strokeWidth={1.5} />
                  </div>
                  <code className="code-block text-xs py-1">{f.cmd}</code>
                </div>

                <div>
                  <h3 className="font-mono font-bold text-xl text-f-text mb-2">{f.title}</h3>
                  <p className="text-f-text-muted text-sm leading-relaxed">{f.description}</p>
                </div>

                {f.size === 'large' && (
                  <div className="mt-auto pt-6 border-t border-f-border grid grid-cols-3 gap-4">
                    {[['<4ms', 'P99 latency'], ['34', 'Edge regions'], ['99.99%', 'Uptime SLA']].map(([v, l]) => (
                      <div key={l}>
                        <p className="font-mono font-bold text-2xl text-f-blue leading-none">{v}</p>
                        <p className="section-label mt-1.5 text-f-text-muted/60">{l}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
