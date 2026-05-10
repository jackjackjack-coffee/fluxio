'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'hobby',
    price: 0,
    annualPrice: 0,
    desc: 'For side projects and experiments.',
    features: ['100k requests/month', '3 endpoints', 'Community support', 'Shared edge network', 'Basic analytics'],
    cta: '$ init free',
    highlighted: false,
  },
  {
    name: 'pro',
    price: 79,
    annualPrice: 63,
    desc: 'For production APIs and growing teams.',
    features: ['50M requests/month', 'Unlimited endpoints', 'Priority support', 'Dedicated edge PoPs', 'Full observability', 'Custom domains', 'Team seats (5)'],
    cta: '$ init pro',
    highlighted: true,
  },
  {
    name: 'enterprise',
    price: null,
    annualPrice: null,
    desc: 'For orgs with compliance and scale requirements.',
    features: ['Unlimited requests', 'SLA 99.99%', 'Dedicated infra', 'SAML SSO', 'Audit logs', 'Private PoPs', 'Custom contracts'],
    cta: '$ contact sales',
    highlighted: false,
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-4">// pricing</p>
          <h2 className="heading-mono text-[clamp(2.5rem,5vw,5.5rem)] text-f-text max-w-2xl mb-8">
            Usage-based pricing. No surprises.
          </h2>

          <div className="inline-flex items-center gap-1 terminal-border p-1">
            {['monthly', 'annual'].map((t) => (
              <button
                key={t}
                onClick={() => setAnnual(t === 'annual')}
                className={`px-4 py-1.5 font-mono text-xs transition-all rounded-sm ${
                  (t === 'annual') === annual
                    ? 'bg-f-blue text-f-text'
                    : 'text-f-text-muted hover:text-f-text'
                }`}
              >
                --{t}{t === 'annual' ? ' (20% off)' : ''}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 flex flex-col gap-6 ${
                plan.highlighted
                  ? 'bg-f-blue/10 border border-f-blue/40 rounded-sm'
                  : 'grid-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-px left-0 right-0 h-px bg-f-blue" />
              )}

              <div>
                <p className="section-label mb-3">
                  <span className="text-f-text-muted">fluxio/</span>{plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? 'a' : 'm'}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="font-mono font-bold text-4xl text-f-text leading-none"
                    >
                      {plan.price === null
                        ? 'custom'
                        : plan.price === 0
                        ? 'free'
                        : `$${annual ? plan.annualPrice : plan.price}`}
                    </motion.span>
                  </AnimatePresence>
                  {plan.price !== null && plan.price > 0 && (
                    <span className="font-mono text-xs text-f-text-muted mb-1">/mo</span>
                  )}
                </div>
                <p className="font-mono text-xs text-f-text-muted">{plan.desc}</p>
              </div>

              <div className="flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Check className="w-3.5 h-3.5 text-f-blue flex-shrink-0" strokeWidth={2.5} />
                    <span className="font-mono text-xs text-f-text-muted">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className={`flex items-center justify-center py-3 font-mono text-sm font-semibold rounded-sm transition-all ${
                  plan.highlighted
                    ? 'bg-f-blue text-f-text hover:bg-blue-600'
                    : 'btn-mono'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
