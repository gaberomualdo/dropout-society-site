import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Pitch } from '@/components/Pitch'
import { Speakers } from '@/components/Speakers'

export default function Home() {
  return (
    <>
      <Head>
        <title>DropoutFund - An Early-Stage VC Fund for Dropouts</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Newsletter />
        <Pitch />
      </main>
      <Footer />
    </>
  )
}
