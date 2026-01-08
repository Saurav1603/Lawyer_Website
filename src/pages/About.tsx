import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Reveal from '../components/Reveal'

/* ─────────────────────────────────────────────────────────────
   Icons
───────────────────────────────────────────────────────────── */
const icons = {
  academic: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"/>
      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"/>
      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"/>
    </svg>
  ),
  briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3V6h1.5a2.25 2.25 0 012.25 2.25v9.75a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 01.75 18V8.25A2.25 2.25 0 013 6h1.5v-.75zm3-1.5a1.5 1.5 0 00-1.5 1.5V6h6v-.75a1.5 1.5 0 00-1.5-1.5h-3z" clipRule="evenodd"/>
    </svg>
  ),
  scale: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v12.009H15a.75.75 0 010 1.5H9a.75.75 0 010-1.5h2.25V6.241H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75z" clipRule="evenodd"/>
    </svg>
  ),
  building: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15a.75.75 0 000-1.5h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd"/>
    </svg>
  ),
  check: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"/>
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"/>
    </svg>
  ),
}

/* ─────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────── */
const timeline = [
  { year: '2000', title: 'Enrolled with Bar Council', desc: 'Registered as an Advocate with the Bar Council of Bihar, beginning professional practice in Muzaffarpur.' },
  { year: '2005', title: 'Civil Court Practice', desc: 'Expanded to handle complex civil matters including property disputes, recovery suits, and injunction cases.' },
  { year: '2010', title: 'Criminal Defence Excellence', desc: 'Established reputation in criminal defence, bail applications, and trial representation across Bihar.' },
  { year: '2015', title: 'High Court Appearances', desc: 'Started appearing before the Patna High Court for appeals and writ petitions.' },
  { year: '2020', title: 'Senior Practice', desc: 'Over two decades of experience with 1000+ cases handled and specialized expertise across multiple domains.' },
  { year: 'Present', title: 'Full-Service Practice', desc: 'Comprehensive legal services covering criminal, civil, family, property, and documentation matters with 25+ years experience.' },
]

const credentials = [
  { title: 'Bar Council Registration', value: 'State Bar Council of Bihar', desc: 'Licensed to practice in all courts in Bihar' },
  { title: 'High Court Practice', value: 'Patna High Court', desc: 'Regular appearances for appeals and writ petitions' },
  { title: 'Years in Practice', value: '25+ Years', desc: 'Since 2000' },
  { title: 'Languages', value: 'Hindi & English', desc: 'Bilingual practice' },
]

const coreValues = [
  { title: 'Integrity First', desc: 'Upholding the highest ethical standards in every case. No shortcuts, no compromises.' },
  { title: 'Client-Centric Approach', desc: 'Your interests always come first. Clear communication and regular updates at every stage.' },
  { title: 'Diligent Preparation', desc: 'Thorough research and meticulous preparation form the foundation of our legal strategy.' },
  { title: 'Accessible Justice', desc: 'Quality legal representation should be accessible. Fair and transparent fee structure.' },
  { title: 'Result Orientation', desc: 'Strategic planning focused on achieving the best possible outcome for your situation.' },
  { title: 'Continuous Learning', desc: 'Staying updated with latest legal developments, judgments, and best practices.' },
]

const associations = [
  'Bar Council of Bihar',
  'Muzaffarpur Bar Association',
  'Bihar State Bar Council',
  'High Court Bar Association, Patna',
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Advocate Parth Kumar | Lawyer in Muzaffarpur, Bihar</title>
        <meta name="description" content="Learn about Advocate Parth Kumar's qualifications, experience, and approach to legal practice. 25+ years of experience in criminal, civil, and family law in Muzaffarpur, Bihar." />
      </Helmet>

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50 text-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] [background-size:26px_26px]" aria-hidden="true" />
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="text-sm font-semibold text-accent-700 uppercase tracking-wider mb-2">About</div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.15] tracking-tight">
                Advocate Parth Kumar
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                A dedicated legal professional with over 25 years of experience serving clients in Muzaffarpur and across North Bihar. My practice is built on a foundation of integrity, thorough preparation, and unwavering commitment to my clients' interests.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-900 text-white font-semibold rounded-lg transition-all"
                >
                  Schedule Consultation
                </Link>
                <a 
                  href="tel:+918873427256" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg transition-all border border-slate-200"
                >
                  +91 88734 27256
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative max-w-md mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-200"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop"
                      alt="Advocate Parth Kumar"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 ring-1 ring-white/15">
                        <span className="h-8 w-8 rounded-full bg-white/15 grid place-items-center font-semibold">PK</span>
                        <div className="leading-tight">
                          <div className="text-sm uppercase tracking-[0.18em] text-white/80">Advocate</div>
                          <div className="text-lg font-semibold">Parth Kumar</div>
                        </div>
                      </div>
                      <div className="mt-3 rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/15 px-4 py-3">
                        <div className="text-xs text-white/80">Experience</div>
                        <div className="text-lg font-semibold">25+ Years</div>
                        <div className="text-sm text-white/80">Courtroom & advisory experience across North Bihar</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CREDENTIALS SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, idx) => (
              <Reveal key={cred.title} delay={idx * 0.05}>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-slate-100 h-full">
                  <div className="text-sm font-medium text-primary-700 mb-1">{cred.title}</div>
                  <div className="text-xl font-bold text-slate-900">{cred.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{cred.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROFILE SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">Profile</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Professional Background</h2>
                
                <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    I am a practicing advocate based in Maripur, Muzaffarpur, with a comprehensive practice spanning criminal defence, civil litigation, family law, property matters, and legal documentation services.
                  </p>
                  <p>
                    After completing my legal education, I enrolled with the Bar Council of Bihar in 2000 and began my practice at the District Courts in Muzaffarpur. Over the years, I have expanded my practice to include appearances at the Patna High Court for appeals and writ petitions.
                  </p>
                  <p>
                    My approach to legal practice is rooted in thorough preparation, clear communication, and a deep commitment to achieving the best possible outcomes for my clients. I believe that every client deserves personalized attention and a strategy tailored to their specific circumstances.
                  </p>
                  <p>
                    Whether you're facing a criminal charge, navigating a family dispute, dealing with property issues, or need legal documentation, I provide comprehensive support from initial consultation through case resolution.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Professional Associations</h3>
                  <div className="flex flex-wrap gap-3">
                    {associations.map((assoc) => (
                      <span key={assoc} className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-700">
                        <span className="text-primary-700">{icons.check}</span>
                        {assoc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Education & Qualifications</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700">
                      {icons.academic}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">LL.B. (Bachelor of Laws)</div>
                      <div className="text-sm text-slate-500">Completed legal education with focus on litigation</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700">
                      {icons.briefcase}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Bar Council Enrollment (2000)</div>
                      <div className="text-sm text-slate-500">Registered with Bar Council of Bihar</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700">
                      {icons.building}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">High Court Practice</div>
                      <div className="text-sm text-slate-500">Regular appearances at Patna High Court</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700">
                      {icons.scale}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Multi-Domain Expertise</div>
                      <div className="text-sm text-slate-500">Criminal, Civil, Family, Property & Documentation</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="text-amber-500">{icons.star}</span>
                    Committed to continuous legal education and staying updated with latest judgments and legal developments.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CORE VALUES SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] [background-size:26px_26px]" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-sm font-semibold text-accent-700 uppercase tracking-wider mb-2">Our Philosophy</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Core Values & Approach</h2>
              <p className="mt-4 text-lg text-slate-600">
                The principles that guide every case, every client interaction, and every legal strategy.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.03}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-soft hover:border-primary-200 transition-colors h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary-700">{icons.check}</span>
                    <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{value.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TIMELINE SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="section">
        <Container>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-2">Journey</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Professional Timeline</h2>
              <p className="mt-4 text-lg text-slate-600">
                Over 25 years of dedicated legal practice and growing expertise.
              </p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <Reveal key={item.year} delay={idx * 0.05}>
                <div className="relative pl-8 pb-8 border-l-2 border-primary-200 last:pb-0">
                  <div className="absolute left-0 top-0 w-4 h-4 -ml-2 bg-primary-600 rounded-full" />
                  <div className="bg-white rounded-xl p-6 shadow-soft border border-slate-100 ml-4">
                    <div className="inline-flex items-center px-3 py-1 bg-primary-50 rounded-full text-sm font-semibold text-primary-700 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="section bg-slate-50">
        <Container>
          <Reveal>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's Discuss Your Case</h2>
              <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
                Every legal matter deserves careful attention and a tailored strategy. Schedule a consultation to discuss your situation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Book Consultation
                </Link>
                <Link 
                  to="/practice-areas" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
                >
                  View Practice Areas
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
