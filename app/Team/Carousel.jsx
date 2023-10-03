import { useRef } from "react";
import './carousel.css';

export default function Carousel({ children,direction }) {
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

  const animation = direction === "right" ? "scrollR" : "scrollL";

  const carouselContainerStyles = {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
  };

  const cardsListStyles = {
    display: 'flex',
    gap: '1%',
    width: '200%',
    justifyContent: 'center',
    cursor: 'grab',
    animation: `${animation} 10s cubic-bezier(0.24, 0, 0.76, 1) infinite alternate`,
  };

  return (
    <div
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={carouselContainerStyles}
    >
      <div style={cardsListStyles}>{children}</div>
    </div>
  );
}
