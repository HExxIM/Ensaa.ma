"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Head from 'next/head';

const metadata = {
  title: "Ensaa - Team",
  description: "ADE Ensaa",
};

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
      <Image
        src={shapeBlur}
        alt="shapeBlur"
        className={styles.blurBottom}
      ></Image>
      <Image src={shapeBlur} alt="shapeBlur" className={styles.blurTop}></Image>
    </div>
  );
}
