import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lokkeestudios.com',
  adapter: vercelStatic({
    analytics: true,
  }),
  experimental: {
    assets: true,
  },
  integrations: [
    react(),
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sitemap(),
    compress(),
  ],
});
