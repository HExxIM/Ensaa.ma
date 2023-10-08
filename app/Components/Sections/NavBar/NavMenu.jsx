import "./NavBar.css";
import Image from "next/image";

//svgs
import CloseNavMobile from "../../../../public/svg/icons/CloseNavMobile.svg";

//components
import Button from "../../UI/Button";

export default function NavMenu({ Navlist, setShowmenu }) {
  return (
    <div className="NavMenu">
      <div className="Navlist">
        {Navlist}
        <Button text="Contact us" link="/Contact" />
      </div>
      <Image
        onClick={() => setShowmenu(false)}
        className="closeMenu"
        alt="closeMenu"
        src={CloseNavMobile}
      />
    </div>
  );
}
