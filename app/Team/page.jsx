import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "ENSAA - Team",
  description: "Meet the dedicated team behind ENSAA and learn more about us.",
  keywords: "ADE, Dreamers, ENSAA, team, members, about us, leadership, dedicated"
};

// images
import shapeBlur from "../../public/images/shapeBlur.webp";

// components
import TeamMembersList from "./TeamMembersList";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.Team}>
        <TeamMembersList />
      </div>
      <Image
        src={shapeBlur}
        alt="shapeBlur"
        className={styles.blurBottom}
      ></Image>
      <Image src={shapeBlur} alt="shapeBlur" className={styles.blurTop}></Image>
    </div>
  );
}
