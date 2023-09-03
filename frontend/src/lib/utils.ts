import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatDate(input: string | number) {
  const date = new Date(input);

  const formattedDate = date.toLocaleDateString('default', {
    month: 'long',
    year: 'numeric',
  });

  return formattedDate;
}

function shuffleArray<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export { clamp, cn, formatDate, shuffleArray };
