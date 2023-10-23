"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "./NavBar.css";

//svgs
import dreamersLogo from "../../../../public/svg/AdeAssets/dreamersLogo.svg";
import navMobile from "../../../../public/svg/icons/navMobile.svg";

//components
import Button from "../../UI/Button";
import NavMenu from "./NavMenu";
import ClickOutsideHandler from "../../ClickOutsideHandler";

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

  const [showmenu, setShowmenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null); // changed from window.innerWidth

  const handleOutsideClick = () => {
    setShowmenu(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    setShowmenu(false); // Ensure that the menu is initially hidden
  }, [windowWidth]); // Trigger this effect when windowWidth changes


  return (
    <ClickOutsideHandler onClickOutside={handleOutsideClick}>
      <div className="NavContainer">
        <Link className="logo" href="/">
          <Image src={dreamersLogo} alt="Logo"></Image>
        </Link>
        {(windowWidth >= 820)  && <div className="NavList">{NavList}</div>}
        {showmenu && <NavMenu setShowmenu={setShowmenu} Navlist={NavList} />}
        {(windowWidth >= 820) ? (
          <Button text="Contact us" link="/Contact" />
        ) : (
          <Image
            className="menuButton"
            alt="menuButton"
            onClick={() => setShowmenu(!showmenu)}
            src={navMobile}
          />
        )}
      </div>
    </ClickOutsideHandler>
  );
}
