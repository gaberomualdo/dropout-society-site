import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, labelFor, className, small, ...props }) {
  className = clsx(
    'cursor-pointer inline-flex justify-center rounded-2xl bg-gray-700 px-4 text-base font-semibold text-white hover:bg-gray-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 active:text-white/70',
    small ? 'py-3' : 'py-4',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : labelFor ? (
    <label for={labelFor} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
