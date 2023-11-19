//components
import MemberCard from "../Components/UI/MemberCard";
import styles from "./page.module.css";
import Ensapress from "./ensaPress.png";
import EmptyState from "../Components/Sections/EmptyState/EmptyState";
import Button from "../Components/UI/Button";

export const metadata = {
  title: "ENSAA - Press",
  description: "Read about ENSAA in the press and media coverage.",
  keywords: "ADE, Dreamers, ENSAA, press, media, coverage, articles, news",
};

export default function page() {
  return (
    <div className={styles.container}>
      <EmptyState/>
      <Button icon={Ensapress} text="Ensa Press" link="https://www.instagram.com/press.ensaa/"/>
    </div>
  );
}
