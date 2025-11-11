import api from './api';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

export interface MovieDetails extends Movie {
  runtime: number;
  genres: Array<{ id: number; name: string }>;
  budget: number;
  revenue: number;
  status: string;
  production_companies: Array<{ id: number; name: string }>;
}

/**
 * Get trending movies
 */
export const getTrendingMovies = async (page: number = 1) => {
  try {
    const response = await api.get('/trending/movie/week', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get movie details
 */
export const getMovieDetails = async (movieId: number) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Search movies
 */
export const searchMovies = async (query: string, page: number = 1) => {
  try {
    const response = await api.get('/search/movie', {
      params: { query, page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get popular movies
 */
export const getPopularMovies = async (page: number = 1) => {
  try {
    const response = await api.get('/movie/popular', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get top-rated movies
 */
export const getTopRatedMovies = async (page: number = 1) => {
  try {
    const response = await api.get('/movie/top_rated', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
