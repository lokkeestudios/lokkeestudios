import image from '@astrojs/image';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sanity from 'astro-sanity';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lokkeestudios.com',
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sanity({
      projectId: 'guakq609',
      dataset: 'production',
      apiVersion: '2023-03-08',
      token:
        'sk3WFk0ZpCj3un2y8SDpzw9CJse1E3X91YezHLBInAqjmxyzwkivE6LVi8NYo2b1Td6Ggj3fTMnb62OrwdTBlsBkDXehbMBqJJwMfCvuof6aKikqZmNvMitrmUm8sMXB7DLsQfDMKH6latfOrWyo9JiYGYCoh9dy0slJEdsuULN9bh6M1dmE',
      useCdn: false,
    }),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    compress(),
  ],
});
