const LANGS = ['TypeScript', 'Python', 'Go', 'Rust', 'Ruby', 'Java', 'C#', 'PHP', 'Kotlin', 'Swift', 'Elixir', 'Scala']
const INTEGRATIONS = ['AWS', 'GCP', 'Azure', 'Cloudflare', 'Vercel', 'Railway', 'Fly.io', 'Render', 'Supabase', 'PlanetScale', 'Upstash', 'Neon']

export function Marquee() {
  return (
    <section className="py-12 border-y border-f-border overflow-hidden space-y-4">
      <p className="text-center section-label mb-6 opacity-60">// compatible with your stack</p>

      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...LANGS, ...LANGS].map((l, i) => (
            <span key={i} className="font-mono text-sm text-f-text-muted/40 hover:text-f-blue transition-colors">
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-10 animate-marquee [animation-direction:reverse] whitespace-nowrap">
          {[...INTEGRATIONS, ...INTEGRATIONS].map((l, i) => (
            <span key={i} className="font-mono text-xs text-f-text-muted/30 hover:text-f-text-muted transition-colors">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
