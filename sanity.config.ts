import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { deskTool } from 'sanity/desk';
import { sanityClient } from 'sanity:client';
import { schemaTypes } from './schemas';
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
  plugins: [deskTool(), visionTool(), vercelDeployTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});

export default config;
