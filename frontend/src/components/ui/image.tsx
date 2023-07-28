import type { ImageMetadata } from 'astro';
import { ElementRef, HTMLAttributes, forwardRef } from 'react';

type ImageHTMLElement = ElementRef<'img'>;

interface ImageProps extends HTMLAttributes<ImageHTMLElement> {
  metadata: ImageMetadata;
  alt: string;
  isAboveTheFold?: 'lazy' | 'eager' | undefined;
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
