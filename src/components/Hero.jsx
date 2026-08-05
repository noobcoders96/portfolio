import { profile } from '../data/content'
import { asset } from '../lib/asset'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <img
          src={asset('profile.jpg')}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top scale-110 blur-sm opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto h-full min-h-screen flex items-center px-5 sm:px-8 pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12 w-full">
          {/* Poster / profile photo */}
          <div className="animate-scaleIn shrink-0">
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-md overflow-hidden ring-2 ring-line shadow-2xl shadow-black/60">
              <img src={asset('profile.jpg')} alt="Karthikeyan S" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Title block */}
          <div className="animate-fadeUp text-center md:text-left">
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] text-signal mb-3">
              NOW STREAMING
            </span>
            <h1 className="font-display text-6xl sm:text-8xl leading-none tracking-wide text-bone">
              {profile.name}
            </h1>
            <p className="mt-3 text-dim text-sm sm:text-base tracking-wide uppercase">{profile.tagline}</p>

            <div className="mt-4 flex items-center justify-center md:justify-start gap-3 text-sm">
              <span className="text-match font-bold">{profile.matchScore}% Match</span>
              <span className="text-dim">2+ Seasons Experience</span>
              <span className="px-1.5 py-0.5 border border-dim/50 text-dim text-xs rounded">HD</span>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#experience"
                className="flex items-center gap-2 bg-bone text-ink font-semibold px-6 py-2.5 rounded hover:bg-white transition-colors"
              >
                <PlayIcon /> Play Experience
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 bg-white/20 text-bone font-semibold px-6 py-2.5 rounded hover:bg-white/30 transition-colors backdrop-blur"
              >
                <InfoIcon /> More Info
              </a>
              <a
                href={asset('resume.pdf')}
                download
                className="flex items-center gap-2 text-bone/90 font-semibold px-6 py-2.5 rounded border border-dim/40 hover:border-bone transition-colors"
              >
                <DownloadIcon /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  )
}
function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
