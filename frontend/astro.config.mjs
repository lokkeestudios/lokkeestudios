import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel/serverless';
import compress from 'astro-compress';
import { defineConfig, sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lokkeestudios.com',
  output: 'hybrid',
  adapter: vercelServerless({
    analytics: true,
  }),
  experimental: {
    assets: true,
    hybridOutput: true,
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [
    react(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sitemap(),
    compress(),
  ],
});
