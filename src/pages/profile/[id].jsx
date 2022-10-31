import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Team } from '@/components/Team'
import { setupSupabase } from 'lib/auth-utils'
import Head from 'next/head'
import { getPageData } from '../../../lib/utils'

export default function Apply() {
  const supabase = setupSupabase()
  const { title } = getPageData()
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header active="Login" />
      <div>
        <div className="flex min-h-full flex-col justify-center py-64 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center font-display text-3xl font-bold tracking-tight text-gray-900">
              Profiles Don't Work Yet! <br />
              Stay tuned for updates.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
