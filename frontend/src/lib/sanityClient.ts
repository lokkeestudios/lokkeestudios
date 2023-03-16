import { createClient, type ClientConfig } from '@sanity/client';

const sanityClientConfig: ClientConfig = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  useCdn: false,
};

const sanityClient = createClient(sanityClientConfig);

export default sanityClient;
