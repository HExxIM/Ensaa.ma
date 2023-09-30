import Image from "next/image";
import styles from "./infosContainer.module.css";
//svg
import shapeBlur from "../../../../public/images/shapeBlur.webp";
//components
import TitleBox from "../../../UI/TitleBox";

export default function InfosContainer({ text, logo, title }) {
  return (
    <div className={styles.container}>
      <TitleBox title={title} />
      <div className={styles.mainInfos}>
        <p className={styles.text}>{text}</p>
        <Image className={styles.logo} src={logo}></Image>
      </div>
      <Image className={styles.blurRight} src={shapeBlur}></Image>
      <Image className={styles.blurLeft} src={shapeBlur}></Image>
    </div>
  );
}
