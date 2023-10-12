//Components
import HeroSection from "./Components/Sections/Home/Hero/Hero";
import SectionInfosList from "./Components/UI/SectionsInfos";
import ClubsSection from "./Components/Sections/Home/ClubsSection/ClubsSection";
import SponsorsSection from "./Components/Sections/Home/SponsorsSection/SponsorsSection";
import ContactUs from "./Components/Sections/ContactUs/ContactUs.jsx";

export const metadata = {
  title: "Ensaa - Home",
  description: "ADE Ensaa",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionInfosList />
      <ClubsSection />
      <SponsorsSection />
      <ContactUs />
    </>
  );
}
