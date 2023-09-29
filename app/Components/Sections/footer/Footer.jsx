import Image from "next/image";
import styles from "./Footer.module.css";

//svgs
import ADELogo from "../../../../public/svg/ADELogo.svg";

//components
import SocialMediaList from "../../UI/SocialMediaList";
import Button from "../../UI/Button";

export default function Footer() {
  return (
    <div className={styles.Footer_container}>
      <Image src={ADELogo} alt="ADE logo" className={styles.ADELogo}></Image>
    </div>
  );
}
