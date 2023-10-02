import Image from "next/image";

export default function SliderCard({ image, name }) {
  const containerStyles = {
    height: "42vh",
    width: "200px",
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

  return (
    <div style={containerStyles}>
      <Image src={image} width={140} height={140} />
      <h2>{name}</h2>
    </div>
  );
}
