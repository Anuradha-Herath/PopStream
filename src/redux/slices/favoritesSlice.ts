import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteItem {
  id: number;
  title: string;
  type: "movie" | "tv";
  poster_path: string | null;
  vote_average: number;
  addedAt: number;
}

export interface FavoritesState {
  items: FavoriteItem[];
  loading: boolean;
  error: string | null;
}

const initialState: FavoritesState = {
  items: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // Add to favorites
    addToFavorites: (state, action: PayloadAction<FavoriteItem>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push({
          ...action.payload,
          addedAt: Date.now(),
        });
      }
    },

    // Remove from favorites
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Clear all favorites
    clearFavorites: (state) => {
      state.items = [];
    },

    // Set favorites (for initial load)
    setFavorites: (state, action: PayloadAction<FavoriteItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
  setFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
