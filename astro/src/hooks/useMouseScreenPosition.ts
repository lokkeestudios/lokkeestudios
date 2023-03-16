import { useEffect, useState } from 'react';

function useMouseScreenPosition() {
  const [mouseScreenPosition, setMouseScreenPosition] = useState({
    x: 0,
    y: 0,
  });

  function updateMouseScreenPosition(event: MouseEvent) {
    const screenMiddleX = window.innerWidth / 2;
    const screenMiddleY = window.innerHeight / 2;

    const mouseScreenPositionX = (event.pageX - screenMiddleX) / screenMiddleX;
    const mouseScreenPositionY = (event.pageY - screenMiddleY) / screenMiddleY;

    setMouseScreenPosition({
      x: mouseScreenPositionX,
      y: mouseScreenPositionY,
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMouseScreenPosition);

    return () => {
      window.removeEventListener('mousemove', updateMouseScreenPosition);
    };
  }, []);

  return mouseScreenPosition;
}

export default useMouseScreenPosition;
