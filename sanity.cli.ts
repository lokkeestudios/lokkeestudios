import { defineCliConfig } from 'sanity/cli';

if (!process.env.PUBLIC_SANITY_PROJECT_ID || !process.env.PUBLIC_SANITY_DATASET) {
  throw new Error(
    'Both environment variables PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET must be set in order for the Sanity CLI to properly function',
  );
}

const config = defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
  },
});

export default config;
