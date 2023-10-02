import Image from 'next/image';

//Images
import emptyStateIllustration from '../../../../public/images/emptyStateIllustration.webp'
import shapeBlur from "../../../../public/images/shapeBlur.webp";

export default function EmptyState() {
    const EmptyStateStyles = {
        container:{
            height: "83vh",
            display:'flex',
            justifyContent: "center",
            alignItems: "center",
            position:'relative'
        },
        main:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
        },
        p:{
            fontSize: "2.2rem",
            fontWeight: "200",
        },
        blurBottom:{
            position:'absolute',
            bottom: '-45vh',
            left: '-20vw'
        },
        blurTop:{
            position:'absolute',
            top: '-35vh',
            right: '-15vw'
        }
    }
  return (
    <div style={EmptyStateStyles.container}>
        <div style={EmptyStateStyles.main}>
            <Image src={emptyStateIllustration} alt="Empty State"/>
            <p style={EmptyStateStyles.p}>Oops</p>
            <p style={EmptyStateStyles.p}>There's nothing here, yet</p>
        </div>
        <Image src={shapeBlur} style={EmptyStateStyles.blurBottom}></Image>
        <Image src={shapeBlur} style={EmptyStateStyles.blurTop}></Image>
    </div>
  )
}
