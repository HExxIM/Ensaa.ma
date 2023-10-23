import styles from './page.module.css'
import Head from 'next/head'
//data
import clubsInfos from "../../Database/clubsInfos.js";

export const metadata = {
  description: "Explore the diverse clubs and organizations at ENSAA.",
  keywords: "ADE, Dreamers, ENSAA, clubs, organizations, student groups, explore"
};

export default function page({params}) {
  const slug = params.slug;
  metadata.title = `ENSAA - Clubs - ${slug}`;
  const club = clubsInfos.find((item) => item.slug === slug);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{club.name}</h1>
        <div className={styles.imgContainer}>

        </div>
        <p>
          {club.text}
        </p>
      </div>
      <iframe src='https://www.instagram.com/ade.ensaa/embed/' allowtransparency="true" scrolling='no' frameborder="0"></iframe>
    </div>
  )
}
