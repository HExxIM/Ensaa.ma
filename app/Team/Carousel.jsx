import { useRef } from "react";

export default function Carousel({ children }) {
  const carouselRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(null);
  const scrollLeft = useRef(null);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX.current;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const styles = {
    carouselContainer: {
      display: "flex",
      overflow: "hidden",
      width: "100%",
      position: "relative",
    },
    cardsList: {
      display: "flex",
      gap: "1%",
      width: "200%",
      justifyContent: "center",
      cursor: "grab",
    },
  };

  return (
    <div
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={styles.carouselContainer}
    >
      <div style={styles.cardsList}>{children}</div>
    </div>
  );
}
