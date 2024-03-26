import styles from "./page.module.css";
import Image from "next/image";
import participants from "../../../../Database/participants.js";

function page({params}) {
    const name = params.name;
    let condidat = participants[1].find((item) => item.slug === name);
    if(!condidat){
        condidat = participants[0].find((item) => item.slug === name);
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} alt="Image" src={condidat.img} />
                </div>
                <div className={styles.titles}>
                    <h3 className={styles.name}>{condidat.name}</h3>
                    <span className={styles.post}>{condidat.niveau}</span>
                </div>
                <p className={styles.description}>{condidat.description}</p>
            </div>
        </div>
     );
}

export default page;