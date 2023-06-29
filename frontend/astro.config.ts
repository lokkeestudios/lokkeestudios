import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import { defineConfig, sharpImageService } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';

// https://astro.build/config
export default defineConfig({
  site: 'https://lokkeestudios.com',
  output: 'hybrid',
  adapter: vercel({
    analytics: true,
  }),
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    serviceWorker(),
    sitemap(),
    robotsTxt(),
    compress(),
  ],
});
