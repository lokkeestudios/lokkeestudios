import { type ImageMetadata } from 'astro';
import { type ElementRef, type HTMLAttributes, type RefObject } from 'react';

type ImageHTMLElement = ElementRef<'img'>;

function Image({
  metadata,
  alt,
  isAboveTheFold = false,
  ref,
  ...props
}: {
  metadata: ImageMetadata;
  alt: string;
  isAboveTheFold?: boolean | undefined;
  ref?: RefObject<ImageHTMLElement>;
} & HTMLAttributes<ImageHTMLElement>) {
  return (
    <img
      src={metadata.src}
      width={metadata.width}
      height={metadata.height}
      alt={alt}
      loading={isAboveTheFold ? 'eager' : 'lazy'}
      decoding="async"
      ref={ref}
      {...props}
    />
  );
}

export { Image };
