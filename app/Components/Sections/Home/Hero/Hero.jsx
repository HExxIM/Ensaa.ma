import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";
//svgs
import moonLogo from "../../../../../public/svg/moonLogo.svg";
import playIcon from "../../../../../public/svg/playIcon.svg";
import discordLogo from "../../../../../public/svg/discordLogo.svg";
import instaLogo from "../../../../../public/svg/instaLogo.svg";
import linkedinLogo from "../../../../../public/svg/linkedinLogo.svg";
import facebookLogo from "../../../../../public/svg/facebookLogo.svg";
import XLogo from "../../../../../public/svg/XLogo.svg";
import shapeBlurBottom from "../../../../../public/svg/shapeBlurBottom.svg";
import shapeBlurTop from "../../../../../public/svg/shapeBlurTop.svg";

export default function HeroSection() {
  const socialMedia = [
    {
      name: "instagram",
      link: "https://www.instagram.com/ade.ensaa/",
      logo: instaLogo,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/adeensaa/",
      logo: facebookLogo,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/ade-ensa-agadir",
      logo: linkedinLogo,
    },
    {
      name: "X",
      link: "#",
      logo: XLogo,
    },
    {
      name: "discord",
      link: "https://discord.gg/3FyqYt7",
      logo: discordLogo,
    },
  ];

  const socialMediaList = socialMedia.map((media) => (
    <Link href={media.link} key={media.name} target="_blank">
      <Image src={media.logo} height="30" width="30" alt={media.name} />
    </Link>
  ));

  return (
    <div className={styles.Hero_container}>
      <div className={styles.Hero_left}>
        <div className={styles.Hero_texts}>
          <h1>Together we</h1>
          <h1>can make it</h1>
          <h1>real!</h1>
          <p className={styles.description}>
            We assure you a better environment at ENSAA.
          </p>
          <div className={styles.button_promo}>
            <Link href="/" className={styles.button}>
              <Image src={playIcon} alt="play" className={styles.play}></Image>
              <p>watch a video</p>
            </Link>
            <p>25th promotion</p>
          </div>
        </div>
        <div className={styles.social_media}>{socialMediaList}</div>
      </div>
      <div className={styles.Hero_right}>
        <Image
          src={moonLogo}
          alt="moonlogo"
          className={styles.moonLogo}
        ></Image>
      </div>
    </div>
  );
}
