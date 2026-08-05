import { profile } from '../data/content'
import { asset } from '../lib/asset'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-dim text-sm">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex items-center gap-6">
          <a href={`mailto:${profile.email}`} className="hover:text-bone transition-colors">
            {profile.email}
          </a>
          <a href={asset('resume.pdf')} download className="hover:text-bone transition-colors">
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
