import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((o) => !o)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'nav-link-active' : ''}`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Homepage">
          <span className="inline-block h-8 w-8 rounded-full bg-primary-500 text-white grid place-items-center font-bold">PK</span>
          <div className="leading-tight">
            <div className="font-heading font-bold text-slate-900">Parth Kumar</div>
            <div className="text-xs text-slate-500">Advocate & Legal Consultant</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          <NavLink to="/" className={navLinkClass} onClick={close}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={close}>About</NavLink>
          <NavLink to="/practice-areas" className={navLinkClass} onClick={close}>Practice Areas</NavLink>
          <NavLink to="/experience" className={navLinkClass} onClick={close}>Experience</NavLink>
          <NavLink to="/testimonials" className={navLinkClass} onClick={close}>Testimonials</NavLink>
          <NavLink to="/contact" className="btn btn-primary" onClick={close}>Book Consultation</NavLink>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200" aria-label="Toggle menu" aria-expanded={open} onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            {open ? (
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-black/30"
              aria-label="Close menu"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="fixed top-[57px] left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="container py-4 flex flex-col gap-4">
                <NavLink to="/" className={navLinkClass} onClick={close}>Home</NavLink>
                <NavLink to="/about" className={navLinkClass} onClick={close}>About</NavLink>
                <NavLink to="/practice-areas" className={navLinkClass} onClick={close}>Practice Areas</NavLink>
                <NavLink to="/experience" className={navLinkClass} onClick={close}>Experience</NavLink>
                <NavLink to="/testimonials" className={navLinkClass} onClick={close}>Testimonials</NavLink>
                <NavLink to="/contact" className="btn btn-primary" onClick={close}>Book Consultation</NavLink>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
