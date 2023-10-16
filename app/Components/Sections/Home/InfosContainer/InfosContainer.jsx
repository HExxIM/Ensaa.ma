import Image from "next/image";
import styles from "./infosContainer.module.css";

//Imagess
import shapeBlur from "../../../../../public/images/shapeBlur.webp";

//components
import TitleBox from "../../../UI/TitleBox";

export default function InfosContainer({ text, logo, title, flexdirection }) {
  return (
    <div className={styles.container}>
      <TitleBox title={title} />
      <div style={{ flexDirection:flexdirection }} className={styles.mainInfos}>
        <Image className={styles.logo} alt="Logo" src={logo}></Image>
        <p className={styles.text}>{text}</p>
      </div>
      <Image
        className={styles.blurRight}
        alt="blurRight"
        src={shapeBlur}
      ></Image>
      <Image className={styles.blurLeft} alt="blurLeft" src={shapeBlur}></Image>
    </div>
  );
}
