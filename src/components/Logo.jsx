import Image from 'next/future/image'
import LogoImage from '@/images/logo-small.png'
export function Logo(props) {
  return (
    <Image src={LogoImage} alt="" width={200} priority optimized {...props} />
  )
}
