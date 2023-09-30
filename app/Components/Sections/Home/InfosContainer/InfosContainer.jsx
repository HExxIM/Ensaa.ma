<<<<<<< HEAD:app/Components/UI/InfosContainer/InfosContainer.jsx
import Image from "next/image";
import styles from "./infosContainer.module.css";
//svg
import shapeBlur from "../../../../public/images/shapeBlur.webp";
//components
import TitleBox from '../../../UI/TitleBox';
=======
>>>>>>> c44abb8f4f72f4b3c1a7306d26c13673642625e0:app/Components/Sections/Home/InfosContainer/InfosContainer.jsx

export default function InfosContainer({ text, logo, title }) {
  return (
    <div className={styles.container}>
<<<<<<< HEAD:app/Components/UI/InfosContainer/InfosContainer.jsx
<TitleBox title={title}/>
=======
>>>>>>> c44abb8f4f72f4b3c1a7306d26c13673642625e0:app/Components/Sections/Home/InfosContainer/InfosContainer.jsx
      <div className={styles.mainInfos}>
        <p className={styles.text}>{text}</p>
        <Image className={styles.logo} src={logo}></Image>
      </div>
      <Image className={styles.blurRight} src={shapeBlur}></Image>
      <Image className={styles.blurLeft} src={shapeBlur}></Image>
    </div>
  );
}
