import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Container from '../components/Container'
import Reveal from '../components/Reveal'

/* ─────────────────────────────────────────────────────────────
   Icons (Heroicons Solid)
───────────────────────────────────────────────────────────── */
const icons = {
  scale: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v12.009H15a.75.75 0 010 1.5H9a.75.75 0 010-1.5h2.25V6.241H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75z" clipRule="evenodd"/>
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516 11.209 11.209 0 01-7.877-3.08z" clipRule="evenodd"/>
    </svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"/>
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
    </svg>
  ),
  briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3V6h1.5a2.25 2.25 0 012.25 2.25v9.75a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 01.75 18V8.25A2.25 2.25 0 013 6h1.5v-.75zm3-1.5a1.5 1.5 0 00-1.5 1.5V6h6v-.75a1.5 1.5 0 00-1.5-1.5h-3z" clipRule="evenodd"/>
    </svg>
  ),
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
    </svg>
  ),
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V7.875L14.625 1.5h-9zm4.125 9a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm-1.5 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" clipRule="evenodd"/>
    </svg>
  ),
  chat: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd"/>
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"/>
    </svg>
  ),
  arrowRight: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd"/>
    </svg>
  ),
  check: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"/>
    </svg>
  ),
}

/* ─────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────── */
const stats = [
  { value: '25+', label: 'Years of Experience', icon: icons.clock },
  { value: '500+', label: 'Cases Handled', icon: icons.briefcase },
  { value: '300+', label: 'Successful Verdicts', icon: icons.shield },
  { value: '100%', label: 'Client Commitment', icon: icons.users },
]

const practiceAreas = [
  { title: 'Criminal Defence', desc: 'Bail applications, anticipatory bail, trial representation, and appeals in criminal matters.', icon: icons.shield, link: '/practice-areas' },
  { title: 'Civil Litigation', desc: 'Recovery suits, injunctions, specific performance, and execution proceedings.', icon: icons.scale, link: '/practice-areas' },
  { title: 'Family & Matrimonial', desc: 'Divorce, maintenance, child custody, domestic violence, and mediation.', icon: icons.users, link: '/practice-areas' },
  { title: 'Property & Real Estate', desc: 'Title verification, sale deeds, partition suits, and property disputes.', icon: icons.home, link: '/practice-areas' },
  { title: 'Documentation', desc: 'Drafting agreements, affidavits, wills, power of attorney, and legal notices.', icon: icons.document, link: '/practice-areas' },
  { title: 'Legal Consultation', desc: 'Pre-litigation advice, case assessment, and strategic legal planning.', icon: icons.chat, link: '/contact' },
]

const whyChoose = [
  { title: 'Personalized Attention', desc: 'Every client receives dedicated focus. Your case is not just a file number.' },
  { title: 'Transparent Communication', desc: 'Regular updates, clear explanations of legal processes, and no hidden surprises.' },
  { title: 'Result-Oriented Approach', desc: 'Strategic planning focused on achieving the best possible outcome for your situation.' },
  { title: 'Affordable & Ethical', desc: 'Fair fee structure with complete transparency. Ethics over expedience, always.' },
  { title: 'Local Expertise', desc: 'Deep understanding of local courts, procedures, and the legal landscape of North Bihar.' },
  { title: 'Timely Response', desc: 'Quick turnaround on queries and court matters. Respect for your time and urgency.' },
]

const testimonials = [
  { name: 'Rajesh Verma', role: 'Business Owner, Muzaffarpur', text: 'Adv. Parth Kumar handled my property dispute with exceptional professionalism. His knowledge of local laws and dedication to my case resulted in a favorable outcome.', rating: 5 },
  { name: 'Sunita Devi', role: 'Homemaker', text: 'During my family matter, he provided compassionate guidance while being firm in court. I felt supported throughout the entire process.', rating: 5 },
  { name: 'Mohammad Imran', role: 'Contractor', text: 'Professional, punctual, and prepared. His bail application strategy was excellent and he kept me informed at every step.', rating: 5 },
]

const courts = [
  'District & Sessions Court, Muzaffarpur',
  'Civil Court, Muzaffarpur',
  'Family Court, Muzaffarpur',
  'JMFC Courts, Muzaffarpur',
  'High Court of Patna',
  'Various Tribunals & Forums',
]

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Parth Kumar | Advocate in Muzaffarpur, Bihar | Criminal, Civil, Family Law</title>
        <meta name="description" content="Advocate Parth Kumar offers expert legal services in Muzaffarpur, Bihar. Specializing in criminal defence, civil litigation, family law, property matters, and legal documentation. 25+ years experience. Call +91 88734 27256." />
        <meta name="keywords" content="advocate Muzaffarpur, lawyer Bihar, criminal lawyer Muzaffarpur, civil lawyer, family court lawyer, property lawyer, Parth Kumar advocate" />
      </Helmet>

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[78vh] sm:min-h-[82vh] flex items-center overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0 -z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50" />
          <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] [background-size:26px_26px]" aria-hidden="true" />
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_75%)] bg-gradient-to-b from-transparent via-white/0 to-white" aria-hidden="true" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left: Content */}
            <Reveal>
              <div className="text-slate-900">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm mb-6 border border-slate-200 shadow-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for Consultation
                </div>
                
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
                  Trusted Legal <span className="text-accent-700">Representation</span>
                  <span className="block">in Muzaffarpur</span>
                </h1>
                
                <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Advocate <strong className="text-slate-900">Parth Kumar</strong> provides comprehensive legal services with a commitment to justice, integrity, and client success. Serving Muzaffarpur, Bihar and surrounding districts with dedication for over 25 years.
                </p>

                <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-900 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-primary-900/20 w-full sm:w-auto"
                  >
                    Schedule Consultation
                    {icons.arrowRight}
                  </Link>
                  <a 
                    href="tel:+918873427256" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg transition-all border border-slate-200 w-full sm:w-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                    </svg>
                    +91 88734 27256
                  </a>
                </div>

                {/* Quick info badges */}
                <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    {icons.check}
                    <span>Bar Council Registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {icons.check}
                    <span>High Court Practice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {icons.check}
                    <span>25+ Years Experience</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Profile Card */}
            <Reveal delay={0.1}>
              <div className="relative lg:justify-self-end">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[16/11] sm:aspect-[4/3] relative">
                    <img
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop"
                      alt="Advocate Parth Kumar"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                      <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-2 sm:px-4 sm:py-2 ring-1 ring-white/15 text-white">
                        <span className="h-8 w-8 rounded-full bg-white/15 grid place-items-center font-semibold">PK</span>
                        <div className="leading-tight">
                          <div className="text-sm uppercase tracking-[0.18em] text-white/80">Advocate</div>
                          <div className="text-lg font-semibold">Parth Kumar</div>
                        </div>
                      </div>
                      <div className="mt-0 sm:mt-3 grid gap-2 sm:gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/15 px-3 py-2 sm:px-4 sm:py-3 text-white">
                          <div className="text-xs text-white/80">Experience</div>
                          <div className="text-base sm:text-lg font-semibold">25+ Years</div>
                        </div>
                        <div className="rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/15 px-3 py-2 sm:px-4 sm:py-3 text-white">
                          <div className="text-xs text-white/80">Practice Since</div>
                          <div className="text-base sm:text-lg font-semibold">2000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="sm:hidden mb-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2">
                        <span className="h-8 w-8 rounded-full bg-white/15 grid place-items-center font-semibold">PK</span>
                        <div className="leading-tight">
                          <div className="text-xs uppercase tracking-[0.18em] text-white/80">Advocate</div>
                          <div className="text-base font-semibold">Parth Kumar</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-slate-500">Location</div>
                        <div className="font-medium text-slate-900">Maripur, Muzaffarpur</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Languages</div>
                        <div className="font-medium text-slate-900">Hindi, English</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Practice Since</div>
                        <div className="font-medium text-slate-900">2000</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Consultations</div>
                        <div className="font-medium text-slate-900">In-Person & Online</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <a 
                        href={`https://wa.me/918873427256?text=${encodeURIComponent('Hello, I would like to request a legal consultation.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        </svg>
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.05}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-soft border border-slate-100 dark:border-slate-700"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRACTICE AREAS SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="section">
        <Container>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-2">Legal Services</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Practice Areas</h2>
              <p className="mt-4 text-lg text-slate-600">
                Comprehensive legal services tailored to your needs. From courtroom litigation to legal documentation, we provide end-to-end support.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.03}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-xl p-6 shadow-soft border border-slate-100 hover:border-primary-200 transition-all h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 text-primary-700 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                  <Link 
                    to={area.link} 
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-800"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd"/>
                    </svg>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/practice-areas" className="btn btn-primary">
              View All Practice Areas
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY CHOOSE US SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] [background-size:26px_26px]" aria-hidden="true" />
        </div>
        <Container className="relative">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-sm font-semibold text-accent-700 uppercase tracking-wider mb-2">Why Choose</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What Sets Our Practice Apart</h2>
              <p className="mt-4 text-lg text-slate-600">
                When you choose Advocate Parth Kumar, you get more than legal representation—you get a dedicated partner committed to your success.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.03}>
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-soft hover:border-primary-200 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary-700">{icons.check}</div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COURTS SERVED SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-2">Jurisdiction</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Courts & Forums</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Regular appearances across multiple courts and tribunals in Muzaffarpur and Bihar, ensuring comprehensive representation for your legal needs.
                </p>
                <div className="mt-8 grid gap-3">
                  {courts.map((court, idx) => (
                    <motion.div 
                      key={court}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                      <span className="text-slate-700">{court}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Areas Served</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {['Muzaffarpur', 'Sitamarhi', 'Vaishali', 'Samastipur', 'East Champaran', 'Darbhanga', 'Madhubani', 'Patna'].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-slate-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary-700">
                        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd"/>
                      </svg>
                      {area}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    <strong>Note:</strong> Available for matters across North Bihar. For cases outside regular jurisdiction, please contact for availability.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="section bg-slate-50">
        <Container>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-2">Client Testimonials</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-slate-600">
                Our clients' success is our greatest achievement. Here's what they have to say about working with us.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 0.05}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-6 shadow-soft border border-slate-100 h-full flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400">{icons.star}</span>
                    ))}
                  </div>
                  <p className="text-slate-600 flex-grow italic">"{t.text}"</p>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/testimonials" className="btn btn-outline">
              View All Testimonials
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="section">
        <Container>
          <Reveal>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30" />
              <div className="relative max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Discuss Your Legal Matter?</h2>
                <p className="mt-4 text-lg text-slate-200">
                  Get expert legal advice tailored to your situation. Schedule a consultation today and take the first step towards resolution.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Book Consultation
                    {icons.arrowRight}
                  </Link>
                  <a 
                    href="tel:+918873427256" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
                  >
                    Call Now: +91 88734 27256
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
