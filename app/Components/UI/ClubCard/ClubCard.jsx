import React from 'react'
import styles from './ClubCard.module.css'
import Image from 'next/image'
import Link from 'next/link';
//components
import SocialMediaList from "../../UI/SocialMediaList";
//svg
import link from "../../../../public/svg/icons/link.svg";
export default function ClubCard({image, name, description, links}) {
  return (
    // align-items: flex-start;
    <div className={styles.card}>
        <div className={styles.imgContainer}>
            <Image width={120} src={image} alt={name} />
        </div>
        <div className={styles.SocialMediaList}>
          <SocialMediaList direction='column' className={styles.SocialMediaList} links={links} iconsSize="25" iconsGap="1rem" brightness="10" />
        </div>
        <div className={styles.textContainer}>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        <Link href={links.website} className={styles.linkContainer}>
          <Image src={link} alt="link" width={20} height={20} />
        </Link>
    </div>
  )
}
