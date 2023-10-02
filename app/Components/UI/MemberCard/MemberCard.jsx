import styles from './MemberCard.module.css';
import Image from 'next/image';

export default function MemberCard({image,name,post,description}) {
  return (
    <div className={styles.card}>
      <Image className={styles.img} src={image}/>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.post}>{post}</span>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
