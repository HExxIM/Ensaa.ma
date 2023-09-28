import Link from 'next/link'
import Image from 'next/image'

//svgs
import moonLogo from '../../../../../public/svg/moonLogo.svg';
import playIcon from '../../../../../public/svg/playIcon.svg'
import discordLogo from '../../../../../public/svg/discordLogo.svg'
import instaLogo from '../../../../../public/svg/instaLogo.svg'
import XLogo from '../../../../../public/svg/XLogo.svg'
import facebookLogo from '../../../../../public/svg/facebookLogo.svg'


export default function HeroSection() {
  return (
    <div className='Hero-container'>
        <div className='Hero-left'>
          <h1>Together we can make it real!</h1>
          <p>We assure u a better environment at ENSAA.</p>
          <div>
            <div>
              <Link href="/">
                <Image src={playIcon} alt="play" width="26" height="26"></Image>
                <p>watch a video</p>
              </Link>
              <p>25th promotion</p>
            </div>
            <div>
              <Image src={discordLogo} width="37" height="42"></Image>
              <Image src={instaLogo} width="42" height="42"></Image>
              <Image src={XLogo} width="49" height="42"></Image>
              <Image src={facebookLogo} width="42" height="42"></Image>
            </div>
          </div>
        </div>
        <div>
          <Image src={moonLogo} alt='moonlogo' height="1153" width="1171" ></Image>
        </div>
    </div>
  )
}
