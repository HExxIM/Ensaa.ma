"use client";
import styles from "./page.module.css";
import Image from "next/image";

// images
import shapeBlur from "../../public/images/shapeBlur.webp";

// components
import TeamDevsList from "./TeamDevsList";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.Team}>
        <TeamDevsList />
      </div>
      <Image
        src={shapeBlur}
        alt="shapeBlur"
        className={styles.blurBottom}
      ></Image>
      <Image src={shapeBlur} alt="shapeBlur" className={styles.blurTop}></Image>
    </div>
  );
}
