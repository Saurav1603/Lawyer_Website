import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

type Props = {
  storageKey?: string
}

function usePortalRoot() {
  return useMemo(() => {
    const el = document.createElement('div')
    el.setAttribute('data-portal', 'disclaimer-gate')
    return el
  }, [])
}

export default function DisclaimerGate({ storageKey = 'lawyerSite:disclaimerAccepted:v1' }: Props) {
  const [open, setOpen] = useState(false)
  const portalRoot = usePortalRoot()

  useEffect(() => {
    const accepted = localStorage.getItem(storageKey) === 'true'
    if (!accepted) setOpen(true)
  }, [storageKey])

  useEffect(() => {
    if (!open) return
    document.body.appendChild(portalRoot)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Do nothing: for compliance-style confirmations we keep it explicit.
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      portalRoot.remove()
    }
  }, [open, portalRoot])

  if (!open) return null

  const accept = () => {
    localStorage.setItem(storageKey, 'true')
    setOpen(false)
  }

  const declineHref = 'https://www.google.com'

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 h-full grid place-items-center py-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
          className="card w-full p-6 sm:p-8 max-h-[calc(100dvh-3rem)] overflow-auto overscroll-contain"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-accent-700">Disclaimer & Confirmation</div>
              <h2 id="disclaimer-title" className="mt-2 text-2xl sm:text-3xl font-heading font-bold">Please read before continuing</h2>
            </div>
            <div className="text-xs text-slate-600">India</div>
          </div>

          <div className="mt-5 text-sm text-slate-700 leading-relaxed space-y-3">
            <p>
              This website is provided for general information. It is not legal advice and should not be treated as a substitute for professional counsel.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>No advertisement or solicitation is intended through this website.</li>
              <li>Viewing this website or contacting us does not create a lawyer–client relationship.</li>
              <li>Any information you share may not be confidential until an engagement is confirmed in writing.</li>
              <li>Results depend on facts and applicable law; past outcomes do not guarantee future results.</li>
            </ul>
            <p className="text-xs text-slate-600">
              Read our full <Link className="nav-link" to="/disclaimer">Disclaimer</Link> and <Link className="nav-link" to="/privacy">Privacy Policy</Link>.
            </p>
          </div>

          <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3 sticky bottom-0 bg-white/95 backdrop-blur border-t border-slate-200/70 pt-4">
            <a className="btn btn-outline text-center" href={declineHref} rel="nofollow">I disagree</a>
            <button className="btn btn-primary" onClick={accept} autoFocus>
              I agree
            </button>
          </div>
        </div>
      </div>
    </div>,
    portalRoot,
  )
}
