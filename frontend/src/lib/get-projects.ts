import sanityClient from '@/lib/sanity-client';
import type { Image } from '@/lib/sanity-image';
import groq from 'groq';

interface Project {
  _id: string;
  _type: 'project';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  slug: { _type: 'slug'; current: string };
  date: string;
  description: string;
  poster: Image;
  images: Image[];
  tags?: string[];
  githuburl?: string;
  projecturl?: string;
}

function getProjects() {
  const query = groq`
    *[_type == "project"] | order(date desc) { 
      ...,
      "poster": poster { ..., asset-> },
      "images": images[] { ..., asset-> }
    }
  `;

  return sanityClient.fetch<Project[]>(query);
}

export default getProjects;
export type { Project };
