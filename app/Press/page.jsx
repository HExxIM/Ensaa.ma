//components
import MemberCard from "../Components/UI/MemberCard";
import styles from "./page.module.css";
import Ensapress from "./ensaPress.png";

export const metadata = {
  title: "ENSAA - Press",
  description: "Read about ENSAA in the press and media coverage.",
  keywords: "ADE, Dreamers, ENSAA, press, media, coverage, articles, news",
};

export default function page() {
  return (
    <div className={styles.container}>
      <MemberCard
        key="Ensa Press"
        image={Ensapress}
        name="Ensa Press"
        post=""
        linkedin="https://www.instagram.com/press.ensaa/"
        alt="Ensaa Press"
        description="A community of individuals dedicated to documenting and sharing noteworthy events within our school."
      />
    </div>
  );
}
