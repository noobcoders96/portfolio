import useReveal from '../hooks/useReveal'
import { profile } from '../data/content'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 reveal">
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-bone mb-4">Synopsis</h2>
          <p className="text-dim leading-relaxed text-base sm:text-lg">{profile.summary}</p>
        </div>

        <div className="reveal space-y-6" style={{ transitionDelay: '120ms' }}>
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] text-dim uppercase mb-2">Starring</h3>
            <p className="text-bone text-sm leading-relaxed">Java, Spring Boot, REST APIs, Microservices</p>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] text-dim uppercase mb-2">Genres</h3>
            <p className="text-bone text-sm leading-relaxed">
              Backend Engineering · Distributed Systems · API Design
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] text-dim uppercase mb-2">This title is</h3>
            <p className="text-bone text-sm leading-relaxed">Reliable · Scalable · Production-tested</p>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] text-dim uppercase mb-2">Contact</h3>
            <p className="text-bone text-sm leading-relaxed">
              {profile.email}
              <br />
              {profile.phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
