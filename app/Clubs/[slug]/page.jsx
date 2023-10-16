import styles from './page.module.css'

export default function page({params}) {
  const slug = params.slug;
  return (
    <div className={styles.container}>{slug}</div>
  )
}
