import styles from "./page.module.css";
import Image from "next/image";
//data
import Fields from "../../Database/Fields.js";

export const metadata = {
    description: "Explore the various fields of study offered at ENSAA.",
    keywords: "ADE, Dreamers, ENSAA, fields, study, engineering, specialization",
};

function page({ params }) {
    const slug = params.slug;
    metadata.title = `ENSAA - Fields - ${slug}`;
    const Field = Fields.find((item) => item.slug === slug);
    return (
        <div className={styles.container}>
            <h1>{Field.title}</h1>
            <p>{Field.description}</p>
        {Field.content && Field.content.map((item, index) => (
        <>
          {item.text && <p dangerouslySetInnerHTML={{__html: item.text}}></p>}
          {item.img && (
            <div className={styles.imgContainer}>
              <Image
                placeholder="blur"
                className={styles.img}
                alt={slug}
                src={item.img}
              />
            </div>
          )}
          {item.youtubeId && (
            <div className={styles.iframeContainer}>
              <iframe
                src={"https://www.youtube.com/embed/" + item.youtubeId}
                title={Field.slug}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </>
      ))}
        </div>
     );
}

export default page;