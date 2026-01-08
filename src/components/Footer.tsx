import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-12 border-t border-slate-200/60">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block h-8 w-8 rounded-full bg-primary-500 text-white grid place-items-center font-bold">PK</span>
            <div>
              <div className="font-heading font-bold">Parth Kumar</div>
              <div className="text-xs text-slate-500">Advocate (Maripur, Muzaffarpur)</div>
            </div>
          </div>
          <p className="text-sm text-slate-600 max-w-sm">Practical legal support for Muzaffarpur and surrounding districts across civil, family, property, documentation, and criminal defence matters—clear guidance at every step.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick links</div>
          <nav aria-label="Quick Links" className="grid grid-cols-2 gap-3 text-sm">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/practice-areas">Practice Areas</Link>
            <Link className="nav-link" to="/experience">Experience</Link>
            <Link className="nav-link" to="/testimonials">Testimonials</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </nav>
        </div>
        <div>
          <div className="font-semibold mb-3">Office</div>
          <div className="text-sm text-slate-600 space-y-2">
            <div><strong>Address:</strong> Maripur, Muzaffarpur, Bihar (India)</div>
            <div><strong>Call:</strong> <a className="nav-link" href="tel:+918873427256">+91 88734 27256</a></div>
            <div><strong>Email:</strong> <a className="nav-link" href="mailto:advparth1974@gmail.com">advparth1974@gmail.com</a></div>
          </div>
          <div className="font-semibold mt-5 mb-3">Connect</div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-link" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8V24h-4V8z"/></svg>
            </a>
            <a href="mailto:advparth1974@gmail.com" aria-label="Email" className="nav-link" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.31 0L2.82 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/60 py-6">
        <div className="container text-sm text-slate-600 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>© {year} Parth Kumar. All rights reserved.</div>
          <div className="max-w-3xl text-xs leading-relaxed">
            <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute legal advice or a solicitation. No lawyer–client relationship is created by viewing this website or contacting through it. Outcomes depend on facts and applicable law; past results do not guarantee future results.
          </div>
        </div>
      </div>
    </footer>
  )
}
