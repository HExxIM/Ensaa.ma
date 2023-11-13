import styles from "./ClubCard.module.css";
import Image from "next/image";
import Link from "next/link";
//components
import SocialMediaList from "../../UI/SocialMediaList";
//svg
import link from "../../../../public/svg/icons/link.svg";
export default function ClubCard({ image, name, description, links, slug }) {
  return (
    <div className={styles.card}>
      <Link href={"/Clubs/" + slug} className={styles.imgContainer}>
        <Image priority={true} width={120} src={image} alt={name} />
      </Link>
      <div className={styles.SocialMediaList}>
        <SocialMediaList
          direction="column"
          className={styles.SocialMediaList}
          links={links}
          iconsSize="23"
          iconsGap="1rem"
          brightness="10"
        />
      </div>
      <Link href={"/Clubs/" + slug} className={styles.textContainer}>
        <h3>{name}</h3>
        <p>{description.slice(0, 300)}...</p>
      </Link>
      <Link href={"/Clubs/" + slug} className={styles.linkContainer}>
        <Image src={link} alt="link" width={20} height={20} />
      </Link>
    </div>
  );
}
