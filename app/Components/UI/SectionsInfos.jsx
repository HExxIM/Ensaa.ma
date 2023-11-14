import InfosContainer from "../Sections/Home/InfosContainer/InfosContainer";

//svg
import EnsaLogo from "../../../public/svg/AdeAssets/EnsaLogo.svg";
import ADELogo from "../../../public/svg/AdeAssets/ADELogo.svg";
import moonLogo from "../../../public/svg/AdeAssets/moonLogo.svg";

export default function SectionInfosList() {
  const sectionInfos = [
    {
      title: "Ensa agadir",
      logo: EnsaLogo,
      text: "Established in 1999 as part of Ibn ZOHR University, ENSA-AGADIR is a prominent engineering school in Morocco, offering a five-year program to highly selected high school graduates. As a key player in the ENSA network, it focuses on producing globally competitive engineers through a comprehensive two-year preparatory cycle and specialized disciplines such as Process Engineering, Civil Engineering, Industrial Engineering, Computer Engineering, Electrical Engineering, Finance, and Mechanical Engineering. Committed to excellence and innovation, ENSA-AGADIR equips students for impactful contributions in the engineering landscape.",
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
  const SectionInfosList = sectionInfos.map((section, index) => (
    <InfosContainer
      key={section.title}
      title={section.title}
      text={section.text}
      logo={section.logo}
      position={index % 2 === 0 ? "right" : "left"}
    />
  ));
  return <>{SectionInfosList}</>;
}
