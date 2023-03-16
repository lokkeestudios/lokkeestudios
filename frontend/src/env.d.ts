/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  readonly PUBLIC_SANITY_API_VERSION: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION: string;
  readonly PUBLIC_GOOGLE_ANALYTICS_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
