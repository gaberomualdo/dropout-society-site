import { useEffect, useId, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import jose from '@/images/avatars/jose.jpg'
import shafqat from '@/images/avatars/shafqat.jpg'
import gabriel from '@/images/avatars/gabriel.jpg'
import andrew from '@/images/avatars/andrew.jpg'
import lucas from '@/images/avatars/lucas.jpg'

const team = [
  {
    name: 'Lucas Chu',
    roles: {
      fund: 'General Partner',
      founder: 'Founder of DAOHQ',
      director: 'Club Director',
      member: 'Since Sept 2022',
    },
    socials: {
      linkedin: 'https://www.linkedin.com/in/chulucas/',
      twitter: 'https://twitter.com/edchucation',
      email: 'mailto:lucas.chu2@gmail.com',
    },
    image: lucas,
  },
  {
    name: 'Andrew Wang',
    roles: {
      fund: 'General Partner',
      founder: 'Founder of The Ur',
      director: 'Club Director',
      member: 'Since Sept 2022',
    },
    socials: {
      linkedin: 'https://www.linkedin.com/in/andrew-chen-wang/',
      twitter: 'https://twitter.com/acwangpython',
      email: 'mailto:andrew@urth.earth',
    },
    image: andrew,
  },
  {
    name: 'Jose Betancourt',
    roles: {
      fund: 'General Partner',
      founder: 'Founder of Ontropy',
      director: 'Club Director',
      member: 'Since Sept 2022',
    },
    socials: {
      linkedin: 'https://www.linkedin.com/in/josebetancourt5/',
      twitter: 'https://twitter.com/josebetandcourt',
      email: 'mailto:jose.betancourt@yale.edu',
    },
    image: jose,
  },
  {
    name: 'Gabriel Romualdo',
    roles: {
      fund: 'General Partner',
      founder: 'Founder of Thirdbuy',
      director: 'Club Director',
      member: 'Since Sept 2022',
    },
    socials: {
      linkedin: 'https://www.linkedin.com/in/gabriel-romualdo/',
      twitter: 'https://twitter.com/gaberomualdo',
      email: 'mailto:gabriel@gabrielromualdo.com',
    },
    image: gabriel,
  },
  {
    name: 'Shafqat Huq',
    roles: {
      fund: 'Fund Director',
      founder: 'Founder of FestFriends',
      director: 'Club Director',
      member: 'Since Sept 2022',
    },
    socials: {
      linkedin: 'https://www.linkedin.com/in/sshuq/',
      twitter: 'https://twitter.com/shafqathuq',
      email: 'mailto:sshuq7@gmail.com',
    },
    image: shafqat,
  },
]

export function Team({ signedIn = false, fund = false }) {
  let id = useId()

  const roleClassnames = {
    fund: 'bg-gray-200 border-gray-400 text-gray-800',
    founder: 'bg-gray-200 border-gray-400 text-gray-800',
    director: 'bg-gray-200 border-gray-400 text-gray-800',
    member: 'bg-gray-200 border-gray-400 text-gray-800',
  }
  const icons = {
    linkedin: (
      <svg
        fill="currentColor"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
    email: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  }

  return (
    <section
      id={signedIn ? 'explore' : 'team'}
      className={`${signedIn ? 'pt-24 pb-20' : 'py-20 sm:py-32'} ${
        fund ? 'border-t' : ''
      }`}
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-gray-800 sm:text-5xl">
            {signedIn ? 'Explore Community Profiles' : 'Team & Community'}
          </h2>
          {!signedIn && (
            <p className="mt-4 font-display text-2xl tracking-tight text-gray-700">
              Meet the people that make this a reality.
            </p>
          )}
        </div>
        <div
          className={`grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:gap-y-12 lg:grid-cols-4 ${
            signedIn ? 'mt-8 sm:mt-10' : 'mt-14 sm:mt-16 lg:mt-24'
          }`}
        >
          {team.map((speaker, speakerIndex) => (
            <div key={speakerIndex}>
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                <div
                  className={clsx(
                    'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 xl:right-6',
                    ['border-gray-300', 'border-gray-300', 'border-gary-300'][
                      speakerIndex % 3
                    ]
                  )}
                />
                <div
                  className="absolute inset-0 bg-gray-50"
                  style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                >
                  <Image
                    className="absolute inset-0 h-full w-full object-cover transition duration-300"
                    src={speaker.image}
                    alt=""
                    priority
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-slate-900">
                {speaker.name}
              </h3>
              <div className="flex justify-between">
                <div className="float-left flex space-x-3 py-2">
                  {Object.keys(speaker.socials).map((socialKey) => (
                    <a
                      href={speaker.socials[socialKey]}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {icons[socialKey]}
                    </a>
                  ))}
                </div>
              </div>
              {Object.keys(speaker.roles).map((roleType) => (
                <p
                  className={`mr-1.5 mt-1.5 inline-block rounded-md py-0.5 px-2 text-sm tracking-tight ${roleClassnames[roleType]}`}
                >
                  {speaker.roles[roleType]}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
