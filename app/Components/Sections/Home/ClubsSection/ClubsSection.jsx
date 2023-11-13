import styles from "./sliderSection.module.css";
// import { useRef } from "react";

//components
import TitleBox from "../../../UI/TitleBox";
import ClubsInfosList from "./ClubsInfosList.jsx";

export default function ClubsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <TitleBox title="Our Clubs" />
      </div>
      <div className={styles.Slider}>
        <ClubsInfosList />
      </div>
    </div>
  );
}
