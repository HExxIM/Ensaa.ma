import styles from "./page.module.css";

// components
import TeamDevsList from "./TeamDevsList";

export default function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TetraTechs</h1>
      <div className={styles.Team}>
        <TeamDevsList />
      </div>
    </div>
  );
}
