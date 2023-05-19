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
const LARGEST_COMMON_VIEWPORT = 1920;

function generateImageSizeProps({
  image,
  maxWidth = LARGEST_COMMON_VIEWPORT,
  sizes = undefined,
}: {
  image: Image;
  maxWidth?: number;
  sizes?: string;
}) {
  const builder = imageBuilder.image(image).fit('max').auto('format');

  const { width: originalWidth, aspectRatio } = image.metadata.dimensions;

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
      const isSizeBelowMaxWidthRetina = size <= maxWidth * 3;

      return isSizeBelowOrSlightlyAboveOriginal && isSizeBelowMaxWidthRetina;
    })
    .filter((size, index, unfilteredSizes) => {
      const nextSize = unfilteredSizes[index + 1];
      if (!nextSize) return true;

      const isSizeDifferenceSufficient =
        nextSize / size > MIN_WIDTH_STEP_PERCENTAGE + 1;
      return isSizeDifferenceSufficient;
    });

  return {
    src: builder.width(originalWidth).url(),
    srcSet: retinaSizes
      .map((size) => `${builder.width(size).url()} ${size}w`)
      .join(', '),
    sizes: sizes || `(max-width: ${originalWidth}px) 100vw, ${originalWidth}px`,
    width: retinaSizes[0],
    height: retinaSizes[0] / aspectRatio,
  };
}

export { imageUrlFor, generateImageSizeProps };
