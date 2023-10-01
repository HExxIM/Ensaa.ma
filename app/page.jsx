//Components
import HeroSection from "./Components/Sections/Home/Hero/Hero";
import SectionInfosList from "./Components/UI/SectionsInfos";
import SectionSliderInfos from "./Components/UI/SectionSliderInfos";
import ContactUs from "./Components/Sections/Home/ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionInfosList />
      <SectionSliderInfos/>
      <ContactUs/>
    </>
  );
}
