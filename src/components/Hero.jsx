import Image from 'next/future/image'

import Dropouts from '@/images/dropouts.jpeg'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24" id="about">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tighter text-gray-800">
            We fund dropouts building disruptive startups with a $25-150K first
            check.
          </h1>
          <div className="mt-10 mb-6">
            <Image
              src={Dropouts}
              className="mx-auto w-full max-w-xl rounded-2xl shadow-md"
            />
            <p className="mb-8 mt-2 text-center font-display text-lg tracking-tight text-gray-600">
              Our General Partners, all founders part of the dropout community
            </p>
          </div>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-gray-700">
            <p>
              The most iconic people, from Bill Gates to Steven Spielberg to
              Madonna, have been dropouts. Whether they help start a new country
              like Alexander Hamilton or change the world of entertainment like
              Oprah, dropouts change the world.
            </p>
            <p>
              But dropping out is difficult. It’s a contrarian decision to leave
              the traditional path, forging one’s own path, against the wishes
              of one’s community, parents, and even self. Most dropouts don’t
              know other dropouts personally. We haven’t had the chance to have
              a real community of people who we can relate to, get support from,
              and work together with.
            </p>
            <p>
              <strong className="font-medium">
                This starts with DropoutFund. We fund early stage companies
                founded by dropouts — and would-be dropouts — with $25-150K
                first checks.
              </strong>{' '}
              This includes a kick start and intros to our network so founders
              can get support, mentoring, and advising. We'll give you the
              support and the courage, with our community and that first check,
              to take the leap into starting a disruptive company full-time.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
