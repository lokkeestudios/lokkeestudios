import { SanityImage } from '@/components/ui/sanity-image';
import { type Image as ImageType } from '@/lib/sanity/sanity-image';
import { type TypedObject } from 'astro-portabletext/types';
import { motion } from 'framer-motion';
import { Dialog } from 'radix-ui';
import { useState } from 'react';

type ImageProps = ImageType & TypedObject;

function Image({ _key, _type, asset, alt }: ImageProps) {
  const [isPreviewed, setIsPreviewed] = useState(false);

  const image = { _key, _type, asset, alt };

  return (
    <Dialog.Root
      open={isPreviewed}
      onOpenChange={setIsPreviewed}
    >
      <Dialog.Trigger className="w-full cursor-zoom-in">
        <motion.div
          layoutId={image.asset._id}
          className="overflow-hidden rounded-md border-0.5 border-neutrals-50/40"
        >
          <SanityImage
            image={image}
            className="not-prose relative z-30 w-full"
          />
        </motion.div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="pointer-events-auto fixed inset-0 z-20 cursor-zoom-out bg-neutrals-900/60 backdrop-blur-sm data-[state='closed']:animate-dialog-overlay-hide data-[state='open']:animate-dialog-overlay-show supports-[backdrop-filter]:bg-neutrals-900/20" />
        <Dialog.Content>
          <div className="pointer-events-none fixed start-1/2 top-1/2 z-20 w-[80vmin] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              layoutId={image.asset._id}
              className="overflow-hidden rounded-md border-0.5 border-neutrals-50/40"
            >
              <SanityImage
                image={image}
                className="not-prose w-full"
              />
            </motion.div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { Image, type ImageProps };
