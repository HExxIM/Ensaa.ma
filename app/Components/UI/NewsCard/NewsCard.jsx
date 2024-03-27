import Image from "next/image";
import styles from "./NewsCard.module.css";
import Link from "next/link";

export default function NewsCard({
  slug,
  title,
  category=null,
  description,
  img,
  link='#'
  // direction,
}) {
  return (
    <Link
      // href={(slug=="PublicSpeakingCompetition")?"/PublicSpeakingCompetition":"/News/" + category + "/" + slug}
      href={link}
      // style={{ flexDirection: direction }}
      className={styles.card}
    >
      <div className={styles.imgContainer}>
        <Image src={img} alt={slug} priority={true} className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        {category && <span className={styles.category}>{category}</span>}
        <h3>{title}</h3>
        <p>{description.slice(0, 105)}...</p>
      </div>
    </Link>
  );
}
