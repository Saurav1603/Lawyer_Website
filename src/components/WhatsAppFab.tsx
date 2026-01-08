import { site } from '../config/site'

function buildWhatsAppHref() {
  if (!site.whatsappE164) return null
  const number = site.whatsappE164.replace(/\D/g, '')
  const text = site.whatsappMessage ? encodeURIComponent(site.whatsappMessage) : ''
  return `https://wa.me/${number}${text ? `?text=${text}` : ''}`
}

export default function WhatsAppFab() {
  const href = buildWhatsAppHref()
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 bottom-5 right-5 md:bottom-7 md:right-7 group"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="sr-only">Chat on WhatsApp</span>
      <span className="grid place-items-center h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg bg-emerald-600 text-white ring-1 ring-emerald-600/20 transition-transform group-hover:-translate-y-0.5">
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true">
          <path d="M19.11 17.17c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.82c.14.18 1.93 2.95 4.68 4.13.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.13.56 4.21 1.62 6.04L4 29l8.14-1.58a12 12 0 0 0 3.9.64C22.68 28.06 28 22.68 28 16.04 28 9.4 22.68 3 16.04 3zm0 22.02c-1.25 0-2.47-.22-3.62-.66l-.41-.15-4.83.94.95-4.7-.18-.43a9.98 9.98 0 0 1-1.4-5.02c0-5.52 4.49-10.01 10.01-10.01 5.52 0 10.01 4.49 10.01 10.01 0 5.52-4.49 10.02-10.01 10.02z" />
        </svg>
      </span>
    </a>
  )
}
