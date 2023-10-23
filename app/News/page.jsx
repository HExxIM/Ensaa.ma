import styles from "./page.module.css";
//components
import EmptyState from "../Components/Sections/EmptyState/EmptyState";
import NewsCard from "../Components/UI/NewsCard/NewsCard";

//data
import news from "../Database/news.js";

export const metadata = {
  title: "ENSAA - News",
  description: "Stay up-to-date with the latest news and updates from ENSAA.",
  keywords: "ADE, Dreamers, ENSAA, news, updates, articles, announcements"
};

export default function page() {
  const recentlyposted = news.slice(0, 4).map((item) => (
    <NewsCard 
      title={item.title} 
      category={item.category} 
      description={item.description}
      img={item.images[0]}
      slug={item.slug}
      direction="row"
    />
  ));

  const othernews = news.slice(3).map((item) => (
    <NewsCard 
      title={item.title} 
      category={item.category} 
      description={item.description}
      img={item.images[0]}
      slug={item.slug}
      direction="column"
    />
    ));

  return (
    <div className={styles.container}>
      <h1><span>Recently</span> posted</h1>
      <div className={styles.recentlyposted}>
        {recentlyposted}
      </div>
      <div className={styles.allnews}>
        {othernews}
      </div>
    </div>
  )
}
