import sanityClient from '@lib/sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const imageBuilder = imageUrlBuilder(sanityClient);

function sanityImageUrlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

export default sanityImageUrlFor;
