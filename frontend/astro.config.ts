import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';
import { loadEnv } from 'vite';

import sanity from '@sanity/astro';

const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION } = loadEnv(
  '',
  process.cwd(),
  'SANITY',
) as {
  SANITY_PROJECT_ID: string;
  SANITY_DATASET: string;
  SANITY_API_VERSION: string;
};

export default defineConfig({
  site: 'https://lokkeestudios.com',
  output: 'hybrid',
  adapter: vercel({
    analytics: true,
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
      useCdn: false,
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
