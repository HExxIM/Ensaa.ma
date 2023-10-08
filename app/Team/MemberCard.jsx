import Image from "next/image";

const styles = {
  card: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    background:
      "linear-gradient(178deg, rgba(5, 3, 17, 0.3) 33.7%, rgba(38, 169, 167, 0.3) 186.88%)",
    backdropFilter: "blur(63px)",
    width: "190px",
    height: "15rem",
    padding: "1.5rem 0.5rem",
    gap: "10px",
  },
  img: {
    borderRadius: "100%",
    width: "60%",
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  name: {
    fontSize: "0.85rem",
  },
  post: {
    fontSize: "xx-small",
    opacity: "0.5",
  },
  description: {
    fontSize: "x-small",
    fontWeight: "400",
    lineHeight: "160%",
    textAlign: "center",
  },
};

export default function MemberCard({ image, name, post, description }) {
  return (
    <div style={styles.card}>
      <Image style={styles.img} alt="Image" src={image} />
      <div style={styles.titles}>
        <h3 style={styles.name}>{name}</h3>
        <span style={styles.post}>{post}</span>
      </div>
      <p style={styles.description}>{description}</p>
    </div>
  );
}
