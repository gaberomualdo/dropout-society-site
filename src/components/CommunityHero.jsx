import Image from 'next/future/image'

import Dropouts from '@/images/dropouts.jpeg'
import { Container } from '@/components/Container'
import { colors, getFundURL, hoverColors } from 'lib/utils'

export function CommunityHero() {
  const iconClassname = 'w-9 h-9'
  return (
    <div className="relative border-b pb-20 pt-10" id="about">
      <Container className="relative">
        <div className="flex w-full flex-col rounded-xl border py-10 px-10 shadow-lg">
          <h1 className="mb-4 font-display text-4xl font-medium tracking-tight text-gray-800">
            A few more things you can do:
          </h1>
          <div className="relative grid grid-cols-1 gap-x-4 gap-y-4 xl:max-w-none xl:grid-cols-2">
            {[
              {
                title: 'Refer a friend',
                description: 'Most of our new members come from referrals.',
                url: '/refer',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={iconClassname}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                ),
              },
              {
                title: 'Join the Slack',
                description: 'Our Slack group is the core of our community.',
                url: 'https://i.dropout.club/',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={iconClassname}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                ),
              },
              {
                title: 'Apply for funding',
                description:
                  'Pitch DropoutFund for your first check of funding.',
                url: `${getFundURL()}#pitch`,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={iconClassname}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                ),
              },
              {
                title: 'Update your profile',
                description:
                  'Make sure your profile is updated for the community.',
                url: '/profile/me',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={iconClassname}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
            ].map((elm, i) => (
              <a
                key={i}
                href={elm.url}
                className={`flex cursor-pointer justify-between space-x-4 rounded-xl border px-5 py-3.5 transition-all hover:bg-gray-100`}
              >
                <div>
                  <p className="font-display text-2xl font-medium tracking-tighter text-gray-900 sm:text-2xl">
                    {elm.title}
                  </p>
                  <p className="text-md mt-0.5 tracking-tight text-gray-600">
                    {elm.description}
                  </p>
                </div>
                <div
                  className={`flex h-full flex-col items-center justify-center text-gray-700`}
                >
                  {elm.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
