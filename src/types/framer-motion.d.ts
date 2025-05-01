import { MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

declare module 'framer-motion' {
  export interface MotionHTMLAttributes<T> extends HTMLAttributes<T>, MotionProps {}
}
