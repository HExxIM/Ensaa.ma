import Image from "next/image";
import Link from "next/link";

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
  imgContainer: {
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  name: {
    fontSize: "0.87rem",
  },
  post: {
    fontSize: "x-small",
    opacity: "0.5",
  },
  description: {
    fontSize: "x-small",
    fontWeight: "400",
    lineHeight: "160%",
    textAlign: "center",
  },
};

export default function MemberCard({
  image,
  name,
  post,
  description,
  linkedin,
}) {
  return (
    <Link href={linkedin ?? ""} target="_blank" style={styles.card}>
      <div style={styles.imgContainer}>
        <Image 
          placeholder="blur" 
          style={styles.img} 
          alt="Image" 
          src={image} 
        />
      </div>
      <div style={styles.titles}>
        <h3 style={styles.name}>{name}</h3>
        <span style={styles.post}>{post}</span>
      </div>
      <p style={styles.description}>{description}</p>
    </Link>
  );
}
