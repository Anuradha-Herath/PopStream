import { IMAGE_BASE_URL, IMAGE_SIZES } from '../constants';

/**
 * Format a date string to a readable format
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

/**
 * Get the image URL from TMDb
 */
export const getImageUrl = (
  path: string | null,
  size: 'POSTER' | 'BACKDROP' | 'PROFILE' = 'POSTER'
): string => {
  if (!path) return '';
  const sizeMap = {
    POSTER: IMAGE_SIZES.POSTER,
    BACKDROP: IMAGE_SIZES.BACKDROP,
    PROFILE: IMAGE_SIZES.PROFILE,
  };
  return `${IMAGE_BASE_URL}${sizeMap[size]}${path}`;
};

/**
 * Calculate rating star display
 */
export const getRatingStars = (rating: number): number => {
  return Math.round((rating / 10) * 5 * 2) / 2; // Round to nearest 0.5
};

/**
 * Format runtime from minutes to hours and minutes
 */
export const formatRuntime = (minutes: number): string => {
  if (!minutes) return '';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, length: number): string => {
  if (!text || text.length <= length) return text;
  return text.substring(0, length).concat('...');
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Get initials from a name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Format numbers with thousand separators
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Generate a unique key for lists
 */
export const generateKey = (prefix: string, id: number | string): string => {
  return `${prefix}_${id}`;
};

/**
 * Sleep utility for delays
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
