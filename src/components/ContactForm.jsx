import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { WEB3FORMS_ACCESS_KEY } from '../data/config'
import { profile } from '../data/content'

const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' }

export default function ContactForm() {
  const ref = useReveal()
  const [status, setStatus] = useState(STATUS.IDLE)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('PASTE-')) {
      setStatus(STATUS.ERROR)
      return
    }

    setStatus(STATUS.LOADING)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: 'Karthikeyan Portfolio',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus(STATUS.SUCCESS)
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus(STATUS.ERROR)
      }
    } catch {
      setStatus(STATUS.ERROR)
    }
  }

  return (
    <section id="contact" ref={ref} className="relative py-20 sm:py-28 border-t border-line">
      <div className="absolute inset-0 bg-gradient-to-b from-ink to-surface -z-10" />
      <div className="reveal max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-bone">Ready to Hire?</h2>
        <p className="text-dim mt-3 mb-8 text-base sm:text-lg">
          Send a message and it'll land straight in my inbox — no middleman.
        </p>

        {status === STATUS.SUCCESS ? (
          <div className="rounded-md border border-match/40 bg-match/10 px-6 py-8 text-match font-semibold">
            Message sent. I'll get back to you shortly at your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Your name"
                type="text"
                value={form.name}
                onChange={update('name')}
                required
                autoComplete="name"
              />
              <Field
                label="Your email"
                type="email"
                value={form.email}
                onChange={update('email')}
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-[0.15em] text-dim uppercase mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="What are you looking to build?"
                className="w-full bg-raised border border-line rounded px-4 py-3 text-bone placeholder:text-dim/60 focus:outline-none focus:border-signal transition-colors resize-none"
              />
            </div>

            {status === STATUS.ERROR && (
              <p className="text-signal text-sm">
                {WEB3FORMS_ACCESS_KEY.startsWith('PASTE-')
                  ? 'Form isn\'t connected yet — add your Web3Forms access key in src/data/config.js.'
                  : 'Something went wrong sending that. Please try again, or email directly below.'}
              </p>
            )}

            <button
              type="submit"
              disabled={status === STATUS.LOADING}
              className="w-full sm:w-auto bg-signal hover:bg-signalDeep transition-colors text-white font-semibold px-8 py-3 rounded disabled:opacity-60"
            >
              {status === STATUS.LOADING ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}

        <p className="text-dim text-sm mt-8">
          Prefer email? Reach me directly at{' '}
          <a href={`mailto:${profile.email}`} className="text-bone underline underline-offset-2 hover:text-signal">
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-bold tracking-[0.15em] text-dim uppercase mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-raised border border-line rounded px-4 py-3 text-bone placeholder:text-dim/60 focus:outline-none focus:border-signal transition-colors"
      />
    </div>
  )
}
