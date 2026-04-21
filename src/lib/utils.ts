import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trackEvent(name: string, properties?: Record<string, any>) {
  // Replace with real analytics like GTM or Segment
  console.log(`[Analytics] ${name}`, properties);
}
