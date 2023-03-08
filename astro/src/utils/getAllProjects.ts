import type { SanityClient } from '@sanity/client';
import { groq, useSanityClient } from 'astro-sanity';
import type Project from 'src/types/Project';

function getAllProjects(): Promise<Project[]> {
  const query = groq`*[_type == "projects"] | order(date desc)`;

  return (useSanityClient() as SanityClient).fetch(query);
}

export default getAllProjects;
