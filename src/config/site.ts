export type SiteConfig = {
  firmName: string
  city: string
  state: string
  country: string
  languages: string[]
  phoneE164: string
  phoneDisplay: string
  email: string
  whatsappE164?: string
  whatsappMessage?: string
  locality?: string
}

export const site: SiteConfig = {
  firmName: 'Parth Kumar – Advocate',
  city: 'Muzaffarpur',
  state: 'Bihar',
  country: 'India',
  languages: ['Hindi', 'English'],
  phoneE164: '+918873427256',
  phoneDisplay: '+91 88734 27256',
  email: 'advparth1974@gmail.com',
  whatsappE164: '+918873427256',
  whatsappMessage: 'Hello, I would like to request a legal consultation in Muzaffarpur.',
  /** Office locality for display in address blocks */
  locality: 'Maripur, Muzaffarpur',
}
