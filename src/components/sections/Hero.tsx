'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Player } from '@remotion/player'
import { GridLoop } from '@/remotion/compositions/GridLoop'
import { ArrowRight, Copy, Check } from 'lucide-react'
import { gsap } from 'gsap'

const INSTALL_CMD = 'npm install @fluxio/sdk'

function TerminalLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3 font-mono text-sm"
    >
      <span className="text-f-blue select-none">$</span>
      {children}
    </motion.div>
  )
}

export function Hero() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    gsap.from(headRef.current?.querySelectorAll('.char') ?? [], {
      y: 60, opacity: 0, duration: 0.7, stagger: 0.015, ease: 'power3.out', delay: 0.3,
    })
  }, [])

  const copyInstall = () => {
    navigator.clipboard.writeText(INSTALL_CMD)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const HEADING_CHARS = 'API INFRA\nFOR BUILDERS'.split('')

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Remotion grid loop as full-bleed bg */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Player
          component={GridLoop}
          durationInFrames={180}
          fps={30}
          compositionWidth={1920}
          compositionHeight={1080}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loop autoPlay controls={false}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-f-bg/60 via-f-bg/30 to-f-bg" />

      {/* Blue rule top */}
      <div className="relative z-10 blue-rule opacity-30 mt-16" />

      <div className="relative z-10 flex-1 flex items-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 terminal-border px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-f-blue animate-pulse" />
              <span className="font-mono text-xs text-f-text-muted">
                <span className="text-f-blue">fluxio@2.4.0</span> — now with edge routing
              </span>
            </motion.div>

            {/* Mono display headline */}
            <h1 ref={headRef} className="heading-mono text-[clamp(2.5rem,5vw,6rem)] text-f-text mb-8 overflow-hidden whitespace-pre-line">
              {'API INFRA\nFOR BUILDERS'.split('\n').map((line, li) => (
                <div key={li} className="overflow-hidden">
                  <div className="block whitespace-nowrap">
                    {line.split('').map((ch, ci) => (
                      <span key={ci} className="char inline-block">{ch === ' ' ? ' ' : ch}</span>
                    ))}
                  </div>
                  {li === 0 && (
                    <div className="block overflow-hidden">
                      <span className="char inline-block text-f-blue">_</span>
                    </div>
                  )}
                </div>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-f-text-muted text-lg leading-relaxed max-w-md mb-10"
            >
              Ship APIs 10× faster. Unified routing, real-time observability, zero-config deployments,
              and an SDK that gets out of your way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#" className="btn-blue group">
                Start building
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="btn-mono">
                Read the docs
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="terminal-border overflow-hidden"
          >
            {/* Terminal titlebar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-f-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-xs text-f-text-muted ml-2">fluxio — quick start</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 space-y-4 bg-f-bg-2">
              <TerminalLine delay={0.9}><span className="text-f-text">{INSTALL_CMD}</span></TerminalLine>
              <TerminalLine delay={1.1}>
                <span className="text-f-text-muted">
                  <span className="text-green-400">✓</span> installed fluxio@2.4.0
                </span>
              </TerminalLine>

              <div className="pt-2 pb-1">
                <div className="font-mono text-xs text-f-text-muted mb-3">// initialize client</div>
                <div className="space-y-1 font-mono text-sm">
                  <div><span className="text-purple-400">import</span> <span className="text-f-text">{'{ Fluxio }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@fluxio/sdk'</span></div>
                  <div className="mt-2">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-f-blue">client</span>{' '}
                    <span className="text-f-text">= </span>
                    <span className="text-yellow-400">new Fluxio</span>
                    <span className="text-f-text">{'({'}</span>
                  </div>
                  <div className="pl-4"><span className="text-f-text-muted">apiKey</span><span className="text-f-text">: </span><span className="text-green-400">process.env.FLUXIO_KEY</span></div>
                  <div><span className="text-f-text">{'})'}</span></div>
                  <div className="mt-2">
                    <span className="text-f-text-muted">{'// '}</span>
                    <span className="text-f-text-muted">deploy an endpoint</span>
                  </div>
                  <div>
                    <span className="text-purple-400">await</span>{' '}
                    <span className="text-f-blue">client</span>
                    <span className="text-f-text">.</span>
                    <span className="text-yellow-400">deploy</span>
                    <span className="text-f-text">{'({ route: '}</span>
                    <span className="text-green-400">'/api/v1'</span>
                    <span className="text-f-text"> {'})'}
                    </span>
                    <span className="text-f-blue animate-blink">█</span>
                  </div>
                </div>
              </div>

              {/* Copy install button */}
              <div className="pt-4 border-t border-f-border flex items-center justify-between">
                <span className="font-mono text-xs text-f-text-muted">{INSTALL_CMD}</span>
                <button onClick={copyInstall} className="flex items-center gap-1.5 font-mono text-xs text-f-text-muted hover:text-f-blue transition-colors">
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'copied!' : 'copy'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blue rule bottom */}
      <div className="relative z-10 blue-rule opacity-20" />
    </section>
  )
}
