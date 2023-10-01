import Image from "next/image";
import styles from "./ContactUs.module.css";

//svgs
import contactUsTitle from "../../../../public/svg/contactUsTitle.svg";

//images
import eatrh from "../../../../public/images/earth.webp";
import shapeBlur from "../../../../public/images/shapeBlur.webp";

//components
import FooterForm from "../../UI/FooterForm/FooterForm";

export default function ContactUs() {
  return (
    <div className={styles.container}>
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
        <FooterForm />
      </div>
    </div>
  );
}
