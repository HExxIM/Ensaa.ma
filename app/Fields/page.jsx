import styles from "./page.module.css";
//components
import NewsCard from "../Components/UI/NewsCard/NewsCard";

//data
import orientaion from "../Database/Fields.js";

export const metadata = {
    title: "ENSAA - Fields of Study",
    description: "Explore the various fields of study offered at ENSAA.",
    keywords: "ADE, Dreamers, ENSAA, fields, study, engineering, specialization",
};
    

function Fields() {
    const fields = orientaion.map((item) => (
        <NewsCard
          title={item.title}
          description={item.description}
          img={item.coverimg}
          slug={item.slug}
          direction="column"
          link={item.content ? "/Fields/" + item.slug : ''}
        />
      ));

    return ( 
    <div className={styles.container}>
      <h1>
        Engineering <span>bla filtre</span>
      </h1>
      <p>Explore the academic pathways offered at ENSAA, covering a wide array of fields including electrical engineering, computer science, and more. Our programs are designed to provide students with a comprehensive education, blending theoretical knowledge with practical skills.</p>
      <div className={styles.allFields}>{fields}</div>
    </div>
     );
}

export default Fields;