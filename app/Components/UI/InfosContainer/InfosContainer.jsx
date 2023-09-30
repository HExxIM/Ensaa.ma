import Image from "next/image";
import styles from "./infosContainer.module.css";
//svg
import BoxTitle from "../../../../public/svg/BoxTitle.svg";
import shapeBlur from "../../../../public/images/shapeBlur.webp";

export default function InfosContainer({ text, logo, title }) {
  return (
    <div className={styles.container}>
      <dir className={styles.Box}>
        <Image className={styles.BoxContainer} src={BoxTitle}></Image>
        <h1 className={styles.title}>{title}</h1>
      </dir>
      <div className={styles.mainInfos}>
        <p className={styles.text}>{text}</p>
        <Image className={styles.logo} src={logo}></Image>
      </div>
      <Image className={styles.blurRight} src={shapeBlur}></Image>
      <Image className={styles.blurLeft} src={shapeBlur}></Image>
    </div>
  );
}
