import styles from './MemberCard.module.css';
import Image from 'next/image';

export default function MemberCard({image,name,post,description}) {
  return (
    <div className={styles.card}>
      <Image className={styles.img} src={image}/>
      <div className={styles.titles}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.post}>{post}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
