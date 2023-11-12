import "./NavBar.css";
import Image from "next/image";

//svgs
import CloseNavMobile from "../../../../public/svg/icons/CloseNavMobile.svg";

//components
import Button from "../../UI/Button";

export default function NavMenu({ Navlist, setShowmenu, showmenu }) {
  return (
    <div className={`NavMenu ${showmenu ? 'show' : ''}`}>
      <div className="Navlist">
        {Navlist}
        <Button text="Contact us" link="/Contact" />
      </div>
      <Image
        onClick={() => setShowmenu(false)}
        className={`closeMenu ${showmenu ? '' : 'close'}`}
        alt="closeMenu"
        src={CloseNavMobile}
      />
    </div>
  );
}
