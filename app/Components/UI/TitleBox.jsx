import Image from "next/image";

//svg
import BoxTitle from "../../../public/svg/icons/BoxTitle.svg";

export default function TitleBox({ title }) {
  const BoxStyles = {
    width: "22rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const BoxContainerStyles = {
    width: "100%",
  };

  const titleStyles = {
    position: "absolute",
    textTransform: "uppercase",
    fontFamily: "var(--font-primary)",
    fontWeight: "600",
    paddingRight: "1rem",
  };

  return (
    <dir style={BoxStyles}>
      <Image style={BoxContainerStyles} src={BoxTitle}></Image>
      <h1 style={titleStyles}>{title}</h1>
    </dir>
  );
}
