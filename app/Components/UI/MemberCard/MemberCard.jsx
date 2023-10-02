import styles from './MemberCard.module.css';
import Image from 'next/image';

export default function MemberCard({image,name,post,description}) {
  return (
    <div className={styles.card}>
      <Image src={image}/>
      <div>
        <h2>{name}</h2>
        <span>{post}</span>
      </div>
      <p>{description}</p>
    </div>
  )
}
