import Image from 'next/future/image'
import LogoImage from '@/images/logo-small.png'
export function Logo(props) {
  return (
    <a href="/">
      <Image
        src={LogoImage}
        alt=""
        width={200}
        priority
        unoptimized
        {...props}
      />
    </a>
  )
}
