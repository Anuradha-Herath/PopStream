import api from './api';

export interface TVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

export interface TVShowDetails extends TVShow {
  number_of_seasons: number;
  number_of_episodes: number;
  genres: Array<{ id: number; name: string }>;
  status: string;
  production_companies: Array<{ id: number; name: string }>;
}

/**
 * Get trending TV shows
 */
export const getTrendingTV = async (page: number = 1) => {
  try {
    const response = await api.get('/trending/tv/week', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get TV show details
 */
export const getTVDetails = async (tvId: number) => {
  try {
    const response = await api.get(`/tv/${tvId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Search TV shows
 */
export const searchTV = async (query: string, page: number = 1) => {
  try {
    const response = await api.get('/search/tv', {
      params: { query, page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get popular TV shows
 */
export const getPopularTV = async (page: number = 1) => {
  try {
    const response = await api.get('/tv/popular', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get top-rated TV shows
 */
export const getTopRatedTV = async (page: number = 1) => {
  try {
    const response = await api.get('/tv/top_rated', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
