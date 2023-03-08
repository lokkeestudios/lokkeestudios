import type {
  SanityClientLike,
  SanityImageSource,
} from '@sanity/image-url/lib/types/types';
import { createImageBuilder, useSanityClient } from 'astro-sanity';

const imageBuilder = createImageBuilder(useSanityClient() as SanityClientLike);

function getSanityImageUrl(source: SanityImageSource) {
  return imageBuilder.image(source);
}

export default getSanityImageUrl;
