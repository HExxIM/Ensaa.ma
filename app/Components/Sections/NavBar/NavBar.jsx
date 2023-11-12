"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "./NavBar.css";

//svgs
import dreamersLogo from "../../../../public/svg/AdeAssets/dreamersLogo.svg";
import navMobile from "../../../../public/svg/icons/navMobile.svg";
import loading from "../../../../public/svg/loading3.svg";

//components
import Button from "../../UI/Button";
import NavMenu from "./NavMenu";

//utils
import ClickOutsideHandler from "../../UI/ClickOutsideHandler";
import useMediaQuery from "../../../hooks/useMediaQuery";

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

  const handleOutsideClick = () => {
    setShowmenu(false);
  };

  useEffect(() => {
    setShowmenu(false); // Ensure that the menu is initially hidden
  }, []);

  const { targetReached, isInitialized } = useMediaQuery(800);

  return (
    <ClickOutsideHandler onClickOutside={handleOutsideClick}>
      <div className="NavContainer">
        <Link className="logo" href="/">
          <Image src={dreamersLogo} alt="Logo"></Image>
        </Link>
        <div className="NavList">{NavList}</div>
        {showmenu && <NavMenu setShowmenu={setShowmenu} showmenu={showmenu} Navlist={NavList} />}
        {(isInitialized && !targetReached) ? 
          <Button className="contactUsButton" text="Contact us" link="/Contact" />:
            <Image width={147} src={loading} className="loading" alt="loading"></Image>
        }
        <Image
          className="menuButton"
          alt="menuButton"
          onClick={() => setShowmenu(!showmenu)}
          src={navMobile}
        />
      </div>
    </ClickOutsideHandler>
  );
}
