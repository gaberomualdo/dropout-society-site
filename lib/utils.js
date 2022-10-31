import ClubLogo from '@/images/club-logo.png'
import FundLogo from '@/images/fund-logo.png'
import { FundHero, ClubHero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Pitch } from '@/components/Pitch'
import { Team } from '@/components/Team'
import { Links } from '@/components/Links'

const dropoutfundDomain = 'dropoutfund.vc'
export const getFundURL = () => `https://${dropoutfundDomain}/`
export const pagesData = {
  fund: {
    title: 'DropoutFund – An Early-Stage VC Fund for Dropouts',
    logo: FundLogo,
    nav: {
      About: '#about',
      Team: '#team',
      Blog: '#blog',
      'Pitch To Us': '#pitch',
    },
    content: (
      <>
        <FundHero />
        <Team />
        <Newsletter />
        <Pitch />
      </>
    ),
  },
  club: {
    title: "DropoutClub – The World's Community of Dropouts",
    logo: ClubLogo,
    nav: {
      Home: '/',
      Community: '/community',
      Fund: getFundURL(),
      Blog: '/#blog',
      Login: '/login',
      Apply: '/apply',
    },
    content: (
      <>
        <ClubHero />
        <Links />
        <Newsletter />
      </>
    ),
  },
}

export const getPageData = () => {
  const pageId = process.env.PAGE_ID || 'fund'
  return pagesData[pageId]
}
