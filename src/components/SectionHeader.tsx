import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  right?: ReactNode
}

export default function SectionHeader({ eyebrow, title, description, right }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-accent-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold leading-tight">{title}</h2>
        {description ? (
          <p className="mt-3 text-slate-600">{description}</p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  )
}
