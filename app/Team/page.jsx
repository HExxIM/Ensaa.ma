"use client";
import styles from "./page.module.css";
import Image from "next/image";

// images
import shapeBlur from "../../public/images/shapeBlur.webp";

// components
import TeamMembersList from "./TeamMembersList";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.Team}>
        <TeamMembersList />
      </div>
      <Image src={shapeBlur} className={styles.blurBottom}></Image>
      <Image src={shapeBlur} className={styles.blurTop}></Image>
    </div>
  );
}
