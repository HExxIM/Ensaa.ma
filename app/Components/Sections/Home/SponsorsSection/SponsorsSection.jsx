import Image from "next/image";
import styles from "./SponsorsSection.module.css";

//Images
import shapeBlur from "../../../../../public/images/shapeBlur.webp";

//components
import TitleBox from "../../../UI/TitleBox";
import SponsorsInfosList from "./SponsorsInfos.jsx";

export default function SponsorsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <TitleBox title="Our Sponsors" />
      </div>
      <div className={styles.Sliders}>
        <div className={styles.Slider1}>
          <SponsorsInfosList />
          <SponsorsInfosList />
        </div>
        <div className={styles.Slider2}>
          <SponsorsInfosList />
          <SponsorsInfosList />
        </div>
      </div>
      <Image className={styles.blurRight} alt="blur" src={shapeBlur} height="auto" width="auto"></Image>
      <Image className={styles.blurLeft} alt="blur" src={shapeBlur}  height="auto" width="auto"></Image>
    </div>
  );
}
