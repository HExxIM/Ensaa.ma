import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'
//svgs
import moonLogo from '../../../../../public/svg/moonLogo.svg';
import playIcon from '../../../../../public/svg/playIcon.svg'
import discordLogo from '../../../../../public/svg/discordLogo.svg'
import instaLogo from '../../../../../public/svg/instaLogo.svg'
import XLogo from '../../../../../public/svg/XLogo.svg'
import facebookLogo from '../../../../../public/svg/facebookLogo.svg'


export default function HeroSection() {
  return (
    <div className={styles.Hero_container}>
        <div className={styles.Hero_left}>
          <h1 className={styles.slogon}>Together we<br/>can make it<br/>real!</h1>
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
          <Image src={moonLogo} alt='moonlogo' height="615" width="750" className={styles.moonLogo} ></Image>
        </div>
    </div>
  )
}
