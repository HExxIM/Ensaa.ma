"use client";
import Image from "next/image";
import styles from "./sliderSection.module.css";
// import { useRef } from "react";

//Images
import shapeBlur from "../../../../../public/images/shapeBlur.webp";

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
      <Image
        className={styles.blurRight}
        alt="blurRight"
        src={shapeBlur}
        height="auto" width="auto"
      ></Image>
      <Image className={styles.blurLeft} alt="blurLeft"  height="auto" width="auto" src={shapeBlur}></Image>
    </div>
  );
}
