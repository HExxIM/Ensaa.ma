import styles from "./page.module.css";
import SocialMediaList from "../../UI/SocialMediaList";
import participants from "../../../Database/PublicSpeakingCompetition";
import Image from "next/image";

export const metadata = {
  title: "Ensaa - PublicSpeakingCompetition",
  description: "ADE Ensaa - PublicSpeakingCompetition",
};

function PublicSpeakingCompetition() {
  const links = {
    facebook:
      "https://www.facebook.com/photo/?fbid=788434646635668&set=a.454223453390124/",
    instagram: "https://www.instagram.com/p/C3GVkUvsNZU/",
  };
  return (
    <div className={styles.container}>
      <h1>L’ingénieur ENSAA prend la parole</h1>
      <div className={styles.infos}>
        <span>Event</span>
        <SocialMediaList
          direction="row"
          className={styles.SocialMediaList}
          links={links}
          iconsSize="23"
          iconsGap="1.2rem"
          brightness="1"
        />
      </div>
      <p>
        Découvrez les participants du concours L’INGÉNIEUR ENSAA PREND LA PAROLE
        ! Chaque image représente un individu talentueux prêt à mettre en valeur
        ses compétences. Gardez un œil sur les participants éliminés que nous
        marquons en niveau de gris. Qui émergera victorieux et prendra la parole
        ?
      </p>
      <div className={styles.participants}>
        {participants[0].map((participant, index) => {
          return (
            <div
              key={index}
              className={
                participant.in == true ? styles.participant : styles.out
              }
            >
              <Image
                className={styles.img}
                src={participant.img}
                alt={participant.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PublicSpeakingCompetition;
