import { getPageData } from '../../lib/utils'
import Image from 'next/future/image'
export function Logo(props) {
  const { logo } = getPageData()
  return (
    <a href="/">
      <Image src={logo} alt="" width={200} priority unoptimized {...props} />
    </a>
  )
}
