// API Configuration
export const API_BASE_URL = process.env.EXPO_PUBLIC_TMDB_BASE_URL || 'https://api.themoviedb.org/3';
export const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY || '';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Image Sizes
export const IMAGE_SIZES = {
  POSTER: '/w500',
  BACKDROP: '/w1280',
  PROFILE: '/w342',
};

// Navigation Routes
export const ROUTES = {
  AUTH_STACK: 'AuthStack',
  LOGIN: 'Login',
  REGISTER: 'Register',
  HOME_STACK: 'HomeStack',
  HOME: 'Home',
  DETAILS: 'Details',
  FAVORITES: 'Favorites',
  PROFILE: 'Profile',
};

// Pagination
export const ITEMS_PER_PAGE = 20;
export const INITIAL_PAGE = 1;

// Cache Duration (in milliseconds)
export const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  REGISTRATION_FAILED: 'Registration failed. Please try again.',
  FETCH_ERROR: 'Failed to fetch data. Please try again.',
  VALIDATION_ERROR: 'Please fill in all required fields.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  REGISTRATION_SUCCESS: 'Registration successful!',
  LOGOUT_SUCCESS: 'Logged out successfully.',
  FAVORITE_ADDED: 'Added to favorites!',
  FAVORITE_REMOVED: 'Removed from favorites!',
};

// Media Types
export const MEDIA_TYPES = {
  MOVIE: 'movie',
  TV: 'tv',
};
