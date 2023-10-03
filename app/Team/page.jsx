"use client";
import styles from "./page.module.css";
import Image from "next/image";

// images
import shapeBlur from "../../public/images/shapeBlur.webp";

// components
import {
  getMembersList1,
  getMembersList2,
} from "../Components/UI/TeamMembersList";
import Carousel from "./Carousel";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Carousel>{getMembersList1()}</Carousel>
        <Carousel>{getMembersList2()}</Carousel>
      </div>
      <Image src={shapeBlur} className={styles.blurBottom}></Image>
      <Image src={shapeBlur} className={styles.blurTop}></Image>
    </div>
  );
}
