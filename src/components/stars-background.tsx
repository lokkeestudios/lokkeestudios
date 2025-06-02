import { useCallback } from 'react';
import { Particles } from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

function StarsBackground() {
  const initializeParticleEngine = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 2000,
            },
          },
          color: {
            value: '#FFFEF9',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: true,
              speed: 0.75,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 1.25,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              size_min: 0,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        fullScreen: false,
        retina_detect: true,
      }}
      init={initializeParticleEngine}
      className="pointer-events-none absolute inset-0 -z-10 mask-x-from-80%"
    />
  );
}

export { StarsBackground };
