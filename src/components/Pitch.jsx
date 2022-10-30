import { Container } from '@/components/Container'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export function Pitch() {
  return (
    <section id="pitch" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <section className="relative overflow-hidden rounded-xl border bg-white shadow-lg">
          <div>
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden bg-gradient-to-b from-gray-700 to-gray-800 py-10 px-6 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="pointer-events-none absolute inset-0 sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Reach out to us here &rarr;
                  </h3>
                  <p className="mt-6 max-w-3xl text-base text-gray-50">
                    We read every submission, and will get back to you if we're
                    interested in discussing further.
                  </p>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="mb-8 font-display text-3xl font-medium text-gray-800">
                    Pitch To Us
                  </h3>
                  <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="university"
                          className="block text-sm font-medium text-gray-900"
                        >
                          School / University
                        </label>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="university"
                          id="university"
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Company Name (and link, if available)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Brief Description
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-gray-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          const props = {}
                          for (const val of [
                            'first-name',
                            'last-name',
                            'email',
                            'university',
                            'subject',
                            'message',
                          ]) {
                            props[val] = document.getElementById(val).value
                          }
                          amplitude.getInstance().logEvent('PITCH', props)
                          alert("Thanks for pitching! We'll be in touch soon.")
                        }}
                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 sm:w-auto"
                      >
                        Submit &nbsp;&rarr;
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}
