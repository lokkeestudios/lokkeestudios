import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  token: import.meta.env.PUBLIC_SANITY_READ_TOKEN,
  useCdn: true,
});
