import Link from "next/link";
import Image from "next/image";
//svgs
import discordLogo from "../../../public/svg/discordLogo.svg";
import instaLogo from "../../../public/svg/instaLogo.svg";
import linkedinLogo from "../../../public/svg/linkedinLogo.svg";
import facebookLogo from "../../../public/svg/facebookLogo.svg";
import XLogo from "../../../public/svg/XLogo.svg";

export default function socialMediaList() {
  const socialMedia = [
    {
      name: "instagram",
      link: "https://www.instagram.com/ade.ensaa/",
      logo: instaLogo,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/adeensaa/",
      logo: facebookLogo,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/ade-ensa-agadir",
      logo: linkedinLogo,
    },
    {
      name: "X",
      link: "#",
      logo: XLogo,
    },
    {
      name: "discord",
      link: "https://discord.gg/3FyqYt7",
      logo: discordLogo,
    },
  ];

  const socialMediaList = socialMedia.map((media) => (
    <Link href={media.link} key={media.name} target="_blank">
      <Image src={media.logo} height="30" width="30" alt={media.name} />
    </Link>
  ));

  const socialMediaStyles = {
    display: "flex",
    gap: "1.5rem",
  };

  return <div style={socialMediaStyles}>{socialMediaList}</div>;
}
