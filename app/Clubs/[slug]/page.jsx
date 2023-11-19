import styles from "./page.module.css";
import Image from "next/image";
//data
import clubsInfos from "../../Database/clubsInfos.js";
//components
import SocialMediaList from "../../Components/UI/SocialMediaList";
import Iframe from "../../Components/UI/InstaIframe";

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
        {club.content.map((item, index) => (
          <>
            {item.title && <h2>{item.title}</h2>}
            {item.subtitle && <h3>{item.subtitle}</h3>}
            {item.text && <p>{item.text}</p>}
            {item.img && (
              <div className={styles.imgContainer}>
                <Image className={styles.img} alt={slug} placeholder="blur" src={item.img} />
              </div>
            )}
          </>
        ))}
      </div>
      <div className={styles.sidebar}>
        <Image
          alt="Logo"
          className={styles.Logo}
          src={club.logo}
          width={230}
          priority={true}
        ></Image>
        <SocialMediaList
          direction="row"
          className={styles.SocialMediaList}
          links={club.links}
          iconsSize="26"
          iconsGap="1.5rem"
          brightness="1"
        />
        <Iframe club={club} />
      </div>
    </div>
  );
}
