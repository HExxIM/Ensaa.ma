//Components
import HeroSection from "./Components/Sections/Home/Hero/Hero";
import SectionInfosList from "./Components/UI/SectionsInfos";
import SectionSliderInfos from "./Components/UI/SectionClubsInfos";
import ContactUs from "./Components/Sections/ContactUs/ContactUs.jsx";

export default function Home() {
  return (
    <>
      {/* <HeroSection />
      <SectionInfosList /> */}
      <SectionSliderInfos />
      <ContactUs />
    </>
  );
}
