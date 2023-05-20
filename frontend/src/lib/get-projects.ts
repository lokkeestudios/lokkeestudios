import sanityClient from '@/lib/sanity-client';
import groq from 'groq';

interface ImageMetadataPaletteColor {
  _type: string;
  background: string;
  foreground: string;
  population: number;
  title: string;
}

interface ImageMetadata {
  _type: string;
  blurHash: string;
  dimensions: {
    _type: string;
    aspectRatio: number;
    height: number;
    width: number;
  };
  hasAlpha: boolean;
  isOpaque: boolean;
  lqip: string;
  palette: {
    _type: string;
    darkMuted: ImageMetadataPaletteColor;
    darkVibrant: ImageMetadataPaletteColor;
    dominant: ImageMetadataPaletteColor;
    lightMuted: ImageMetadataPaletteColor;
    lightVibrant: ImageMetadataPaletteColor;
    muted: ImageMetadataPaletteColor;
    vibrant: ImageMetadataPaletteColor;
  };
}

interface Image {
  _createdAt: string;
  _type: string;
  _updatedAt: string;
  alt: string;
  asset: {
    _ref: string;
    _type: string;
    _id: string;
    assetId: string;
    extension: string;
    metadata: ImageMetadata;
    mimeType: string;
    originalFilename: string;
    path: string;
    sha1hash: string;
    size: number;
    uploadId: string;
    url: string;
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
export type { Project, Image };
