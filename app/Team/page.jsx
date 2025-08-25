import styles from "./page.module.css";
import TitleBox from "../Components/UI/TitleBox";

export const metadata = {
  title: "ENSAA - Team",
  description: "Meet the dedicated team behind ENSAA and learn more about us.",
  keywords:
    "ADE, Dreamers, ENSAA, team, members, about us, leadership, dedicated",
};

// components
import { TeamMembers1, TeamMembers2 } from "./TeamMembersList";

export default function page() {
  return (
    <div className={styles.container}>
      <TitleBox title="Igniters" />
      <div className={styles.Team}>
        <TeamMembers1 />
      </div>
      <TitleBox title="Dreamers" />
      <div className={styles.Team}>
        <TeamMembers2 />
      </div>
    </div>
  );
}
