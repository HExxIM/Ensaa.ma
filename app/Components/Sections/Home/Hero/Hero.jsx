import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

//svgs
import moonLogo from "../../../../../public/svg/moonLogo.svg";
import playIcon from "../../../../../public/svg/playIcon.svg";
import shapeBlurBottom from "../../../../../public/svg/shapeBlurBottom.svg";
import shapeBlurTop from "../../../../../public/svg/shapeBlurTop.svg";

//components
import SocialMediaList from "../../../UI/SocialMediaList";
import Button from "../../../UI/Button";

export default function HeroSection() {
  return (
    <div className={styles.Hero_container}>
      <Image src={shapeBlurBottom} className={styles.blurBottom}></Image>
      <Image src={shapeBlurTop} className={styles.blurTop}></Image>

      <div className={styles.Hero_left}>
        <div className={styles.Hero_texts}>
          <h1>Together we</h1>
          <h1>can make it</h1>
          <h1>real!</h1>
          <p className={styles.description}>
            We assure you a better environment at ENSAA.
          </p>
          <div className={styles.button_promo}>
            <Button text="watch a video" link="/" icon={playIcon} />
            <p>25th promotion</p>
          </div>
        </div>
        <SocialMediaList />
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
