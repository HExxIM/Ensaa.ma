import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    // Ensure that initialization is complete before rendering
    setIsInitialized(true);

    return () => media.removeListener(updateTarget);
  }, [width, updateTarget]);

  return { targetReached, isInitialized };
};


export default useMediaQuery;