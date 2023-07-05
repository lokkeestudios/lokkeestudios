import sanityClient from '@/lib/sanity-client';
import groq from 'groq';

interface ImageAssetMetadataPaletteColor {
  _type: 'sanity.imagePaletteSwatch';
  background: string;
  foreground: string;
  population: number;
  title: string;
}

interface ImageAssetMetadata {
  _type: 'sanity.imageMetadata';
  blurHash: string;
  dimensions: {
    _type: 'sanity.imageDimensions';
    aspectRatio: number;
    height: number;
    width: number;
  };
  hasAlpha: boolean;
  isOpaque: boolean;
  lqip: string;
  palette: {
    _type: 'sanity.imagePalette';
    darkMuted: ImageAssetMetadataPaletteColor;
    darkVibrant: ImageAssetMetadataPaletteColor;
    dominant: ImageAssetMetadataPaletteColor;
    lightMuted: ImageAssetMetadataPaletteColor;
    lightVibrant: ImageAssetMetadataPaletteColor;
    muted: ImageAssetMetadataPaletteColor;
    vibrant: ImageAssetMetadataPaletteColor;
  };
}

interface ImageAsset {
  _id: string;
  _type: 'sanity.imageAsset';
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  assetId: string;
  extension: string;
  metadata: ImageAssetMetadata;
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  uploadId: string;
  url: string;
}

interface Image {
  _key: string;
  _type: 'image';
  alt: string;
  asset: ImageAsset;
}

interface Project {
  _id: string;
  _type: 'project';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  date: string;
  description?: string;
  githuburl?: string;
  projecturl?: string;
  images: Image[];
  name: string;
  poster: Image;
  slug: { _type: 'slug'; current: string };
  tags?: string[];
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
export type { Image, Project };
