import Link from "next/link";
import Image from "next/image";
//svgs
import discordLogo from "../../../public/svg/SocialMedia/discordLogo.svg";
import instaLogo from "../../../public/svg/SocialMedia/instaLogo.svg";
import linkedinLogo from "../../../public/svg/SocialMedia/linkedinLogo.svg";
import facebookLogo from "../../../public/svg/SocialMedia/facebookLogo.svg";
import XLogo from "../../../public/svg/SocialMedia/XLogo.svg";

export default function socialMediaList({ iconsSize, iconsGap, brightness }) {
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

  const mediaStyles = {
    filter: `brightness(${brightness})`,
    cursor: "pointer",
  };

  const socialMediaList = socialMedia.map((media) => (
    <Link href={media.link} key={media.name} target="_blank">
      <Image
        style={mediaStyles}
        src={media.logo}
        height={iconsSize}
        width={iconsSize}
        alt={media.name}
      />
    </Link>
  ));

  const socialMediaStyles = {
    display: "flex",
    gap: `${iconsGap}`,
  };

  return <div style={socialMediaStyles}>{socialMediaList}</div>;
}
