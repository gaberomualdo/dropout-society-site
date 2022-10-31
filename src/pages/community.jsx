import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Team } from '@/components/Team'
import { getPageData } from '../../lib/utils'

export default function Apply() {
  const { nav } = getPageData()
  return (
    <>
      <Header nav={nav} active="Community" />
      <Team />
      <Footer />
    </>
  )
}
