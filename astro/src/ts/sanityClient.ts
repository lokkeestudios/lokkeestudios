import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET,
  apiVersion: process.env.PUBLIC_SANITY_API_VERSION,
  token: process.env.PUBLIC_SANITY_READ_TOKEN,
  useCdn: true,
});
