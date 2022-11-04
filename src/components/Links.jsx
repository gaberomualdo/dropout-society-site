import Image from 'next/future/image'

import { Container } from '@/components/Container'
import { colors, getFundURL, getTimeOfDay, hoverColors } from 'lib/utils'

export function Links({ signedIn = false }) {
  const iconClassname = 'w-16 h-16'
  const links = {
    publicCommunity: {
      title: 'Community',
      description:
        'Meet the people and companies that make up the dropout club community.',
      url: '/community',
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
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    privateCommunity: {
      title: 'Explore',
      description:
        'Meet the people and companies that make up the dropout club community.',
      url: '/#explore',
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
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    fund: {
      title: 'Dropout Fund',
      description:
        'DropoutFund is an early-stage venture capital fund that invests in dropout founders.',
      url: getFundURL(),
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
    slack: {
      title: 'Slack Community',
      description: 'Our Slack group is the core of our community.',
      url: 'https://join.slack.com/t/dropoutclub/shared_invite/zt-1ivni8ais-NOy77mUvawCdK3a__J05LQ',
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
    refer: {
      title: 'Refer a friend',
      description: 'Most of our new members come from referrals.',
      url: 'https://join.slack.com/t/dropoutclub/shared_invite/zt-1ivni8ais-NOy77mUvawCdK3a__J05LQ',
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
    blog: {
      title: 'Blog',
      description:
        'Read the latest from DropoutClub by signing up to read our blog today.',
      url: '/#blog',
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
            d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
          />
        </svg>
      ),
    },
    profile: {
      title: 'Your Profile',
      description: 'Check out your profile on the community.',
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
    apply: {
      title: 'Apply',
      url: '/apply',
      description:
        'Ready to join the DropoutClub community? Apply in only a few minutes now.',
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
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
      ),
    },
  }

  return (
    <section id="links" className={signedIn ? '' : 'border-t'}>
      <Container>
        <div
          className={`relative overflow-hidden md:rounded-5xl ${
            signedIn ? 'pt-16 pb-8' : 'py-24'
          }`}
        >
          {signedIn && (
            <h1 className="mb-6 font-display text-4xl font-medium tracking-tight">
              Good {getTimeOfDay()}!
            </h1>
          )}
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-5 gap-y-5 xl:max-w-none xl:grid-cols-2">
            {(signedIn
              ? [
                  links.slack,
                  links.privateCommunity,
                  links.fund,
                  links.blog,
                  links.refer,
                  links.profile,
                ]
              : [links.publicCommunity, links.fund, links.blog, links.apply]
            ).map((elm, i) => (
              <a
                href={elm.url}
                className={`flex cursor-pointer justify-between space-x-6 rounded-xl bg-gray-100 py-6 px-7 transition-all ${hoverColors[i]}`}
              >
                <div>
                  <p className="font-display text-3xl font-medium tracking-tighter text-gray-900 sm:text-4xl">
                    {elm.title}
                  </p>
                  <p className="mt-2.5 text-xl tracking-tight text-gray-600">
                    {elm.description}
                  </p>
                </div>
                <div
                  className={`flex h-full flex-col items-center justify-center ${colors[i]}`}
                >
                  {elm.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
