import { Helmet } from 'react-helmet-async'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Badge from '../components/Badge'

const items = [
  {
    period: '2015 – Present',
    title: 'Senior Advocate, Independent Practice',
    details: 'Full-service legal practice covering criminal defence, civil litigation, family law, and High Court appearances across Bihar.'
  },
  {
    period: '2008 – 2015',
    title: 'Advocate, District Courts Muzaffarpur',
    details: 'Handled diverse civil and criminal matters; developed expertise in property disputes, recovery suits, and bail applications.'
  },
  {
    period: '2000 – 2008',
    title: 'Junior Advocate',
    details: 'Started practice after Bar Council enrollment; gained courtroom experience in trial work and legal documentation.'
  }
]

export default function Experience() {
  return (
    <section className="section">
      <Helmet>
        <title>Experience & Cases | Parth Kumar</title>
        <meta name="description" content="Timeline of legal experience, firms, notable matters, and courtroom exposure." />
      </Helmet>
      <Container>
        <SectionHeader
          eyebrow="Track record"
          title="Experience & Notable Matters"
          description="A snapshot of legal roles and representative matters. Specific client details are always kept confidential."
          right={
            <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
              <Badge>High Court</Badge>
              <Badge>District Courts</Badge>
              <Badge>Tribunals</Badge>
            </div>
          }
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200" aria-hidden="true" />
            <div className="space-y-6">
              {items.map((i, idx) => (
                <Reveal key={i.title} delay={idx * 0.03}>
                  <div className="relative pl-12">
                    <div className="absolute left-2 top-6 h-4 w-4 rounded-full bg-accent-600 ring-4 ring-white" aria-hidden="true" />
                    <div className="card p-6">
                      <div className="text-xs font-semibold tracking-wide text-slate-500">{i.period}</div>
                      <div className="mt-1 font-semibold text-lg text-slate-900">{i.title}</div>
                      <div className="mt-2 text-slate-600">{i.details}</div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Strategy</Badge>
                        <Badge>Drafting</Badge>
                        <Badge>Arguments</Badge>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.05}>
            <aside className="card p-6 h-fit">
              <div className="font-semibold text-slate-900">Representative work</div>
              <ul className="mt-3 text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Pre-litigation strategy and risk assessment</li>
                <li>Criminal defence and bail applications</li>
                <li>Family law and matrimonial matters</li>
                <li>Property disputes and documentation</li>
              </ul>
              <div className="mt-5 text-xs text-slate-500">
                Note: Details are generalized to protect client confidentiality.
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
