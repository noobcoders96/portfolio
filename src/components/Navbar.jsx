import { useEffect, useState } from 'react'
import { asset } from '../lib/asset'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-surface/95 backdrop-blur border-b border-line' : 'bg-gradient-to-b from-ink/80 to-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#top" className="font-display text-2xl sm:text-3xl tracking-wide text-signal">
          KARTHIKEYAN&nbsp;S
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-bone transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={asset('resume.pdf')}
          download
          className="text-sm font-semibold bg-bone text-ink px-4 py-1.5 rounded hover:bg-white transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
