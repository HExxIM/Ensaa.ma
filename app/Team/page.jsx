"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useRef } from "react";

//images
import shapeBlur from "../../public/images/shapeBlur.webp";

//components
import {
  getMembersList1,
  getMembersList2,
} from "../Components/UI/TeamMembersList";

export default function page() {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  let isDown1 = useRef(false);
  let isDown2 = useRef(false);
  let startX1 = useRef(null);
  let startX2 = useRef(null);
  let scrollLeft1 = useRef(null);
  let scrollLeft2 = useRef(null);

  const handleMouseDown1 = (e) => {
    isDown1.current = true;
    startX1.current = e.pageX - carouselRef1.current.offsetLeft;
    scrollLeft1.current = carouselRef1.current.scrollLeft;
  };
  const handleMouseDown2 = (e) => {
    isDown2.current = true;
    startX2.current = e.pageX - carouselRef2.current.offsetLeft;
    scrollLeft2.current = carouselRef2.current.scrollLeft;
  };

  const handleMouseUp1 = () => {
    isDown1.current = false;
  };
  const handleMouseUp2 = () => {
    isDown2.current = false;
  };

  const handleMouseMove1 = (e) => {
    if (!isDown1.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef1.current.offsetLeft;
    const walk = x - startX1.current;
    carouselRef1.current.scrollLeft = scrollLeft1.current - walk;
  };
  const handleMouseMove2 = (e) => {
    if (!isDown2.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef2.current.offsetLeft;
    const walk = x - startX2.current;
    carouselRef2.current.scrollLeft = scrollLeft2.current - walk;
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div
          ref={carouselRef1}
          onMouseDown={handleMouseDown1}
          onMouseUp={handleMouseUp1}
          onMouseMove={handleMouseMove1}
          className={styles.carouselContainer}
        >
          <div className={styles.cardsList}>{getMembersList1()}</div>
        </div>
        <div
          ref={carouselRef2}
          onMouseDown={handleMouseDown2}
          onMouseUp={handleMouseUp2}
          onMouseMove={handleMouseMove2}
          className={styles.carouselContainer}
        >
          <div className={styles.cardsList}>{getMembersList2()}</div>
        </div>
      </div>
      <Image src={shapeBlur} className={styles.blurBottom}></Image>
      <Image src={shapeBlur} className={styles.blurTop}></Image>
    </div>
  );
}
