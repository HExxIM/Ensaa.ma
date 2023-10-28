import { useEffect, useState } from "react";

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (entries) => {
      setViewportWidth(entries[0].contentRect.width);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    // Observe the body element for changes in width
    resizeObserver.observe(document.body);

    return () => {
      // Clean up by unobserving it
      resizeObserver.unobserve(document.body);
    };
  }, []);

  return viewportWidth;
};

export default useViewportWidth;
