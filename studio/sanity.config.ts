import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { deskTool } from 'sanity/desk';
import { dataset, projectId } from './environment';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';

export default defineConfig({
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
