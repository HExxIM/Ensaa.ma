"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
//svgs
import dreamersLogo from "../../../../public/svg/AdeAssets/dreamersLogo.svg";

//components
import Button from "../../UI/Button";

const navStyles = {
  NavContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "11%",
    width: "100%",
    position: "fixed",
    zIndex: 10,
    background:
      "linear-gradient(180deg, rgba(63, 215, 78, 0.03) 0%, rgba(63, 215, 78, 0.03) 75.48%, rgba(63, 215, 78, 0) 100%)",
    backdropFilter: "blur(5px)",
    paddingLeft: "4%",
    paddingRight: "5%",
  },
  logo: {
    transform: "scale(0.8)",
  },
  NavList: {
    display: "flex",
    justifyContent: "space-between",
    width: "25vw",
    fontFamily: "var(--font-primary)",
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: 500,
  },
};

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
    <div style={navStyles.NavContainer}>
      <Link style={navStyles.logo} href="/">
        <Image src={dreamersLogo}></Image>
      </Link>
      <div style={navStyles.NavList}>{NavList}</div>
      <Button text="Contact us" link="/Contact" />
    </div>
  );
}
