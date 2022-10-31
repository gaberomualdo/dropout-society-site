import { setupSupabase } from 'lib/auth-utils'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Apply() {
  useEffect(() => {
    const supabase = setupSupabase()
    const updateSession = async () => {
      const { data } = await supabase.auth.getSession()
      const { session } = data
      if (session?.access_token) {
        await supabase.auth.signOut()
      }
      window.open('/', '_self')
    }
    updateSession()
  }, [])
  return (
    <>
      <Head>
        <title>Logging Out</title>
      </Head>
    </>
  )
}
