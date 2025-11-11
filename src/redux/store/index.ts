import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from '../slices/authSlice';
import favoritesReducer from '../slices/favoritesSlice';
import moviesReducer from '../slices/moviesSlice';

// Persistence configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'favorites'], // Only persist these reducers
};

// Create persisted reducers
const persistedAuthReducer = persistReducer(
  { ...persistConfig, key: 'auth' },
  authReducer
);
const persistedFavoritesReducer = persistReducer(
  { ...persistConfig, key: 'favorites' },
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    favorites: persistedFavoritesReducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['auth', 'favorites'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
