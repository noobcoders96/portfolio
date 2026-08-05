import useReveal from '../hooks/useReveal'
import { skillRows } from '../data/content'

export default function SkillsRows() {
  const ref = useReveal()

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-6 sm:py-10 space-y-10">
      {skillRows.map((row, i) => (
        <div key={row.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
          <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-bone mb-4">{row.title}</h3>
          <div className="row-scroll flex gap-4 overflow-x-auto pb-2 -mx-1 px-1">
            {row.items.map((item) => (
              <SkillCard key={item} label={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

function SkillCard({ label }) {
  return (
    <div className="shrink-0 w-40 sm:w-48 aspect-video rounded-md bg-raised border border-line flex items-center justify-center px-3 text-center hover:scale-[1.06] hover:border-signal transition-all duration-300 cursor-default">
      <span className="text-sm sm:text-base font-semibold text-bone">{label}</span>
    </div>
  )
}
