import Image from "next/image"
import styles from './NewsCard.module.css'
import Button from "../Button"

export default function NewsCard({title,category,description,img,direction}) {
  return (
    <div style={{ flexDirection:direction }} className={styles.card}>
        <div className={styles.imgContainer}>
            {/* <Image width={120} src={img}/> */}
        </div>
        <div className={styles.textContainer}>
            <span className={styles.category}>{category}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}
