import Image from "next/image";

const styles = {
  card: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "0.40219rem",
    background:
      "linear-gradient(178deg, rgba(5, 3, 17, 0.3) 33.7%, rgba(38, 169, 167, 0.3) 186.88%)",
    backdropFilter: "blur(63px)",
    width: "11.25rem",
    height: "14rem",
    padding: "1.5rem 0.5rem",
    gap: "5%",
  },
  img: {
    borderRadius: "100%",
    width: "52%",
    height: "45%",
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
      <Image style={styles.img} src={image} />
      <div style={styles.titles}>
        <h3 style={styles.name}>{name}</h3>
        <span style={styles.post}>{post}</span>
      </div>
      <p style={styles.description}>{description}</p>
    </div>
  );
}
