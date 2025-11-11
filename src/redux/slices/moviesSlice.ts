import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../services/movieService";

export interface MoviesState {
  trending: {
    data: Movie[];
    loading: boolean;
    error: string | null;
    currentPage: number;
  };
  popular: {
    data: Movie[];
    loading: boolean;
    error: string | null;
    currentPage: number;
  };
  topRated: {
    data: Movie[];
    loading: boolean;
    error: string | null;
    currentPage: number;
  };
  search: {
    data: Movie[];
    loading: boolean;
    error: string | null;
    query: string;
  };
  selectedMovie: Movie | null;
}

const initialState: MoviesState = {
  trending: {
    data: [],
    loading: false,
    error: null,
    currentPage: 1,
  },
  popular: {
    data: [],
    loading: false,
    error: null,
    currentPage: 1,
  },
  topRated: {
    data: [],
    loading: false,
    error: null,
    currentPage: 1,
  },
  search: {
    data: [],
    loading: false,
    error: null,
    query: "",
  },
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // Trending
    setTrendingLoading: (state, action: PayloadAction<boolean>) => {
      state.trending.loading = action.payload;
    },
    setTrendingData: (
      state,
      action: PayloadAction<{ movies: Movie[]; page: number }>
    ) => {
      state.trending.data =
        action.payload.page === 1
          ? action.payload.movies
          : [...state.trending.data, ...action.payload.movies];
      state.trending.currentPage = action.payload.page;
    },
    setTrendingError: (state, action: PayloadAction<string>) => {
      state.trending.error = action.payload;
    },

    // Popular
    setPopularLoading: (state, action: PayloadAction<boolean>) => {
      state.popular.loading = action.payload;
    },
    setPopularData: (
      state,
      action: PayloadAction<{ movies: Movie[]; page: number }>
    ) => {
      state.popular.data =
        action.payload.page === 1
          ? action.payload.movies
          : [...state.popular.data, ...action.payload.movies];
      state.popular.currentPage = action.payload.page;
    },
    setPopularError: (state, action: PayloadAction<string>) => {
      state.popular.error = action.payload;
    },

    // Top Rated
    setTopRatedLoading: (state, action: PayloadAction<boolean>) => {
      state.topRated.loading = action.payload;
    },
    setTopRatedData: (
      state,
      action: PayloadAction<{ movies: Movie[]; page: number }>
    ) => {
      state.topRated.data =
        action.payload.page === 1
          ? action.payload.movies
          : [...state.topRated.data, ...action.payload.movies];
      state.topRated.currentPage = action.payload.page;
    },
    setTopRatedError: (state, action: PayloadAction<string>) => {
      state.topRated.error = action.payload;
    },

    // Search
    setSearchLoading: (state, action: PayloadAction<boolean>) => {
      state.search.loading = action.payload;
    },
    setSearchData: (
      state,
      action: PayloadAction<{ movies: Movie[]; query: string }>
    ) => {
      state.search.data = action.payload.movies;
      state.search.query = action.payload.query;
    },
    setSearchError: (state, action: PayloadAction<string>) => {
      state.search.error = action.payload;
    },
    clearSearch: (state) => {
      state.search = {
        data: [],
        loading: false,
        error: null,
        query: "",
      };
    },

    // Selected Movie
    setSelectedMovie: (state, action: PayloadAction<Movie | null>) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const {
  setTrendingLoading,
  setTrendingData,
  setTrendingError,
  setPopularLoading,
  setPopularData,
  setPopularError,
  setTopRatedLoading,
  setTopRatedData,
  setTopRatedError,
  setSearchLoading,
  setSearchData,
  setSearchError,
  clearSearch,
  setSelectedMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
