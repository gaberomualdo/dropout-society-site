import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  return (
    <section id="blog" className="bg-gray-100">
      <Container>
        <div className="relative overflow-hidden py-24 md:rounded-5xl">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-gray-900 sm:text-5xl">
                Stay up to date <br />
                with our blog
              </p>
              <p className="mt-4 font-display text-lg tracking-tight text-gray-600">
                Get updates on all that happens in our community and be the
                first to get notified with updates.
              </p>
            </div>
            <form>
              <h3 className="mt-8 font-display text-lg font-semibold tracking-tight text-gray-900">
                Sign up to read the blog <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 mr-2 flex rounded-3xl bg-white py-2 pr-2.5 shadow-xl shadow-gray-900/5 focus-within:ring-2 focus-within:ring-gray-900">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  id="newsletter-email"
                />
                <Button
                  type="button"
                  onClick={async () => {
                    const email =
                      document.getElementById('newsletter-email').value
                    document.getElementById('newsletter-email').value = ''
                    await fetch('/api/event', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ email, type: 'newsletter' }),
                    })
                    alert('Added to newsletter!')
                  }}
                  small
                >
                  <span className="sr-only font-display sm:not-sr-only">
                    Sign up today
                  </span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
