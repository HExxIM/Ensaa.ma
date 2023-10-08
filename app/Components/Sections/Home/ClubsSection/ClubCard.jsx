import Image from "next/image";

export default function ClubCard({ image, name }) {
  const containerStyles = {
    height: "250px",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3vh 1vw 4vh 1vw",
    borderRadius: "20px",
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(201, 255, 254, 0.1) -8.41%, rgba(255, 237, 199, 0.1) 145.69%)",
    backdropFilter: "blur(50px)",
  };

  const imageContainerStyles = {
    position: "relative",
    height: "60%",
    margin: "auto 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyles}>
      <div style={imageContainerStyles}>
        <Image src={image} alt={name} width={120} />
      </div>
      <h3>{name}</h3>
    </div>
  );
}
