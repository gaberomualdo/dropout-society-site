import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getPageData } from '../../lib/utils'

export default function Home() {
  const { nav, content, title } = getPageData()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header nav={nav} />
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
