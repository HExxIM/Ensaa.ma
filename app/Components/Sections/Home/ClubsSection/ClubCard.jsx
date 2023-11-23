import Image from "next/image";

export default function ClubCard({ image, name, slug }) {
  const containerStyles = {
    height: "205px",
    width: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3vh 10px 4vh 10px",
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

  const titleStyles = {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "600",
    marginTop: "20px",
  };

  return (
    <div style={containerStyles}>
      <div style={imageContainerStyles}>
        <Image 
          src={image} 
          alt={slug} 
          width={90} 
          placeholder={typeof image === 'string' && image.endsWith('.svg')? "empty" : "blur"}
          blurDataURL="undefined"
        />
      </div>
      <h1 style={titleStyles}>{name}</h1>
    </div>
  );
}
