"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./NavBar.css";

//svgs
import dreamersLogo from "../../../../public/svg/AdeAssets/dreamersLogo.svg";
import navMobile from "../../../../public/svg/icons/navMobile.svg";

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
    <div className="NavContainer">
      <Link className="logo" href="/">
        <Image src={dreamersLogo}></Image>
      </Link>
      <div className="NavList">{NavList}</div>
      <Button text="Contact us" link="/Contact" />
    </div>
  );
}
