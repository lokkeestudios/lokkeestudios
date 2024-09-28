import { generateImageSizeProps, type Image } from '@/lib/sanity/sanity-image';
import { type ElementRef, type HTMLAttributes, type RefObject } from 'react';

type SanityImageHTMLElement = ElementRef<'img'>;

function SanityImage({
  image,
  sizes = undefined,
  maxWidth = undefined,
  width = undefined,
  height = undefined,
  isAboveTheFold = false,
  ref,
  ...props
}: {
  image: Image;
  sizes?: string | undefined;
  maxWidth?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
  isAboveTheFold?: boolean | undefined;
  ref?: RefObject<SanityImageHTMLElement>;
} & HTMLAttributes<SanityImageHTMLElement>) {
  return (
    <img
      style={{
        backgroundColor: image.asset.metadata.palette.dominant.background,
      }}
      alt={image.alt}
      loading={isAboveTheFold ? 'eager' : 'lazy'}
      decoding={isAboveTheFold ? 'sync' : 'async'}
      {...generateImageSizeProps({ image, sizes, maxWidth, width, height })}
      ref={ref}
      {...props}
    />
  );
}

export { SanityImage };
