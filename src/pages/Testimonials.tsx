import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const testimonials = [
  {
    name: 'A. Sharma',
    role: 'Entrepreneur',
    text: 'Parth sir is meticulous and calm under pressure. He explained every step clearly and closed our dispute without trial.'
  },
  {
    name: 'R. Patel',
    role: 'Private Client',
    text: 'Professional, responsive, and genuinely invested. We felt supported throughout the process.'
  },
  {
    name: 'M. Khan',
    role: 'General Counsel',
    text: 'Sharp analysis and practical advice. Advocate Parth helped us restructure contracts and reduce risk across multiple verticals.'
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section">
      <Helmet>
        <title>Testimonials | Parth Kumar</title>
        <meta name="description" content="Client testimonials reflecting professionalism, clarity, and results." />
      </Helmet>
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="What Clients Say"
          description="Professional feedback from clients across advisory and dispute-resolution matters."
        />

        <Reveal>
          <div className="mt-10 card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-4">
              <button className="btn btn-outline px-4 py-2" aria-label="Previous testimonial" onClick={prev}>Previous</button>
              <div className="text-sm text-slate-600">{index + 1} / {testimonials.length}</div>
              <button className="btn btn-primary px-4 py-2" aria-label="Next testimonial" onClick={next}>Next</button>
            </div>

            <div className="mt-6 relative min-h-[170px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <div className="flex items-center gap-2" aria-label="Rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-accent-600">★</span>
                    ))}
                  </div>
                  <p className="mt-3 text-xl leading-relaxed text-slate-700">"{testimonials[index].text}"</p>
                  <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <div className="font-semibold text-slate-900">{testimonials[index].name}</div>
                      <div className="text-sm text-slate-500">{testimonials[index].role}</div>
                    </div>
                    <div className="text-xs text-slate-500">Shared with permission. Identifiers abbreviated.</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
