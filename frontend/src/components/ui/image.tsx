import type { ImageMetadata } from 'astro';
import { HTMLAttributes, forwardRef } from 'react';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  metadata: ImageMetadata;
  alt: string;
  isAboveTheFold?: 'lazy' | 'eager' | undefined;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
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
