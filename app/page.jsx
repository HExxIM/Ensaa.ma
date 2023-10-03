//Components
import HeroSection from "./Components/Sections/Home/Hero/Hero";
import SectionInfosList from "./Components/UI/SectionsInfos";
import ClubsSection from "./Components/Sections/Home/ClubsSection/ClubsSection";
import ContactUs from "./Components/Sections/ContactUs/ContactUs.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionInfosList />
      <ClubsSection />
      <ContactUs />
    </>
  );
}
