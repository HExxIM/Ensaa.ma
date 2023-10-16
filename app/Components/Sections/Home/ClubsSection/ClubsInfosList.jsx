import styles from "./sliderSection.module.css";
import clubsInfos from "../../../../Database/clubsInfos.js";

//components
import ClubCard from "./ClubCard";

export default function ClubsInfosList() {
  const ClubsInfosList = clubsInfos.map((club, index) => (
    <ClubCard key={index} image={club.src} name={club.name} />
  ));

  return <div className={styles.clubsList}>{ClubsInfosList}</div>;
}
