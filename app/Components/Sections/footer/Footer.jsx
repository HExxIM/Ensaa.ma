import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

//svgs
import ADELogo from "../../../../public/svg/ADELogo.svg";
import Rectangle from "../../../../public/svg/Rectangle.svg";

//images
import eatrh from "../../../../public/images/earth.webp";

//components
import SocialMediaList from "../../UI/SocialMediaList";
import Button from "../../UI/Button";

export default function Footer() {
  return (
    <div className={styles.Footer_container}>
      {/* <Image src={eatrh} alt="Eatrh" className={styles.eatrh}></Image> */}
      <div className={styles.ContactUs}>
        <h1>Contact us</h1>
        <div className={styles.form}>
          <label htmlFor="name">Your Name</label>
          <textarea name="Your Name" id="name" cols="30" rows="10"></textarea>
          <label htmlFor="email">Your Email</label>
          <textarea name="Your Email" id="email" cols="30" rows="10"></textarea>
          <label htmlFor="text">Your Text</label>
          <textarea name="Your Text" id="text" cols="30" rows="10"></textarea>
          <Button text="send" link="/" />
        </div>
      </div>
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
