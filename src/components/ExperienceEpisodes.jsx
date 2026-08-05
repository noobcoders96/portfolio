import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { season } from '../data/content'

export default function ExperienceEpisodes() {
  const ref = useReveal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experience" ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="reveal mb-8">
        <span className="text-xs font-bold tracking-[0.2em] text-signal">SEASON 1</span>
        <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-bone">{season.seasonTitle}</h2>
        <p className="text-dim text-sm mt-1">{season.seasonRange} · {season.episodes.length} Episodes</p>
      </div>

      <ul className="reveal divide-y divide-line border-t border-b border-line" style={{ transitionDelay: '100ms' }}>
        {season.episodes.map((ep, i) => {
          const open = openIndex === i
          return (
            <li key={ep.title}>
              <button
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                className="w-full flex items-center gap-4 sm:gap-6 py-5 text-left group"
              >
                <span className="font-display text-3xl sm:text-4xl text-dim/60 w-10 sm:w-12 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="shrink-0 w-16 h-10 sm:w-20 sm:h-12 rounded bg-raised border border-line flex items-center justify-center text-signal group-hover:border-signal transition-colors">
                  <PlayGlyph />
                </span>
                <span className="flex-1 font-semibold text-bone group-hover:text-white transition-colors">
                  {ep.title}
                </span>
                <ChevronIcon open={open} />
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 pl-14 sm:pl-[7.5rem] pr-4 text-dim text-sm leading-relaxed max-w-3xl">
                    {ep.synopsis}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function PlayGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`shrink-0 text-dim transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
