import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getPageData } from '../../lib/utils'

export default function Home() {
  const { nav, content, title } = getPageData()
  let active = null
  if (typeof window !== 'undefined') {
    if (window.location.hash.includes('blog')) {
      active = 'Blog'
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header nav={nav} active={active} />
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
