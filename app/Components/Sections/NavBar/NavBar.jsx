"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";
import { usePathname } from "next/navigation";
//svgs
import dreamersLogo from "../../../../public/svg/dreamersLogo.svg";

//components
import Button from "../../UI/Button";

export default function NavBar() {
  const pathname = usePathname();

  const NavElements = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "News",
      path: "/News",
    },
    {
      title: "Clubs",
      path: "/Clubs",
    },
    {
      title: "Press",
      path: "/Press",
    },
    {
      title: "Team",
      path: "/Team",
    },
  ];

  const ElementActiveStyles = (path) => {
    const active = {
      background: "var(--light-glow)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "700",
    };
    return pathname === path ? active : { color: "white" };
  };

  const NavList = NavElements.map((Element) => (
    <Link
      style={ElementActiveStyles(Element.path)}
      href={Element.path}
      key={Element.title}
    >
      {Element.title}
    </Link>
  ));

  return (
    <div className={styles.NavContainer}>
      <Image className={styles.logo} src={dreamersLogo}></Image>
      <div className={styles.NavList}>{NavList}</div>
      <Button text="Contact us" link="/Contact" />
    </div>
  );
}
