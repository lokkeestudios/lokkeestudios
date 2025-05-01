import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { sanityClient } from 'sanity:client';
import { Logo } from './desk/logo';
import { schemas } from './schemas';
import { myTheme } from './theme';

const { projectId, dataset } = sanityClient.config();

if (!projectId || !dataset)
  throw new Error(
    'Both projectId and dataset must be set in order for the Sanity admin dashboard to properly function',
  );

const config = defineConfig({
  name: 'lokkeestudios',
  title: 'LOKKEE STUDIOS',
  projectId,
  dataset,
  icon: Logo,
  plugins: [structureTool(), visionTool()],
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== 'vision');
  },
  schema: {
    types: schemas,
  },
  theme: myTheme,
});

export default config;
