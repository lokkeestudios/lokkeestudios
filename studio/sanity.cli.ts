import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './environment';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
