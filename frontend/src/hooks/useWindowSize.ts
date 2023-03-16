import { useEffect, useState } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function updateWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return windowSize;
}

export default useWindowSize;
