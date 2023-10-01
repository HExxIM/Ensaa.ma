import Image from "next/image";

//svgs
import ErrorIllustration from "../public/images/ErrorIllustration.webp";

export default function NotFound() {
  const ErrorContainerStyle = {
    height: "100vh",
    padding: "7% 5% 2% 5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  };
  const ErrorIllustrationStyle = {
    // height: "100%",
    opacity: "0.4",
    // objectFit: "cover",
    // mixBlendMode: "color-dodge",
  };

  const Error404TextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: "#fff",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textShadow: "0px 0px 20px rgba(0,0,0,0.5)",
  };
  return (
    <div style={ErrorContainerStyle}>
      <Image
        src={ErrorIllustration}
        alt="Error 404"
        style={ErrorIllustrationStyle}
      />
      <div style={Error404TextStyle}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}
