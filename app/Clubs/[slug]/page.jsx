import styles from './page.module.css'
import Head from 'next/head'


export const metadata = {
  description: "Explore the diverse clubs and organizations at ENSAA.",
  keywords: "ADE, Dreamers, ENSAA, clubs, organizations, student groups, explore"
};

export default function page({params}) {
  const slug = params.slug;
  metadata.title = `ENSAA - Clubs - ${slug}`;
  return (
    <div className={styles.container}>
      {slug}
      </div>
  )
}
