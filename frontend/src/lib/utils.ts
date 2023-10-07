import { clsx, type ClassValue } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatDate(date: string | number) {
  return moment(date).format('MMMM YYYY');
}

function formatDateWithDay(date: string | number) {
  return moment(date).format('MMMM Do YYYY');
}

function shuffleArray<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export { clamp, cn, formatDate, formatDateWithDay, shuffleArray };
