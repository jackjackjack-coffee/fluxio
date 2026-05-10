import { Terminal, Twitter, Github } from 'lucide-react'

const LINKS = {
  product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  developers: ['Docs', 'API Reference', 'SDKs', 'CLI', 'Open Source'],
  company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  legal: ['Privacy', 'Terms', 'Security', 'DPA'],
}

export function Footer() {
  return (
    <footer className="border-t border-f-border px-6 pt-20 pb-10 bg-f-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-f-blue" strokeWidth={2} />
              <span className="font-mono font-bold text-f-text">fluxio</span>
            </div>
            <p className="font-mono text-xs text-f-text-muted leading-relaxed max-w-[200px] mb-6">
              API infrastructure for builders who move fast.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 terminal-border flex items-center justify-center text-f-text-muted hover:text-f-text hover:border-f-border-blue transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([cat, links]) => (
            <div key={cat}>
              <p className="section-label mb-5">/{cat}</p>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-mono text-xs text-f-text-muted hover:text-f-text transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-f-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-f-text-muted">
            © {new Date().getFullYear()} Fluxio Inc. MIT Licensed core SDK.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-f-blue animate-pulse" />
            <span className="font-mono text-xs text-f-text-muted">all systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
