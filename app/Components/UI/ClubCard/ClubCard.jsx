import React from 'react'
import styles from './ClubCard.module.css'
import Image from 'next/image'
import Link from 'next/link';
//components
import SocialMediaList from "../../UI/SocialMediaList";
//svg
import link from "../../../../public/svg/icons/link.svg";
export default function ClubCard({image, name, description, links,index, slug}) {
  const flexdirection = index%2===0 ? 'row' : 'row-reverse';
  return (
    <div style={{ flexDirection:flexdirection }} className={styles.card}>
        <Link href={"/Clubs/"+slug} className={styles.imgContainer}>
            <Image width={120} src={image} alt={name} />
        </Link>
        <div className={styles.SocialMediaList}>
          <SocialMediaList direction='column' className={styles.SocialMediaList} links={links} iconsSize="25" iconsGap="1rem" brightness="10" />
        </div>
        <div className={styles.textContainer}>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        <Link href={"/Clubs/"+slug} className={styles.linkContainer}>
          <Image src={link} alt="link" width={20} height={20} />
        </Link>
    </div>
  )
}
