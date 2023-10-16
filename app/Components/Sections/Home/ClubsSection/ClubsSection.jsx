"use client";
import Image from "next/image";
import styles from "./sliderSection.module.css";
import { useRef } from "react";

//Images
import shapeBlur from "../../../../../public/images/shapeBlur.webp";

//components
import TitleBox from "../../../UI/TitleBox";
import ClubsInfosList from "./ClubsInfosList.jsx";

export default function ClubsSection() {
  // const carouselRef = useRef(null);
  // const isDown = useRef(false);
  // const startX = useRef(null);
  // const scrollLeft = useRef(null);

  // const handleMouseDown = (e) => {
  //   isDown.current = true;
  //   startX.current = e.pageX - carouselRef.current.offsetLeft;
  //   scrollLeft.current = carouselRef.current.scrollLeft;
  // };

  // const handleMouseUp = () => {
  //   isDown.current = false;
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDown.current) return;
  //   e.preventDefault();
  //   const x = e.pageX - carouselRef.current.offsetLeft;
  //   const walk = x - startX.current;
  //   carouselRef.current.scrollLeft = scrollLeft.current - walk;
  // };
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <TitleBox title="Our Clubs" />
      </div>
      <div
        className={styles.Slider}
        // ref={carouselRef}
        // onMouseDown={handleMouseDown}
        // onMouseUp={handleMouseUp}
        // onMouseMove={handleMouseMove}
      >
        <ClubsInfosList />
      </div>
      <Image
        className={styles.blurRight}
        alt="blurRight"
        src={shapeBlur}
      ></Image>
      <Image className={styles.blurLeft} alt="blurLeft" src={shapeBlur}></Image>
    </div>
  );
}
