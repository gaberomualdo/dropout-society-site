import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Team } from '@/components/Team'
import Head from 'next/head'
import { getPageData } from '../../lib/utils'

export default function Apply() {
  const { nav, title } = getPageData()
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header nav={nav} active="Community" />
      <Team />
      <Footer />
    </>
  )
}
