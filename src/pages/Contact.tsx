import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const officeLat = 26.12456602320733
  const officeLng = 85.37101256551178

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const phone = String(form.get('phone') || '')
    const message = String(form.get('message') || '')

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
      setStatus('error')
      return
    }
    setStatus('success')
    e.currentTarget.reset()
  }

  return (
    <section className="section">
      <Helmet>
        <title>Contact | Parth Kumar</title>
        <meta name="description" content="Contact an advocate in Muzaffarpur, Bihar. Call, email, or request a consultation and get a response with next steps." />
      </Helmet>
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Request a consultation"
          description="Share a short summary of your matter. No attorney–client relationship is formed until engagement is confirmed in writing."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 items-start">
          <Reveal>
            <div>
              <div className="text-sm text-slate-600 max-w-prose">
                If your matter is time-sensitive, please call. For confidentiality, avoid sending sensitive information through this form.
              </div>

              <form onSubmit={handleSubmit} className="mt-6 card p-6" noValidate>
                <div className="grid gap-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900">Full name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 outline-none focus:ring-2 focus:ring-accent-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 outline-none focus:ring-2 focus:ring-accent-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="+91 88734 27256"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="Briefly describe your question or situation."
                    />
                    <p className="mt-2 text-xs text-slate-500">Please include relevant dates and documents available. Minimum 10 characters.</p>
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600">Please fill all required fields with valid information. Message must be at least 10 characters.</p>
                  )}
                  {status === 'success' && (
                    <p className="text-sm text-green-600">Thank you. Your message has been recorded. We'll reach out shortly.</p>
                  )}

                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div className="text-xs text-slate-500 max-w-sm">This form is for inquiries only and may not be secure.</div>
                    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="btn btn-primary">Send message</motion.button>
                  </div>
                </div>
              </form>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.05}>
              <div className="card p-6">
                <div className="text-sm font-semibold text-slate-900">Office</div>
                <div className="mt-2 text-slate-600">Maripur, Muzaffarpur, Bihar</div>
                <div className="text-slate-600">India</div>
                <div className="mt-4 grid gap-2 text-slate-600">
                  <div><span className="text-slate-500">Call:</span> <a className="nav-link" href="tel:+918873427256">+91 88734 27256</a></div>
                  <div><span className="text-slate-500">Email:</span> <a className="nav-link" href="mailto:advparth1974@gmail.com">advparth1974@gmail.com</a></div>
                </div>
                <div className="mt-4">
                  <a
                    className="btn btn-outline w-full text-center"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${officeLat},${officeLng}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions
                  </a>
                </div>
                <div className="mt-4 text-xs text-slate-500">Mon–Sat, 9:00–6:00. Appointments by request.</div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card overflow-hidden">
                <iframe
                  title="Office Location"
                  width="100%"
                  height="360"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${officeLat},${officeLng}&z=16&output=embed`}
                  style={{ border: 0 }}
                  aria-label="Map showing office location"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
