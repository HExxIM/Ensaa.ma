import Image from "next/image";

//Images
import emptyStateIllustration from "../../../../public/images/emptyStateIllustration.webp";
import shapeBlur from "../../../../public/images/shapeBlur.webp";

export default function EmptyState() {
  const EmptyStateStyles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // margin: "14vh 5vw 5vh 5vw ",
      position: "relative",
      height: "50vh",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
    p: {
      fontSize: "2.2rem",
      fontWeight: "200",
      textAlign: "center",
    },
    blurTop: {
      position: "absolute",
      top: "-40vh",
      right: "50vh",
      scale: "1.3",
      opacity: "0.7",
    },
  };
  return (
    <div style={EmptyStateStyles.container}>
      <div style={EmptyStateStyles.main}>
        <Image src={emptyStateIllustration} alt="Empty State" />
        <p style={EmptyStateStyles.p}>Oops</p>
        <p style={EmptyStateStyles.p}>There's nothing here, yet</p>
      </div>
      <Image
        src={shapeBlur}
        alt="blurTop"
        style={EmptyStateStyles.blurTop}
      ></Image>
    </div>
  );
}
