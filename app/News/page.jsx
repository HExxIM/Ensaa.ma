import styles from "./page.module.css";
//components
import NewsCard from "../Components/UI/NewsCard/NewsCard";

//data
import news from "../Database/news.js";

export const metadata = {
  title: "ENSAA - News",
  description: "Stay up-to-date with the latest news and updates from ENSAA.",
  keywords: "ADE, Dreamers, ENSAA, news, updates, articles, announcements",
};

export default function page() {
  const recentlyposted = news
    .slice(0, 4)
    .map((item) => (
      <NewsCard
        title={item.title}
        category={item.category}
        description={item.description}
        img={item.coverimg}
        slug={item.slug}
        direction="row"
        link={item.slug=="ingblaFiltre" ? '/Fields' : "/News/" + item.category + "/" + item.slug}
      />
    ));

  const othernews = news
    .slice(4)
    .map((item) => (
      <NewsCard
        title={item.title}
        category={item.category}
        description={item.description}
        img={item.coverimg}
        slug={item.slug}
        direction="column"
        link={"/News/" + item.category + "/" + item.slug}
      />
    ));

  return (
    <div className={styles.container}>
      {/* <div className={styles.newsBar}>
        <p>Discover our new event</p>
      </div> */}
      <h1>
        <span>Recently</span> posted
      </h1>
      <div className={styles.recentlyposted}>{recentlyposted}</div>
      <div className={styles.allnews}>{othernews}</div>
    </div>
  );
}
