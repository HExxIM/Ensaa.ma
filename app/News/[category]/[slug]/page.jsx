import styles from "./page.module.css";
import Image from "next/image";
//data
import news from "../../../Database/news.js";
//components
import SocialMediaList from "../../../Components/UI/SocialMediaList";
import PublicSpeakingCompetition from "../../../Components/Sections/PublicSpeakingCompetition/PublicSpeakingCompetition";

export const metadata = {
  description: "Stay up-to-date with the latest news and updates from ENSAA.",
  keywords: "ADE, Dreamers, ENSAA, news, updates, articles, announcements",
};

export default function page({ params }) {
  const slug = params.slug;
  metadata.title = `ENSAA - News - ${slug}`;
  const New = news.find((item) => item.slug === slug);
  return (
    <>
    {slug === "PublicSpeakingCompetition" && <PublicSpeakingCompetition />}
    <div className={slug === "PublicSpeakingCompetition" ? styles.container+" center" : styles.container}>
      <h1>{slug === "PublicSpeakingCompetition" ? "La Voix de l'Ingénieur à l'ENSAA : Parcours vers la Victoire" : New.title}</h1>
      {
        slug != "PublicSpeakingCompetition" && 
        <div className={styles.infos}>
          <span>{New.category}</span>
          <SocialMediaList
            direction="row"
            className={styles.SocialMediaList}
            links={New.links}
            iconsSize="25"
            iconsGap="1.2rem"
            brightness="1"
          />
        </div>
      }
      {New.content.map((item, index) => (
        <>
          {item.text && <p>{item.text}</p>}
          {item.img && (
            <div className={styles.imgContainer}>
              <Image
                placeholder="blur"
                className={styles.img}
                alt={slug}
                src={item.img}
              />
            </div>
          )}
          {item.youtubeId && (
            <div className={styles.iframeContainer}>
              <iframe
                src={"https://www.youtube.com/embed/" + item.youtubeId}
                title={New.slug}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </>
      ))}
    </div>
    </>
  );
}
