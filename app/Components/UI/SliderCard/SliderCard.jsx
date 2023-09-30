import Image from "next/image";
import Styles from './sliderCard.module.css'

export default function SliderCard({image,boxHeight,name}) {

    // const containerStyles = {
    //     height: `${boxHeight}`,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    // };

  return (
    <div className={Styles.container}>
        <Image src={image}/>
        <h2>{name}</h2>
    </div>
  )
}