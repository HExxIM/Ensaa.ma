import Image from "next/image";

export default function SliderCard({ image, name }) {
  const containerStyles = {
    height: "45vh",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "10px 30px",
    borderRadius: "20px",
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(201, 255, 254, 0.1) -8.41%, rgba(255, 237, 199, 0.1) 145.69%)",
    backdropFilter: "blur(50px)",
  };

  return (
    <div style={containerStyles}>
      <Image src={image} width={120} height={120} />
      <h2>{name}</h2>
    </div>
  );
}
