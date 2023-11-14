import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

//svgs
import ADELogo from "../../../../public/svg/AdeAssets/ADELogo.svg";
import Rectangle from "../../../../public/svg/icons/Rectangle.svg";

//components
import SocialMediaList from "../../UI/SocialMediaList";

export default function Footer() {
  const adelinks = {
    facebook: "https://www.facebook.com/ade.ensaa",
    instagram: "https://www.instagram.com/ade.ensaa/",
    linkedin: "https://www.linkedin.com/company/ade-ensa-agadir/",
    X: "",
    discord: "",
    youtube: "https://www.youtube.com/@ade-ensa-agadir/",
  };

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
          <SocialMediaList
            direction="row"
            links={adelinks}
            iconsSize="25"
            iconsGap="1rem"
            brightness="10"
          />
        </div>
        <div className={styles.links}>
          <Link href="#">Terms of service</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="#">Report</Link>
        </div>
      </div>
      <p className={styles.copyrights}>
        Copyright © ADE ENSAA | Developped by{" "}
        <Link href="/Developpers" className={styles.Developpers}>
          DevTeam
        </Link>
      </p>
    </div>
  );
}
