//svg
import ADELogo from "../../../public/svg/ADELogo.svg";
import EnsaLogo from "../../../public/svg/EnsaLogo.svg";
import moonLogo from "../../../public/svg/moonLogo.svg";

//components
import SliderSection from "../Sections/Home/InfosSlider/SliderSection";

export default function SliderInfos() {
  const sliderInfos = [
    {
      title: "OUR CLUBS",
      images: [
        {
          name: "ADE",
          src: ADELogo,
        },
        {
          name: "Ensa Agadir",
          src: EnsaLogo,
        },
        {
          name: "Dreamers",
          src: moonLogo,
        },
        {
          name: "ADE",
          src: ADELogo,
        },
        {
          name: "ADE",
          src: ADELogo,
        },
      ],
    },
    {
      title: "OUR SPONSORS",
      images: [],
    },
  ];

  const SliderInfosList = sliderInfos.map((info) => (
    <SliderSection key={info.title} title={info.title} images={info.images} />
  ));

  return <>{SliderInfosList}</>;
}
