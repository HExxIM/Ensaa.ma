import Image from "next/image";

//svgs
import ErrorIllustration from "../public/images/ErrorIllustration.webp";

export default function NotFound() {
  const ErrorContainerStyle = {
    height: "83vh",
    padding: "7% 5% 2% 5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  };
  const ErrorIllustrationStyle = {
    opacity: "0.3",
    scale: "1.07",
    transform: "translateX(2%)",
  };

  const Error404TextStyle = {
    allText: {
      position: "absolute",
      textAlign: "center",
      fontFamily: "var(--font-primary)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
    },
    h1: {
      background: "var(--light-glow)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "600",
      fontSize: "7rem",
    },
    p: {
      color: "#fff",
      fontSize: "3rem",
      fontWeight: "200",
      textTransform: "capitalize",
    },
  };

  return (
    <div style={ErrorContainerStyle}>
      <Image
        src={ErrorIllustration}
        alt="Error 404"
        style={ErrorIllustrationStyle}
      />
      <div style={Error404TextStyle.allText}>
        <h1 style={Error404TextStyle.h1}>ERROR 404</h1>
        <p style={Error404TextStyle.p}>Page not found</p>
      </div>
    </div>
  );
}
