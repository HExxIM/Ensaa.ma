import Image from "next/image";
import styles from "./infosContainer.module.css";

//components
import TitleBox from "../../../UI/TitleBox";

export default function InfosContainer({ text, logo, title, position }) {
  return (
    <div className={styles.container}>
      <TitleBox title={title} />
      {position == "right" ? (
        <div className={styles.mainInfos}>
          <Image className={styles.logo} alt="Logo" src={logo}></Image>
          <p className={styles.text}>{text}</p>
        </div>
      ) : (
        <div className={styles.mainInfos}>
          <p className={styles.text}>{text}</p>
          <Image className={styles.logo} alt="Logo" src={logo}></Image>
        </div>
      )}
    </div>
  );
}
