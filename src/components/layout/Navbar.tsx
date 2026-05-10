'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'docs', href: '#' },
  { label: 'features', href: '#features' },
  { label: 'pricing', href: '#pricing' },
  { label: 'changelog', href: '#' },
  { label: 'status', href: '#' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobile, setMobile] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > lastY.current && y > 100)
      lastY.current = y
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-f-bg/95 backdrop-blur-xl border-b border-f-border' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-f-blue" strokeWidth={2} />
            <span className="font-mono text-base font-bold text-f-text tracking-tight">
              fluxio
            </span>
            <span className="code-block text-xs py-0.5">v2.4</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="font-mono text-sm text-f-text-muted hover:text-f-text transition-colors">
                ./{l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="font-mono text-sm text-f-text-muted hover:text-f-text transition-colors">
              sign_in
            </a>
            <a href="#" className="btn-blue text-xs py-2 px-4">
              $ get started
            </a>
          </div>

          <button className="md:hidden text-f-text-muted" onClick={() => setMobile(!mobile)}>
            {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-f-bg flex flex-col items-start justify-center gap-8 px-8"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-mono text-4xl text-f-text hover:text-f-blue transition-colors"
                onClick={() => setMobile(false)}
              >
                ./{l.label}
              </motion.a>
            ))}
            <motion.a href="#" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="btn-blue mt-4" onClick={() => setMobile(false)}>
              $ get started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
