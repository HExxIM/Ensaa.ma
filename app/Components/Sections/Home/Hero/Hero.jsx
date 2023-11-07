import Image from "next/image";
import styles from "./Hero.module.css";

//assets
import moonLogo from "../../../../../public/svg/AdeAssets/moonLogo.svg";
import playIcon from "../../../../../public/svg/icons/playIcon.svg";
import shapeBlur from "../../../../../public/images/shapeBlur.webp";

//components
import SocialMediaList from "../../../UI/SocialMediaList";
import Button from "../../../UI/Button";

export default function HeroSection() {
  const adelinks = {
    facebook: "https://www.facebook.com/ade.ensaa",
    instagram: "https://www.instagram.com/ade.ensaa/",
    linkedin: "https://www.linkedin.com/company/ade-ensa-agadir/",
    X: "",
    discord: "",
  };
  return (
    <div className={styles.Hero_container}>
      <Image
        src={shapeBlur}
        alt="blurBottom"
        className={styles.blurBottom}
      ></Image>
      <Image src={shapeBlur} alt="blurTop" className={styles.blurTop}></Image>

      <div className={styles.Hero_left}>
        <h1>
          Together we
          <br />
          can make it
          <br />
          real!
        </h1>
        <p className={styles.description}>
          We assure you a better environment at ENSAA.
        </p>
        <div className={styles.button_promo}>
          <Button text="watch a video" link="/" icon={playIcon} />
          <p>25th promotion</p>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <SocialMediaList
          direction="row"
          links={adelinks}
          iconsSize="30"
          iconsGap="1.2rem"
          brightness="1"
        />
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
