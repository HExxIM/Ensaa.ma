import Image from "next/image";
//svg
import Vetcam from "../../../../../public/svg/Sponsors/Vetcam.svg";
import institutFrancais from "../../../../../public/svg/Sponsors/institutFrancais.svg";
import AgadirMobilite from "../../../../../public/svg/Sponsors/AgadirMobilite.svg";
import CRISoussmassa from "../../../../../public/svg/Sponsors/CRISoussmassa.png";
import LPEE from "../../../../../public/svg/Sponsors/LPEE.svg";
import Logo2M from "../../../../../public/svg/Sponsors/Logo2M.svg";
import aloula from "../../../../../public/svg/Sponsors/aloula.svg";
import urbaineAga from "../../../../../public/svg/Sponsors/urbaineAga.svg";
import Anapec from "../../../../../public/svg/Sponsors/Anapec.svg";
import SocieteGenerale from "../../../../../public/svg/Sponsors/SocieteGenerale.svg";

export default function SponsorsInfosList() {
  const SponsorsInfos = [
    {
      name: "Vetcam",
      src: Vetcam,
    },
    {
      name: "Institute français",
      src: institutFrancais,
    },
    {
      name: "Agadir mobilité",
      src: AgadirMobilite,
    },
    {
      name: "CRI Souss massa",
      src: CRISoussmassa,
    },
    {
      name: "LPEE",
      src: LPEE,
    },
    {
      name: "2M",
      src: Logo2M,
    },
    {
      name: "Al Oula",
      src: aloula,
    },
    {
      name: "agence urbaine agadir",
      src: urbaineAga,
    },
    {
      name: "Anapec",
      src: Anapec,
    },
    {
      name: "Societe Generale",
      src: SocieteGenerale,
    },
  ];

  const SponsorsInfosList = SponsorsInfos.map((club, index) => (
    <Image key={index} src={club.src} name={club.name} height={80} />
  ));
  return <div>{SponsorsInfosList}</div>;
}
