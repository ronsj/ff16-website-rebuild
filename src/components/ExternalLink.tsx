import { ReactNode } from 'react'

export type ExternalLinkProps = {
  href: string
  children: ReactNode
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
