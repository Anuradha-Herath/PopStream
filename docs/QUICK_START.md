# StreamBox - Quick Start Guide

Quick examples to get you started building components.

## 1. Creating a Simple Screen Component

**File: `src/screens/home/HomeScreen.tsx`**

```typescript
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/navigation/navigationTypes';
import { colors, typography, spacing } from '@/styles';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { trending, loading, error } = useAppSelector((state) => state.movies.trending);

  useEffect(() => {
    // Fetch trending movies when component mounts
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    // TODO: Dispatch action to fetch movies
  };

  const renderMovieCard = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trending Movies</Text>
      <FlatList
        data={trending}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  header: {
    ...typography.h2,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderRadius: 8,
  },
  title: {
    ...typography.bodyLarge,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  rating: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  loadingText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  errorText: {
    ...typography.bodyMedium,
    color: colors.error,
    textAlign: 'center',
  },
});

export default HomeScreen;
```

## 2. Creating a Reusable Component

**File: `src/components/MovieCard.tsx`**

```typescript
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography, spacing } from '@/styles';
import { getImageUrl, getRatingStars } from '@/utils/helpers';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
  rating: number;
  releaseDate: string;
  isFavorite?: boolean;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  posterPath,
  rating,
  releaseDate,
  isFavorite = false,
  onPress,
  onFavoritePress,
}) => {
  const stars = getRatingStars(rating);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {posterPath && (
        <Image
          source={{ uri: getImageUrl(posterPath) }}
          style={styles.poster}
        />
      )}
      
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        
        <Text style={styles.date}>{releaseDate}</Text>
        
        <View style={styles.ratingContainer}>
          <Text style={styles.stars}>{'⭐'.repeat(Math.floor(stars))}</Text>
          <Text style={styles.rating}>{rating.toFixed(1)}/10</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.favoriteButton}
        onPress={onFavoritePress}
      >
        <Feather
          name={isFavorite ? 'heart' : 'heart'}
          size={24}
          color={isFavorite ? colors.error : colors.textSecondary}
          fill={isFavorite ? colors.error : 'none'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: spacing.lg,
    flexDirection: 'row',
    elevation: 3,
  },
  poster: {
    width: 80,
    height: 120,
  },
  content: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'space-between',
  },
  title: {
    ...typography.bodyLarge,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  date: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    fontSize: 12,
    marginRight: spacing.sm,
  },
  rating: {
    ...typography.labelMedium,
    color: colors.secondary,
  },
  favoriteButton: {
    padding: spacing.md,
    justifyContent: 'center',
  },
});

export default MovieCard;
```

## 3. Setting Up Navigation

**File: `src/navigation/AuthNavigator.tsx`**

```typescript
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '@/screens/auth/LoginScreen';
// import RegisterScreen from '@/screens/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
```

**File: `src/navigation/HomeNavigator.tsx`**

```typescript
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/styles';
// import HomeScreen from '@/screens/home/HomeScreen';
// import DetailsScreen from '@/screens/details/DetailsScreen';
// import FavoritesScreen from '@/screens/favorites/FavoritesScreen';
// import ProfileScreen from '@/screens/profile/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack: React.FC = () => (
  <Stack.Navigator>
    {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
  </Stack.Navigator>
);

const FavoritesStack: React.FC = () => (
  <Stack.Navigator>
    {/* <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} /> */}
  </Stack.Navigator>
);

const HomeNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          return <Feather name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.surfaceVariant,
        },
        headerShown: false,
      })}
    >
      {/* <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favorites" component={FavoritesStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
};

export default HomeNavigator;
```

## 4. Using Redux to Manage State

**Example: Dispatching an action to add a movie to favorites**

```typescript
import { useAppDispatch, useAppSelector } from '@/navigation/navigationTypes';
import { addToFavorites, removeFromFavorites } from '@/redux/slices/favoritesSlice';

const MyComponent = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);

  const handleAddFavorite = (movie: any) => {
    dispatch(
      addToFavorites({
        id: movie.id,
        title: movie.title,
        type: 'movie',
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
      })
    );
  };

  const handleRemoveFavorite = (movieId: number) => {
    dispatch(removeFromFavorites(movieId));
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((item) => item.id === movieId);
  };

  return (
    // Your component JSX
  );
};
```

## 5. Using Formik for Form Validation

**File: `src/screens/auth/LoginScreen.tsx`**

```typescript
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import Input from '@/components/Input';
import { colors, typography, spacing } from '@/styles';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginScreen: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      // TODO: Call login API
      console.log('Login with:', values);
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* <Input
        placeholder="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        error={formik.touched.email && formik.errors.email}
      />

      <Input
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        error={formik.touched.password && formik.errors.password}
        secureTextEntry
      /> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => formik.handleSubmit()}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: 8,
    marginTop: spacing.xl,
  },
  buttonText: {
    ...typography.labelLarge,
    color: colors.white,
    textAlign: 'center',
  },
});

export default LoginScreen;
```

## 6. Calling API Services

```typescript
import { getTrendingMovies } from '@/services/movieService';
import { setTrendingLoading, setTrendingData, setTrendingError } from '@/redux/slices/moviesSlice';

const fetchTrendingMovies = async (page: number = 1) => {
  try {
    dispatch(setTrendingLoading(true));
    const data = await getTrendingMovies(page);
    dispatch(
      setTrendingData({
        movies: data.results,
        page: page,
      })
    );
  } catch (error) {
    dispatch(setTrendingError('Failed to fetch movies'));
    console.error('Error:', error);
  } finally {
    dispatch(setTrendingLoading(false));
  }
};
```

## 7. Project Structure Tips

```
When creating new screens:
1. Create folder in src/screens/[feature]/
2. Create [Feature]Screen.tsx
3. Add navigation references
4. Create Redux slices if needed
5. Add API service methods

When creating components:
1. Create file in src/components/
2. Define TypeScript interfaces
3. Use color/typography from styles
4. Export as default
5. Document props with JSDoc
```

## 📚 Common Patterns

### Loading State
```typescript
const { data, loading, error } = useAppSelector((state) => state.movies.trending);

if (loading) return <LoadingIndicator />;
if (error) return <ErrorMessage message={error} />;
return <MovieList movies={data} />;
```

### Navigation
```typescript
const navigation = useNavigation();
navigation.navigate('Details', { movieId: 123 });
```

### Conditional Rendering
```typescript
{isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
```

---

Start with creating one screen, then expand from there! 🚀
