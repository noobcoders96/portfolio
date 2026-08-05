import useReveal from '../hooks/useReveal'
import { projects } from '../data/content'

export default function ProjectsRow() {
  const ref = useReveal()

  return (
    <section id="projects" ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <h2 className="reveal font-display text-3xl sm:text-4xl tracking-wide text-bone mb-8">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="reveal group relative rounded-md bg-raised border border-line p-6 overflow-hidden hover:border-signal transition-colors duration-300"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="inline-block text-[11px] font-bold tracking-wider text-signal mb-3 uppercase">
              {p.badge}
            </span>
            <h3 className="font-display text-2xl tracking-wide text-bone mb-2">{p.title}</h3>
            <p className="text-dim text-sm leading-relaxed mb-4">{p.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full border border-line text-dim group-hover:border-signal/40 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
