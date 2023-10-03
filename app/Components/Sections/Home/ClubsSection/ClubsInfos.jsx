//svg
import apps from "../../../../../public/svg/ClubsLogos/apps.svg";
import fsf from "../../../../../public/svg/ClubsLogos/fsf.svg";
import Enactus from "../../../../../public/svg/ClubsLogos/Enactus.svg";
import tac from "../../../../../public/svg/ClubsLogos/tac.png";
import meca from "../../../../../public/svg/ClubsLogos/meca.png";
import CRRT from "../../../../../public/svg/ClubsLogos/CRRT.png";
import Harmony from "../../../../../public/svg/ClubsLogos/Harmony.png";
import Ecolos from "../../../../../public/svg/ClubsLogos/Ecolos.png";
import Indus from "../../../../../public/svg/ClubsLogos/Indus.png";
import sportif from "../../../../../public/svg/ClubsLogos/sportif.png";
import Social from "../../../../../public/svg/ClubsLogos/Social.png";
import Btp from "../../../../../public/svg/ClubsLogos/Btp.png";
import CreaArt from "../../../../../public/svg/ClubsLogos/CreaArt.png";

//components
import ClubCard from "./ClubCard";

export default function ClubsInfosList() {
  const ClubsInfos = [
    {
      name: "APPS Club",
      src: apps,
    },
    {
      name: "FSF Club",
      src: fsf,
    },
    {
      name: "Club Tac",
      src: tac,
    },
    {
      name: "Club Mecanique",
      src: meca,
    },
    {
      name: "Club Robotique",
      src: CRRT,
    },
    {
      name: "Club Enactus",
      src: Enactus,
    },
    {
      name: "Club Harmony",
      src: Harmony,
    },
    {
      name: "Club Ecolos",
      src: Ecolos,
    },
    {
      name: "Club Industriel",
      src: Indus,
    },
    {
      name: "Club Sportif",
      src: sportif,
    },
    {
      name: "Club Social",
      src: Social,
    },
    {
      name: "Club BTP",
      src: Btp,
    },
    {
      name: "Club CreaArt",
      src: CreaArt,
    },
  ];

  const ClubsInfosList = ClubsInfos.map((club, index) => (
    <ClubCard key={index} image={club.src} name={club.name} />
  ));

  return <>{ClubsInfosList}</>;
}
