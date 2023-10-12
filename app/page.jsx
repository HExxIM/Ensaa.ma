//Components
import HeroSection from "./Components/Sections/Home/Hero/Hero";
import SectionInfosList from "./Components/UI/SectionsInfos";
import ClubsSection from "./Components/Sections/Home/ClubsSection/ClubsSection";
import SponsorsSection from "./Components/Sections/Home/SponsorsSection/SponsorsSection";
import ContactUs from "./Components/Sections/ContactUs/ContactUs.jsx";

export const metadata = {
  title: "ENSAA - Home",
  description: "Welcome to ADE ENSAA. Discover the latest news, clubs, events, and more.",
  keywords: "ADE, Dreamers, ENSAA, home, news, clubs, events, welcome"
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
