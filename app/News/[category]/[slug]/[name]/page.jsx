import styles from "./page.module.css";

function page({params}) {
    const name = params.name;
    return ( 
        <div className={styles.container}>{name}</div>
     );
}

export default page;