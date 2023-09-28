import Link from 'next/link'
import Image from 'next/image'

//svgs
import playIcon from '../../../../../public/svg/playIcon.svg'

export default function HeroSection() {
  return (
    <div>
        <div>
          <h1>Together we can make it real!</h1>
          <p>We assure u a better environment at ENSAA.</p>
          <div>
            <Link href="/">
              <Image src={playIcon} alt="me" width="64" height="64"></Image>
            </Link>
          </div>
        </div>
        <div></div>
    </div>
  )
}
