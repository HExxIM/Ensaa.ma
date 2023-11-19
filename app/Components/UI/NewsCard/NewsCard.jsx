import Image from "next/image";
import styles from "./NewsCard.module.css";
import Link from "next/link";

export default function NewsCard({
  slug,
  title,
  category,
  description,
  img,
  // direction,
}) {
  return (
    <Link
      href={"/News/" + category + "/" + slug}
      // style={{ flexDirection: direction }}
      className={styles.card}
    >
      <div className={styles.imgContainer}>
        <Image src={img} alt={slug} className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.category}>{category}</span>
        <h3>{title}</h3>
        <p>{description.slice(0, 105)}...</p>
      </div>
    </Link>
  );
}
