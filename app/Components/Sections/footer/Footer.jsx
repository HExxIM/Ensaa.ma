import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

//svgs
import ADELogo from "../../../../public/svg/ADELogo.svg";
import Rectangle from "../../../../public/svg/Rectangle.svg";
import contactUsTitle from "../../../../public/svg/contactUsTitle.svg";

//images
import eatrh from "../../../../public/images/earth.webp";
import shapeBlur from "../../../../public/images/shapeBlur.webp";

//components
import SocialMediaList from "../../UI/SocialMediaList";
import FooterForm from "../../UI/FooterForm/FooterForm";

export default function Footer() {
  return (
    <div className={styles.Footer_container}>
      <div className={styles.background_elements}>
        <Image src={eatrh} alt="Eatrh" className={styles.eatrh}></Image>
        <Image
          src={shapeBlur}
          alt="shapeBlurLeft"
          className={styles.shapeBlurLeft}
        ></Image>
      </div>
      <div className={styles.ContactUs}>
        <Image
          src={contactUsTitle}
          alt="contact Us Title"
          className={styles.contactUsTitle}
        ></Image>
        <FooterForm/>
      </div>
      <div className={styles.bottom_elements}>
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
    </div>
  );
}
