import styles from "./page.module.css";
import Head from "next/head";
import Image from "next/image";
//data
import clubsInfos from "../../Database/clubsInfos.js";
// images
import shapeBlur from "../../../public/images/shapeBlur.webp";

export const metadata = {
  description: "Explore the diverse clubs and organizations at ENSAA.",
  keywords:
    "ADE, Dreamers, ENSAA, clubs, organizations, student groups, explore",
};

export default function page({ params }) {
  const slug = params.slug;
  metadata.title = `ENSAA - Clubs - ${slug}`;
  const club = clubsInfos.find((item) => item.slug === slug);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{club.name}</h1>
        <div className={styles.imgContainer}></div>
        <p>{club.text}</p>
        {club.text.map((txt) => {
          <p>{txt}</p>;
        })}
      </div>
      <iframe
        src={club.links.instagram + "embed/"}
        allowtransparency="true"
        scrolling="no"
        frameborder="0"
      ></iframe>
      {/* <Image
        src={shapeBlur}
        alt="shapeBlur"
        className={styles.blurBottom}
      ></Image>
      <Image src={shapeBlur} alt="shapeBlur" className={styles.blurTop}></Image> */}
    </div>
  );
}
