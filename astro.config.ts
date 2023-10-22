import partytown from '@astrojs/partytown';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sanity from '@sanity/astro';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';
import { loadEnv } from 'vite';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  '',
);

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET)
  throw new Error(
    'Both environment variables PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET must be set in order for the site to properly function',
  );

// https://astro.build/config
export default defineConfig({
  site: 'https://lokkeestudios.com',
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      studioBasePath: '/admin',
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    prefetch({ intentSelector: 'a[href^="/"]' }),
    serviceWorker(),
    sitemap(),
    robotsTxt(),
  ],
});
