import Link from 'next/link';
import Image from 'next/image';
import moonLogo from '../../../../../public/svg/moonLogo.svg';

export default function HeroSection() {
  return (
    <div>
        <div>
          <h1>Together we can make it real!</h1>
          <p>We assure u a better environment at ENSAA.</p>
          <div>
            <Link href="/">{}</Link>
          </div>
        </div>
        <div>
          <Image src={moonLogo} alt='moonlogo' height="1153" width="1171" ></Image>
        </div>
    </div>
  )
}
