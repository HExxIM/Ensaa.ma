"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState,useEffect } from "react";
import "./NavBar.css";

//svgs
import dreamersLogo from "../../../../public/svg/AdeAssets/dreamersLogo.svg";
import navMobile from "../../../../public/svg/icons/navMobile.svg";

//components
import Button from "../../UI/Button";
import NavMenu from "./NavMenu";

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showmenu, setShowmenu] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      setShowmenu(newWindowWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="NavContainer">
      <Link className="logo" href="/">
        <Image src={dreamersLogo}></Image>
      </Link>
      {!(window.innerWidth <= 600)
        && <div className="NavList">{NavList}</div>}
      {showmenu && <NavMenu Navlist={NavList}/>}
      {!(window.innerWidth <= 600)
        ? <Button text="Contact us" link="/Contact" /> 
        : <Image onClick={() => setShowmenu(!showmenu)} src={navMobile}/>}
    </div>
  );
}
