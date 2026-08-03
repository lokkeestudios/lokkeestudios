import { useEffect, useState } from 'react';

function useScrollThreshold() {
  const [isScrollThresholdPassed, setIsScrollThresholdPassed] = useState(false);

  useEffect(() => {
    function updateScrollState() {
      setIsScrollThresholdPassed(window.scrollY > window.innerHeight);
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

export { useScrollThreshold };
