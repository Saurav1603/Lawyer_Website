import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'

const areas = [
  { title: 'Criminal Law', desc: 'Bail, anticipatory bail, trial strategy, and appellate work with meticulous preparation.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.57L9.002 5.25H5.25a.75.75 0 000 1.5h3.525l-.285 1.71H5.25a.75.75 0 000 1.5h3l-.75 4.5H4.5a.75.75 0 000 1.5h2.7l-.33 1.98a1.875 1.875 0 001.845 2.19h6.57a1.875 1.875 0 001.845-1.56l1.74-10.14h1.38a.75.75 0 000-1.5h-1.125l.21-1.226A1.875 1.875 0 0017.7 3.75h-3.675l.226-1.33a1.875 1.875 0 00-1.845-2.17z" clipRule="evenodd"/></svg>
  ) },
  { title: 'Civil Law', desc: 'Injunctions, suits for recovery, specific performance, and execution proceedings.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.25 2.25a.75.75 0 00-1.5 0v1.5H5.25a2.25 2.25 0 00-2.25 2.25V9a.75.75 0 001.5 0V6a.75.75 0 01.75-.75h4.5V9a.75.75 0 001.5 0V5.25h4.5A.75.75 0 0116.5 6v3a.75.75 0 001.5 0V6A2.25 2.25 0 0015.75 3.75h-4.5V2.25z"/><path d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 01.75.75v6.75A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25V12z"/></svg>
  ) },
  { title: 'Corporate Law', desc: 'Contracts, compliance, governance, shareholder agreements, and commercial disputes.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3 4.5A1.5 1.5 0 014.5 3h3A1.5 1.5 0 019 4.5V21a.75.75 0 01-1.115.66L6 20.25l-1.885 1.41A.75.75 0 013 21V4.5zM10.5 5.25A2.25 2.25 0 0112.75 3h6.5A2.25 2.25 0 0121.5 5.25V21a.75.75 0 01-1.115.66L18 20.25l-2.385 1.41A.75.75 0 0114.5 21V5.25z"/></svg>
  ) },
  { title: 'Family Law', desc: 'Matrimonial disputes, maintenance, custody, adoption, and mediation-focused solutions.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M11.48 3.5a4.48 4.48 0 00-4.48 4.48v.03a7.5 7.5 0 00-4.5 6.94v2.27a1.5 1.5 0 001.5 1.5H9v-3.75a3 3 0 013-3h.75a3 3 0 013 3V18h5.25a1.5 1.5 0 001.5-1.5v-2.27a7.5 7.5 0 00-4.5-6.94v-.03a4.48 4.48 0 00-8.52 0z" clipRule="evenodd"/></svg>
  ) },
  { title: 'Property Law', desc: 'Title due diligence, conveyancing, partition, and real estate disputes.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 3.75a.75.75 0 01.53.22l7.5 7.5a.75.75 0 11-1.06 1.06L18 11.06V19.5a.75.75 0 01-.75.75H6.75A.75.75 0 016 19.5v-8.44L5.03 12.53a.75.75 0 11-1.06-1.06l7.5-7.5a.75.75 0 01.53-.22z"/></svg>
  ) },
  { title: 'Legal Consultation', desc: 'Risk assessment, pre-litigation strategy, and contract review with practical recommendations.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M4.5 4.5A2.25 2.25 0 016.75 2.25h10.5A2.25 2.25 0 0119.5 4.5v8.25a2.25 2.25 0 01-2.25 2.25H8.89l-3.42 2.565A.75.75 0 013 16.95V4.5z" clipRule="evenodd"/></svg>
  ) },
]

export default function PracticeAreas() {
  return (
    <section className="section">
      <Helmet>
        <title>Practice Areas | Parth Kumar</title>
        <meta name="description" content="Criminal, Civil, Corporate, Family, Property law and tailored legal consultation services." />
      </Helmet>
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Practice Areas"
          description="Focused representation and practical advice across core areas of law. If you’re unsure where your matter fits, share a brief summary and I’ll guide you to the right approach."
          right={<Link to="/contact" className="btn btn-primary">Request Consultation</Link>}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, idx) => (
            <Reveal key={a.title} delay={idx * 0.02}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card p-6 group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-primary-50 text-primary-700 grid place-items-center group-hover:bg-primary-100 transition">
                    {a.icon}
                  </div>
                  <div className="font-semibold text-lg">{a.title}</div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{a.desc}</p>
                <div className="mt-4 text-xs text-slate-500">Approach: assessment → strategy → action → updates.</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
