import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getPageData } from '../../lib/utils'
import { setupSupabase } from 'lib/auth-utils'
import { useEffect, useState } from 'react'

export default function Home() {
  const [signedIn, setSignedIn] = useState(false)
  const { content, title } = getPageData(signedIn)

  useEffect(() => {
    const supabase = setupSupabase()
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token) {
        setSignedIn(true)
      }
    })
  }, [setSignedIn])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{content}</main>
      <Footer />
    </>
  )
}

export function getServerSideProps({ req }) {
  return {
    props: {
      domain: req.headers.host,
    },
  }
}
