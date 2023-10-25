"use client";
import Image from "next/image"
import styles from './NewsCard.module.css'
import { useState, useEffect } from "react";
import Link from "next/link";
import useViewportWidth from '../../../hooks/useViewportWidth';

export default function NewsCard({slug,title,category,description,img,direction}) {
  const windowWidth = useViewportWidth();
  return (
    <Link href={"/News/"+category+"/"+slug} style={{ flexDirection:(windowWidth<=600 ? 'column' : direction) }} className={styles.card}>
        <div className={styles.imgContainer}>
            <Image src={img} className={styles.img}/>
        </div>
        <div className={styles.textContainer}>
            <span className={styles.category}>{category}</span>
            <h3>{title}</h3>
            <p>{description.slice(0,105)}...</p>
        </div>
    </Link>
  )
}
