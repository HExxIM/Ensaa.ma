import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

//svgs
import ADELogo from "../../../../public/svg/ADELogo.svg";
import Rectangle from "../../../../public/svg/Rectangle.svg";

//components
import SocialMediaList from "../../UI/SocialMediaList";

export default function Footer() {
  return (
      <div className={styles.container}>
        <div className={styles.logo_socials_links}>
          <div className={styles.logo_socials}>
            <Image
              src={ADELogo}
              alt="ADE logo"
              className={styles.ADELogo}
            ></Image>
            <Image
              src={Rectangle}
              alt="Rectangle"
              className={styles.Rectangle}
            ></Image>
            <SocialMediaList iconsSize="25" iconsGap="1rem" />
          </div>
          <div className={styles.links}>
            <Link href="/" target="_blank">
              Terms of service
            </Link>
            <Link href="/">Contact</Link>
            <Link href="/">Report</Link>
          </div>
        </div>
        <p className={styles.copyrights}>
          Copyright © ADE ENSAA | Designed by ZEUS
        </p>
      </div>
  );
}
