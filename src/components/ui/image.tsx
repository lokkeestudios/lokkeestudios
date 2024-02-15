import type { ImageMetadata } from 'astro';
import { forwardRef, type ElementRef, type HTMLAttributes } from 'react';

type ImageHTMLElement = ElementRef<'img'>;

interface ImageProps extends HTMLAttributes<ImageHTMLElement> {
  metadata: ImageMetadata;
  alt: string;
  isAboveTheFold?: boolean | undefined;
}

const Image = forwardRef<ImageHTMLElement, ImageProps>(
  ({ metadata, alt, isAboveTheFold = false, ...props }, ref) => (
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
  ),
);
Image.displayName = 'Image';

export default Image;
