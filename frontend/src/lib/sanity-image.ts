import type { Image } from '@/lib/get-projects';
import sanityClient from '@/lib/sanity-client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

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
}: {
  image: Image;
  sizes?: string;
  maxWidth?: number;
}) {
  const builder = imageUrlFor(image).fit('max').auto('format');

  const { width: originalWidth, aspectRatio } = image.asset.metadata.dimensions;

  const retinaSizes = Array.from(
    new Set([
      ...COMMON_SCREEN_SIZES,
      ...COMMON_SCREEN_SIZES.map((size) => size * 2),
      ...COMMON_SCREEN_SIZES.map((size) => size * 3),
    ]),
  )
    .sort((a, b) => a - b)
    .filter((size) => {
      const isSizeBelowOrSlightlyAboveOriginal = size <= originalWidth * 1.1;
      const isSizeBelowMaxWidthRetina = size <= LARGEST_COMMON_SCREEN_SIZE * 3;

      return isSizeBelowOrSlightlyAboveOriginal && isSizeBelowMaxWidthRetina;
    })
    .filter((size, index, unfilteredSizes) => {
      const nextSize = unfilteredSizes[index + 1];
      if (!nextSize) return true;

      const isSizeDifferenceSufficient =
        nextSize / size > MIN_WIDTH_STEP_PERCENTAGE + 1;
      return isSizeDifferenceSufficient;
    });

  const computedMaxWidth =
    maxWidth && maxWidth <= originalWidth ? maxWidth : originalWidth;

  return {
    src: builder.width(computedMaxWidth).url(),
    srcSet: retinaSizes
      .map((size) => `${builder.width(size).url()} ${size}w`)
      .join(', '),
    sizes:
      sizes ||
      `(max-width: ${computedMaxWidth}px) 100vw, ${computedMaxWidth}px`,
    width: retinaSizes[0],
    height: retinaSizes[0] / aspectRatio,
  };
}

export { generateImageSizeProps, imageUrlFor };
