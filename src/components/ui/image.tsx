import { type ImageMetadata } from 'astro';
import { type ComponentProps } from 'react';

function Image({
  metadata,
  alt,
  isAboveTheFold = false,
  ...props
}: {
  metadata: ImageMetadata;
  alt: string;
  isAboveTheFold?: boolean | undefined;
} & ComponentProps<'img'>) {
  return (
    <img
      src={metadata.src}
      width={metadata.width}
      height={metadata.height}
      alt={alt}
      loading={isAboveTheFold ? 'eager' : 'lazy'}
      decoding="async"
      {...props}
    />
  );
}

export { Image };
