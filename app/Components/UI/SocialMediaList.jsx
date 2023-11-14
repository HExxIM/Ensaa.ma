import Link from "next/link";
import Image from "next/image";
//svgs
import discordLogo from "../../../public/svg/SocialMedia/discordLogo.svg";
import instaLogo from "../../../public/svg/SocialMedia/instaLogo.svg";
import linkedinLogo from "../../../public/svg/SocialMedia/linkedinLogo.svg";
import facebookLogo from "../../../public/svg/SocialMedia/facebookLogo.svg";
import XLogo from "../../../public/svg/SocialMedia/XLogo.svg";
import WebsiteLogo from "../../../public/svg/SocialMedia/WebsiteLogo.svg";
import tiktokLogo from "../../../public/svg/SocialMedia/tiktokLogo.svg";
import youtubeLogo from "../../../public/svg/SocialMedia/youtubeLogo.svg";

export default function socialMediaList({
  iconsSize,
  iconsGap,
  brightness,
  links,
  direction,
}) {
  const socialMedia = [
    {
      name: "instagram",
      link: links.instagram,
      logo: instaLogo,
    },
    {
      name: "facebook",
      link: links.facebook,
      logo: facebookLogo,
    },
    {
      name: "linkedin",
      link: links.linkedin,
      logo: linkedinLogo,
    },
    {
      name: "X",
      link: links.X,
      logo: XLogo,
    },
    {
      name: "discord",
      link: links.discord,
      logo: discordLogo,
    },
    {
      name: "tiktok",
      link: links.tiktok,
      logo: tiktokLogo,
    },
    {
      name: "website",
      link: links.website,
      logo: WebsiteLogo,
    },
    {
      name: "youtube",
      link: links.youtube,
      logo: youtubeLogo,
    },
  ];

  const mediaStyles = {
    filter: `brightness(${brightness})`,
    cursor: "pointer",
  };

  const socialMediaList = socialMedia.map(
    (media) =>
      media.link && (
        <Link href={media.link ?? ""} key={media.name} target="_blank">
          <Image
            style={mediaStyles}
            src={media.logo}
            height={iconsSize}
            // width={iconsSize}
            alt={media.name}
          />
        </Link>
      )
  );

  const socialMediaStyles = {
    display: "flex",
    gap: `${iconsGap}`,
    flexDirection: `${direction}`,
  };

  return <div style={socialMediaStyles}>{socialMediaList}</div>;
}
