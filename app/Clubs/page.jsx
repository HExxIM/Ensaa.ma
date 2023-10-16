import styles from "./page.module.css";
//components
import EmptyState from "../Components/Sections/EmptyState/EmptyState";
import ClubCard from "../Components/UI/ClubCard/ClubCard";

export const metadata = {
  title: "ENSAA - Clubs",
  description: "Explore the diverse clubs and organizations at ENSAA.",
  keywords: "ADE, Dreamers, ENSAA, clubs, organizations, student groups, explore"
};

export default function page() {
  return (
    <div className={styles.container}>
      <h1><span>Discover</span> our clubs</h1>
    </div>
  )
}
