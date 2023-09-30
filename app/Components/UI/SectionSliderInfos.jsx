
//svg
import ADELogo from "../../../public/svg/ADELogo.svg";

//components
import SliderSection from "../Sections/Home/InfosSlider/SliderSection";

export default function SliderInfos() {
    const sliderInfos = [
        {
          title: 'OUR CLUBS',
          images: [
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
            {
              name:'ADE',
              src: ADELogo
            },
          ],
          boxHeight: '80%'
        },
        {
          title: 'OUR SPONSORS',
          images: [],
          boxHeight: '50%'
        }
    ];

    const SliderInfosList = sliderInfos.map((info)=>(
        <SliderSection
            key={info.title}
            title={info.title}
            images={info.images}
            boxHeight={info.boxHeight}
          />
    ));

  return (
    <>{SliderInfosList}</>
  )
}
