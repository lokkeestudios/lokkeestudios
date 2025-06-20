import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';
import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';
import { loadEnv } from 'vite';
import { siteConfig } from './src/lib/config/site';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  '',
);

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET)
  throw new Error(
    'Both environment variables PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET must be set in order for the site to properly function',
  );

const { name, backgroundColor, themeColor, url } = siteConfig;

// https://astro.build/config
const config = defineConfig({
  site: url,
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  prefetch: {
    prefetchAll: true,
  },
  image: {
    domains: ['cdn.sanity.io'],
  },
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    serviceWorker(),
    sitemap(),
    robotsTxt(),
    webmanifest({
      name,
      short_name: name,
      background_color: backgroundColor,
      theme_color: themeColor,
      display: 'standalone',
      prefer_related_applications: true,
      start_url: '/',
      icon: './public/favicon.svg',
      config: {
        outfile: 'site.webmanifest',
        iconPurpose: ['any', 'maskable'],
        insertAppleTouchLinks: true,
      },
    }),
  ],
});

export default config;
