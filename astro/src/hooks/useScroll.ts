import { useEffect, useState } from 'react';

function useScroll() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrollY, setScrollY] = useState(0);

  function updateScrollState() {
    const currentScrollY = window.scrollY;
    const currentScrollDirection = currentScrollY > scrollY ? 'down' : 'up';

    setScrollDirection(currentScrollDirection);
    setScrollY(Math.max(currentScrollY, 0));
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScrollState, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', updateScrollState);
    };
  }, [scrollY]);

  return { scrollY, scrollDirection };
}

export default useScroll;
