import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { dataset, projectId } from './environment';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';

export default defineConfig({
  name: 'lokkeestudios',
  title: 'LOKKEE STUDIOS',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: myTheme,
});
