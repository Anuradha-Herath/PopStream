# StreamBox - Entertainment & Media App

A mobile application for browsing trending movies and TV shows using React Native and Expo.

## Project Overview

StreamBox is a fully-featured entertainment and media discovery app that allows users to:
- Browse trending movies and TV shows
- View detailed information about media content
- Manage favorite items
- Authenticate with login/registration
- Persistent local data storage

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Stack & Bottom Tab Navigator)
- **State Management**: Redux Toolkit with Redux Persist
- **HTTP Client**: Axios
- **Icons**: Feather Icons (@expo/vector-icons)
- **Form Validation**: Formik & Yup
- **Data Persistence**: Redux Persist & AsyncStorage

## Project Structure

```
streambox/
├── src/
│   ├── screens/              # Screen components
│   │   ├── auth/            # Authentication screens
│   │   ├── home/            # Home screen
│   │   ├── details/         # Details screen
│   │   └── favorites/       # Favorites screen
│   ├── navigation/          # Navigation configuration
│   ├── redux/               # Redux store setup
│   │   ├── slices/          # Redux slices (auth, favorites, movies)
│   │   └── store/           # Store configuration
│   ├── services/            # API services
│   ├── components/          # Reusable components
│   ├── utils/               # Utility functions
│   ├── styles/              # Global styles & themes
│   └── constants/           # Constants and configuration
├── assets/                  # Images, icons, fonts
├── App.tsx                  # Root component
├── app.json                 # Expo configuration
├── package.json             # Dependencies
└── README.md
```

## Prerequisites

Before you begin, ensure you have:

1. **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
2. **npm** or **yarn** - Comes with Node.js
3. **Expo CLI** - Install globally:
   ```bash
   npm install -g expo-cli
   ```
4. **Android Studio** (for Android development) or **Xcode** (for iOS development)
5. **Android Emulator** or **iOS Simulator**
6. **TMDb API Key** - Get it from [The Movie Database API](https://www.themoviedb.org/settings/api)

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
EXPO_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
```

### 3. Install Expo Go (Optional)

For development on physical devices:
- Android: Download "Expo Go" from Google Play Store
- iOS: Download "Expo Go" from Apple App Store

## Running the App

### Development Mode

Start the Expo development server:
```bash
npm start
```

### Android Emulator

```bash
npm run android
```

### iOS Simulator (macOS only)

```bash
npm run ios
```

### Web Browser

```bash
npm run web
```

## Development Tips

1. **Hot Reload**: Expo automatically reloads the app when you save changes
2. **Debugging**: Open the developer menu with:
   - Android: Shake device or press `D` in terminal
   - iOS: Shake device or press `D` in terminal
3. **Testing**: Run tests with `npm test`
4. **Linting**: Check code style with `npm run lint`

## Features to Implement

- [ ] User Authentication (Login/Registration)
- [ ] Home Screen (Trending Movies/Shows)
- [ ] Details Screen
- [ ] Favorites Management
- [ ] Redux State Management
- [ ] API Integration with TMDb
- [ ] Persistent Local Storage
- [ ] Error Handling & Loading States
- [ ] Responsive UI Design

## API Integration

The app uses [The Movie Database (TMDb) API](https://www.themoviedb.org/settings/api) for data. 

Key endpoints:
- `/trending/movie/week` - Trending movies
- `/trending/tv/week` - Trending TV shows
- `/movie/{id}` - Movie details
- `/tv/{id}` - TV show details

## Contributing

This is a learning project. Feel free to experiment and improve!

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Guide](https://reactnavigation.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [TMDb API Documentation](https://developer.themoviedb.org/docs)

## Notes

- This project is set up for development. For production deployment, refer to Expo's build and distribution guides.
- Ensure you have proper API rate limiting and error handling implemented.

## License

This project is open source and available under the MIT License.

---

**Happy Coding!** 🎬🚀
