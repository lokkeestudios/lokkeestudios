import { useEffect, useState } from 'react';

function useScrollThreshold({ threshold = 10 }) {
  const [isScrollThresholdPassed, setIsScrollThresholdPassed] = useState(false);

  useEffect(() => {
    function updateScrollState() {
      setIsScrollThresholdPassed(window.scrollY > threshold);
    }

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', updateScrollState);
    };
  }, []);

  return { isScrollThresholdPassed };
}

export default useScrollThreshold;
