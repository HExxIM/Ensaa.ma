import InfosContainer from "../Sections/Home/InfosContainer/InfosContainer";

//svg
import EnsaLogo from "../../../public/svg/EnsaLogo.svg";
import ADELogo from "../../../public/svg/ADELogo.svg";
import moonLogo from "../../../public/svg/moonLogo.svg";

export default function SectionInfosList() {
  const sectionInfos = [
    {
      title: "Ensa agadir",
      logo: EnsaLogo,
      text: "L'Ecole Nationale des Sciences Appliquées-Agadir, c'est un établissement de formation d'ingénieur créée en 1999 qui offre, en cinq ans, aux jeunes bacheliers scrupuleusement sélectionnés, une formation professionnelle, diversifiée, complète et relativement polyvalente.",
    },
    {
      title: "Dreamers",
      logo: moonLogo,
      text: "We are the Dreamers, a dedicated team running for the student council of ENSA Agadir for the 2023-2024 mandate. Driven by our commitment to the students, our mission is to enhance their academic and personal journey. Drawing from diverse experiences in student affairs management, we advocate for student interests, foster a vibrant student life, and promote open communication with the administration. Our aim is to create a transparent, supportive environment where students are equipped with essential resources and opportunities. With a clear vision and shared ambition, we endeavor to elevate ENSA Agadir to unparalleled heights of excellence.",
    },
    {
      title: "ADE",
      logo: ADELogo,
      text: "As the ADE for ENSAA, our mission is to strengthen connections between students, professors, and administrators through effective communication. We aim to create an environment where ensaistes can easily engage with their professors and administration. Join us in transforming the student-administration dynamic into a partnership that empowers everyone at ENSAA. Together, we're building a harmonious academic community where ensaistes' voices are valued and acted upon.",
    },
  ];
  const SectionInfosList = sectionInfos.map((section) => (
    <InfosContainer
      key={section.title}
      title={section.title}
      text={section.text}
      logo={section.logo}
    />
  ));
  return <>{SectionInfosList}</>;
}
