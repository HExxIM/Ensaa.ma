import styles from "./sliderSection.module.css";
import clubsInfos from "../../../../Database/clubsInfos.js";

//components
import ClubCard from "./ClubCard";
import Link from "next/link";

export default function ClubsInfosList() {
  // Function to shuffle an array randomly using Fisher-Yates shuffle
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  // Shuffle the clubsInfos array
  const shuffledclubsInfos = shuffleArray(clubsInfos);

  const ClubsInfosList = shuffledclubsInfos.map((club, index) => (
    <Link href={"/Clubs/" + club.slug} key={index}>
      <ClubCard
        key={club.slug}
        slug={club.slug}
        image={club.logo}
        name={club.name}
      />
    </Link>
  ));

  return <div className={styles.clubsList}>{ClubsInfosList}</div>;
}
