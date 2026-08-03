import { useEffect, useState } from 'react';

const TILE_SIZE = 80;

function GridBackground() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  function calculateGrid() {
    const { innerWidth, innerHeight } = window;

    setColumns(Math.floor(innerWidth / TILE_SIZE));
    setRows(Math.floor(innerHeight / TILE_SIZE));
  }

  useEffect(() => {
    calculateGrid();

    window.addEventListener('resize', calculateGrid);
    window.addEventListener('orientationchange', calculateGrid);

    return () => {
      window.removeEventListener('resize', calculateGrid);
      window.removeEventListener('orientationchange', calculateGrid);
    };
  }, []);

  const numberOfTiles = columns * rows;

  return (
    <div className="animate-gradient via-primary/60 absolute -z-10 size-full overflow-hidden bg-gradient-to-r from-transparent mask-radial-to-80% bg-[length:200%]">
      <div
        className="grid size-full gap-[0.5px]"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: numberOfTiles }).map((_, index) => (
          <div
            key={index}
            className="bg-neutrals-900"
            style={{
              opacity: Math.random() > 0.8 ? 0.6 + Math.random() * 0.2 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default GridBackground;
