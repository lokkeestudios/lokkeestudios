import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityClient } from 'sanity:client';

type ImageAssetMetadataPaletteColor = {
  _type: 'sanity.imagePaletteSwatch';
  background: string;
  foreground: string;
  population: number;
  title: string;
};

type ImageAssetMetadata = {
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
};

type ImageAsset = {
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
};

type Image = {
  _key: string;
  _type: 'image';
  alt: string;
  asset: ImageAsset;
};

const imageBuilder = imageUrlBuilder(sanityClient);

function imageUrlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

const MIN_WIDTH_STEP_PERCENTAGE = 0.1;
const COMMON_SCREEN_SIZES = [360, 414, 768, 1366, 1536, 1920];
const LARGEST_COMMON_SCREEN_SIZE = 1920;

function generateImageSizeProps({
  image,
  sizes = undefined,
  maxWidth = undefined,
  width = undefined,
  height = undefined,
}: {
  image: Image;
  sizes?: string | undefined;
  maxWidth?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
}) {
  const builder = imageUrlFor(image).fit('max').auto('format').dpr(2);

  const { width: originalWidth, aspectRatio } = image.asset.metadata.dimensions;

  const computedMaxWidth = maxWidth && maxWidth <= originalWidth ? maxWidth : originalWidth;

  const retinaSizes = Array.from(
    new Set([
      ...COMMON_SCREEN_SIZES,
      ...COMMON_SCREEN_SIZES.map((size) => size * 2),
      ...COMMON_SCREEN_SIZES.map((size) => size * 3),
    ]),
  )
    .sort((a, b) => a - b)
    .filter((size) => {
      const isSizeBelowOrSlightlyAboveMaxWidth = size <= computedMaxWidth * 1.1;
      const isSizeBelowMaxWidthRetina = size <= LARGEST_COMMON_SCREEN_SIZE * 3;

      return isSizeBelowOrSlightlyAboveMaxWidth && isSizeBelowMaxWidthRetina;
    })
    .filter((size, index, unfilteredSizes) => {
      const nextSize = unfilteredSizes[index + 1];
      if (!nextSize) return true;

      const isSizeDifferenceSufficient = nextSize / size > MIN_WIDTH_STEP_PERCENTAGE + 1;
      return isSizeDifferenceSufficient;
    });

  return {
    src: builder.width(computedMaxWidth).url(),
    srcSet: retinaSizes.map((size) => `${builder.width(size).url()} ${size}w`).join(', '),
    sizes: sizes ?? `(max-width: ${computedMaxWidth}px) 100vw, ${computedMaxWidth}px`,
    width: width ?? computedMaxWidth,
    height: height ?? computedMaxWidth / aspectRatio,
  };
}

export { generateImageSizeProps, imageUrlFor, type Image };
