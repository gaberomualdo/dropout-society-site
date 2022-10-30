import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

export function LinkButton({ active, href, className, ...props }) {
  className = clsx(
    'whitespace-pre inline-flex justify-center ml-2 py-1.5 px-3.5 rounded-md text-base uppercase font-medium tracking-wide text-gray-500 focus:outline-none hover:text-gray-700',
    active ? 'bg-gray-100 text-gray-700' : '',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}

const nav = {
  About: '#about',
  Team: '#team',
  Blog: '#blog',
  'Pitch To Us': '#pitch',
}

export function Header() {
  const [activeLabel, setActiveLabel] = useState(Object.keys(nav)[0])
  return (
    <header
      className="relative sticky top-0 z-50 border-b py-6"
      style={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="lg:grow lg:basis-0">
          <Logo className="h-10 w-auto text-slate-900 opacity-90 sm:h-12" />
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          {Object.keys(nav).map((label) => (
            <LinkButton
              href={nav[label]}
              onClick={() => setActiveLabel(label)}
              active={activeLabel === label}
            >
              {label}
            </LinkButton>
          ))}
        </div>
      </Container>
    </header>
  )
}
