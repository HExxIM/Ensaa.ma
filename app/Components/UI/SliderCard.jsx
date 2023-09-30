import Image from "next/image";

export default function SliderCard({ image, name }) {
  const containerStyles = {
    height: "280px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "25px",
    borderRadius: "20px",
    background:
      "linear-gradient(90deg, rgba(201, 255, 254, 0.1) -8.41%, rgba(255, 237, 199, 0.1) 145.69%)",
    backdropFilter: "blur(50px)",
  };
  const imageStyles = {
    height: "70%",
    width: "70%",
  };

  return (
    <div style={containerStyles}>
      <Image src={image} style={imageStyles} />
      <h2>{name}</h2>
    </div>
  );
}
