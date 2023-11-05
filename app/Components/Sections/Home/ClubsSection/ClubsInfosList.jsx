import styles from "./sliderSection.module.css";
import clubsInfos from "../../../../Database/clubsInfos.js";

//components
import ClubCard from "./ClubCard";
import Link from "next/link";

export default function ClubsInfosList() {
  const ClubsInfosList = clubsInfos.map((club, index) => (
    <Link href={"/Clubs/" + club.slug} key={index}>
      <ClubCard key={club.slug} image={club.logo} name={club.name} />
    </Link>
  ));

  return <div className={styles.clubsList}>{ClubsInfosList}</div>;
}
