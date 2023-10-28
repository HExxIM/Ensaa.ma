import styles from "./page.module.css";
//components
import EmptyState from "../Components/Sections/EmptyState/EmptyState";
import ClubCard from "../Components/UI/ClubCard/ClubCard";
//data
import clubsInfos from "../Database/clubsInfos";

export const metadata = {
  title: "ENSAA - Clubs",
  description: "Explore the diverse clubs and organizations at ENSAA.",
  keywords:
    "ADE, Dreamers, ENSAA, clubs, organizations, student groups, explore",
};

export default function page() {
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
  const shuffledClubsInfos = shuffleArray(clubsInfos);

  // Map the shuffled array to ClubCard components
  const clubCards = shuffledClubsInfos.map((club, index) => (
    <ClubCard
      key={club.name}
      image={club.logo}
      name={club.name}
      description={club.description}
      links={club.links}
      index={index}
      slug={club.slug}
    />
  ));
  return (
    <div className={styles.container}>
      <h1>
        <span>Discover</span> our clubs
      </h1>
      <div className={styles.cardsContainer}>{clubCards}</div>
    </div>
  );
}
