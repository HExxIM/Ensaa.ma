"use client";
import { useState, useEffect } from "react";
import styles from './ClubCard.module.css'
import Image from 'next/image'
import Link from 'next/link';
import useViewportWidth from '../../../hooks/useViewportWidth';
//components
import SocialMediaList from "../../UI/SocialMediaList";
//svg
import link from "../../../../public/svg/icons/link.svg";
export default function ClubCard({image, name, description, links,index, slug}) {
  const windowWidth = useViewportWidth();

  const flexdirection = windowWidth <= 800 ? '' : (index%2===0 ? 'row' : 'row-reverse');
  const socialsDirection = windowWidth <= 800 ? 'row' : 'column';
  return (
    <div style={{ flexDirection:flexdirection }} className={styles.card}>
        <Link href={"/Clubs/"+slug} className={styles.imgContainer}>
            <Image width={120} src={image} alt={name} />
        </Link>
        <div className={styles.SocialMediaList}>
          <SocialMediaList direction={socialsDirection} className={styles.SocialMediaList} links={links} iconsSize="23" iconsGap="1rem" brightness="10" />
        </div>
        <Link href={"/Clubs/"+slug} className={styles.textContainer}>
            <h3>{name}</h3>
            <p>{description}</p>
        </Link>
        <Link href={"/Clubs/"+slug} className={styles.linkContainer}>
          <Image src={link} alt="link" width={20} height={20} />
        </Link>
    </div>
  )
}
