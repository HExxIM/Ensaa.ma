import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

//svgs
import ADELogo from "../../../../public/svg/ADELogo.svg";
import Rectangle from "../../../../public/svg/Rectangle.svg";
import contactUsTitle from "../../../../public/svg/contactUsTitle.svg";
import shapeBlurBottom from "../../../../public/svg/shapeBlurBottom.svg";

//images
import eatrh from "../../../../public/images/earth.webp";

//components
import SocialMediaList from "../../UI/SocialMediaList";
import Button from "../../UI/Button";

export default function Footer() {
  return (
    <div className={styles.Footer_container}>
      <Image src={eatrh} alt="Eatrh" className={styles.eatrh}></Image>
      <Image
        src={shapeBlurBottom}
        alt="shapeBlurBottom"
        className={styles.shapeBlurBottom}
      ></Image>

      <div className={styles.ContactUs}>
        <Image
          src={contactUsTitle}
          alt="contact Us Title"
          className={styles.contactUsTitle}
        ></Image>
        <form>
          <div>
            <label htmlFor="name">Your Name</label>
            <textarea name="Your Name" id="name" cols="40" rows="1"></textarea>
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <textarea
              name="Your Email"
              id="email"
              cols="40"
              rows="1"
            ></textarea>
          </div>
          <div>
            <label htmlFor="text">Your Text</label>
            <textarea name="Your Text" id="text" cols="40" rows="5"></textarea>
          </div>
          <Button text="send" link="/" />
        </form>
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
