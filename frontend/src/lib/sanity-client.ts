import { createClient, type ClientConfig } from '@sanity/client';

const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_API_VERSION,
} = import.meta.env;

const clientConfig: ClientConfig = {
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: PUBLIC_SANITY_API_VERSION,
  useCdn: true,
};

const sanityClient = createClient(clientConfig);

export default sanityClient;
