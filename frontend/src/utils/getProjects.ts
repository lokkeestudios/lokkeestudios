import sanityClient from '@lib/sanityClient';

interface Image {
  _key: string;
  _type: string;
  alttext: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Project {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  date: string;
  description: string;
  githuburl?: string;
  images: Image[];
  name: string;
  poster: Image;
  projecturl?: string;
  slug: { _type: string; current: string };
  tags: string[];
}

function getProjects() {
  const query = '*[_type == "project"] | order(date desc)';

  return sanityClient.fetch<Project[]>(query);
}

export default getProjects;
export type { Project };
