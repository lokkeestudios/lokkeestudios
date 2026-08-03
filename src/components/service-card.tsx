import { cn } from '@/lib/utils';
import {
  motion,
  useMotionTemplate,
  useTransform,
  type HTMLMotionProps,
  type MotionStyle,
  type MotionValue,
} from 'framer-motion';
import { useRef, type ComponentRef, type ReactNode } from 'react';

function ServiceCard({
  parentMousePositionX,
  parentMousePositionY,
  children,
  className,
  'aria-label': ariaLabel,
  ...props
}: {
  parentMousePositionX: MotionValue<number>;
  parentMousePositionY: MotionValue<number>;
  children: ReactNode;
  'aria-label'?: string;
} & HTMLMotionProps<'div'>) {
  const ref = useRef<ComponentRef<'div'>>(null);

  const mousePositionX = useTransform(
    parentMousePositionX,
    (value) => value - (ref.current?.getBoundingClientRect().left ?? 0),
  );
  const mousePositionY = useTransform(
    parentMousePositionY,
    (value) => value - (ref.current?.getBoundingClientRect().top ?? 0),
  );

  return (
    <motion.div
      ref={ref}
      aria-label={ariaLabel}
      className={cn(
        'group/card from-neutrals-300/30 via-neutrals-300/80 to-neutrals-300/30 relative overflow-hidden rounded-md bg-linear-to-r via-15% to-35% p-[0.5px] drop-shadow-lg',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(600px_circle_at_var(--mouse-position-x)_var(--mouse-position-y),rgba(255,254,249,0.06),transparent_60%)] before:opacity-0 before:transition before:duration-500 lg:hover:before:opacity-100',
        'after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:bg-[radial-gradient(400px_circle_at_var(--mouse-position-x)_var(--mouse-position-y),rgba(255,254,249,0.6),transparent_60%)] after:opacity-0 after:transition after:duration-500 lg:group-hover:after:opacity-100',
        className,
      )}
      style={
        {
          '--mouse-position-x': useMotionTemplate`${mousePositionX}px`,
          '--mouse-position-y': useMotionTemplate`${mousePositionY}px`,
        } as unknown as MotionStyle
      }
      {...props}
    >
      <div className="flex h-full w-full flex-col justify-between rounded-[inherit] bg-[#0C1021] p-8">
        {children}
      </div>
    </motion.div>
  );
}

interface ComponentWithChildrenProps {
  children: ReactNode;
}

function ServiceCardTitle({ children }: ComponentWithChildrenProps) {
  return <h3 className="text-primary mb-2 font-medium md:text-lg">{children}</h3>;
}

function ServiceCardPrice({ children }: ComponentWithChildrenProps) {
  return <p className="mb-2 flex text-3xl font-bold text-balance md:text-4xl">{children}</p>;
}

function ServiceCardDescription({ children }: ComponentWithChildrenProps) {
  return (
    <p className="text-neutrals-300 max-w-prose text-sm text-pretty not-last:mb-8">{children}</p>
  );
}

function ServiceCardNotice({ children }: ComponentWithChildrenProps) {
  return <p className="text-neutrals-400 text-xs">{children}</p>;
}

function ServiceCardList({ children }: ComponentWithChildrenProps) {
  return <ul className="text-neutrals-300 mb-8 flex flex-col gap-y-4">{children}</ul>;
}

function ServiceCardBenefitListItem({ children }: ComponentWithChildrenProps) {
  return (
    <li className="flex items-center gap-x-2 text-sm/tight xl:text-base/tight">
      <svg
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className="text-neutrals-50 size-5"
      >
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
          className="fill-neutrals-100 stroke-neutrals-100"
        />
        <path
          d="M8 11.8571L10.5 14.3572L15.8572 9"
          className="stroke-neutrals-900 fill-none"
        />
      </svg>
      {children}
    </li>
  );
}

function ServiceCardAddonListItem({ children }: ComponentWithChildrenProps) {
  return (
    <li className="flex items-center gap-x-2 text-sm/tight xl:text-base/tight">
      <svg
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className="text-neutrals-50 size-5"
      >
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
          className="fill-neutrals-600 stroke-neutrals-100"
        />
        <path
          d="M12,7.645L12,16.355M16.355,12L7.645,12"
          className="stroke-neutrals-100 fill-none"
        />
      </svg>
      {children}
    </li>
  );
}

export {
  ServiceCard,
  ServiceCardAddonListItem,
  ServiceCardBenefitListItem,
  ServiceCardDescription,
  ServiceCardList,
  ServiceCardNotice,
  ServiceCardPrice,
  ServiceCardTitle,
};
