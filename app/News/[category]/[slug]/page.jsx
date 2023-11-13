import styles from "./page.module.css";
import Image from "next/image";
//data
import news from "../../../Database/news.js";
//components
import SocialMediaList from "../../../Components/UI/SocialMediaList";
export default function page({ params }) {
  const slug = params.slug;
  const New = news.find((item) => item.slug === slug);
  return (
    <div className={styles.container}>
      <h1>{New.title}</h1>
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
      {New.content.map((item, index) => (
        <>
          <div className={styles.imgContainer}>
            <Image placeholder="blur" className={styles.img} alt={slug} src={item.img} />
          </div>
          <p>{item.text}</p>
        </>
      ))}
    </div>
  );
}
