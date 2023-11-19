import styles from "./page.module.css";

export const metadata = {
  title: "ENSAA - Developpers",
  description: "Discover the brilliant minds behind the creation of the ENSAA website.",
  keywords:
    "ENSAA, website developers, team, creators, developers, coding, programming, tech team",
};

// components
import TeamDevsList from "./TeamDevsList";

export default function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dev Team</h1>
      <div className={styles.Team}>
        <TeamDevsList />
      </div>
    </div>
  );
}
