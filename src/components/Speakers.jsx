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
    role: 'General Partner',
    image: lucas,
  },
  {
    name: 'Andrew Wang',
    role: 'General Partner',
    image: andrew,
  },
  {
    name: 'Jose Betancourt',
    role: 'General Partner',
    image: jose,
  },
  {
    name: 'Gabriel Romualdo',
    role: 'General Partner',
    image: gabriel,
  },
  {
    name: 'Shafqat Huq',
    role: 'Direct',
    image: shafqat,
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section id="team" className="border-t py-20 sm:py-32">
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-gray-800 sm:text-5xl"
          >
            Team
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-gray-700">
            Meet the people that make DropoutFund a reality.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
          {team.map((speaker, speakerIndex) => (
            <div key={speakerIndex}>
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                <div
                  className={clsx(
                    'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
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
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    src={speaker.image}
                    alt=""
                    priority
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                {speaker.name}
              </h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">
                {speaker.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
