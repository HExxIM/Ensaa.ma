import Image from "next/image";
import "./TitleBox.css";
//svg
import BoxTitle from "../../../public/svg/icons/BoxTitle.svg";

export default function TitleBox({ title }) {
  return (
    <div className="BoxStyles">
      <Image
        className="BoxContainerStyles"
        alt="BoxTitle"
        src={BoxTitle}
      ></Image>
      <h1 className="titleStyles">{title}</h1>
    </div>
  );
}
