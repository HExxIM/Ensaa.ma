import styles from "./page.module.css";

export const metadata = {
  title: "ENSAA - Team",
  description: "Meet the dedicated team behind ENSAA and learn more about us.",
  keywords:
    "ADE, Dreamers, ENSAA, team, members, about us, leadership, dedicated",
};

// components
import TeamMembersList from "./TeamMembersList";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.Team}>
        <TeamMembersList />
      </div>
    </div>
  );
}
