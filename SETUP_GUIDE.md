# StreamBox - Project Setup Guide

Welcome to StreamBox! 🎬 This guide will help you complete the project setup and start development.

## ✅ What's Already Set Up

Your project structure has been created with the following:

### 📁 Folder Structure

```
React app/
├── src/
│   ├── screens/                 # Screen components
│   │   ├── auth/               # Login/Register screens
│   │   ├── home/               # Home screen with trending content
│   │   ├── details/            # Movie/TV show details screen
│   │   └── favorites/          # Favorites management screen
│   ├── navigation/             # Navigation configuration
│   │   ├── RootNavigator.tsx   # Main navigation router
│   │   └── navigationTypes.ts  # Redux hooks for navigation
│   ├── redux/                  # State management
│   │   ├── slices/
│   │   │   ├── authSlice.ts    # Authentication state
│   │   │   ├── favoritesSlice.ts  # Favorites state
│   │   │   └── moviesSlice.ts  # Movies/TV shows state
│   │   └── store/
│   │       └── index.ts        # Redux store configuration
│   ├── services/               # API services
│   │   ├── api.ts              # Axios API configuration
│   │   ├── movieService.ts     # Movie API endpoints
│   │   └── tvService.ts        # TV show API endpoints
│   ├── components/             # Reusable components (TO BE CREATED)
│   ├── utils/                  # Utility functions
│   │   └── helpers.ts          # Helper functions
│   ├── styles/                 # Styling
│   │   ├── colors.ts           # Color palette
│   │   ├── typography.ts       # Text styles
│   │   └── spacing.ts          # Spacing & dimensions
│   └── constants/              # App constants
│       └── index.ts            # Configuration constants
├── App.tsx                     # Root component
├── app.json                    # Expo configuration
├── package.json                # Dependencies
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore file
├── .eslintrc.json              # ESLint configuration
└── README.md                   # Project README
```

### 📦 Installed Dependencies

#### Core Framework
- **react** & **react-native** - Mobile development framework
- **expo** - Development & deployment platform
- **expo-status-bar** - Status bar management
- **expo-vector-icons** - Icon library (Feather Icons)

#### Navigation
- **@react-navigation/native** - Navigation library
- **@react-navigation/bottom-tabs** - Bottom tab navigation
- **@react-navigation/stack** - Stack navigation
- **react-native-screens** - Screen management
- **react-native-safe-area-context** - Safe area handling
- **react-native-gesture-handler** - Gesture handling

#### State Management
- **@reduxjs/toolkit** - Redux with simplified API
- **redux** - State management library
- **react-redux** - React bindings for Redux
- **redux-persist** - Persist Redux state

#### HTTP & API
- **axios** - HTTP client

#### Form Validation
- **formik** - Form state management
- **yup** - Schema validation

#### Development Tools
- **jest** - Testing framework
- **eslint** - Code linting
- **@testing-library/react-native** - React Native testing utilities

## 🚀 Installation Steps

### Step 1: Install Node.js (if not already installed)
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version (v18 or higher)
3. Install and verify: `node --version` and `npm --version`

### Step 2: Install Expo CLI (globally)
```bash
npm install -g expo-cli
```

Verify installation:
```bash
expo --version
```

### Step 3: Install Project Dependencies
Navigate to your project directory and run:
```bash
cd "c:\Users\Anuradha\Downloads\Moratuwa Academic\Projects\React app"
npm install --legacy-peer-deps
```

**Note:** We use `--legacy-peer-deps` due to some peer dependency conflicts in the testing libraries. This is normal for React Native/Expo projects.

### Step 4: Get TMDb API Key
1. Go to [The Movie Database (TMDb)](https://www.themoviedb.org/)
2. Create a free account
3. Go to Account Settings → API
4. Copy your API key

### Step 5: Create `.env` File
In your project root, create a `.env` file:
```env
EXPO_PUBLIC_TMDB_API_KEY=your_api_key_here
EXPO_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
```

**Important:** Don't commit this file to version control!

## 📱 Running the App

### Option 1: Expo Go (Fastest for Testing)

**1. Install Expo Go on Your Phone:**
- **Android:** [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **iOS:** [Apple App Store](https://apps.apple.com/us/app/expo-go/id982107779)

**2. Start Development Server:**
```bash
npm start
```

**3. Scan QR Code with Expo Go App** (or press `i` for iOS/`a` for Android in terminal)

### Option 2: Android Emulator

**Prerequisites:**
- Android Studio installed
- Android SDK configured
- Emulator created in Android Studio

**Commands:**
```bash
npm run android
```

### Option 3: iOS Simulator (macOS only)

**Prerequisites:**
- Xcode installed
- Command line tools configured

**Commands:**
```bash
npm run ios
```

### Option 4: Web Browser (Limited)
```bash
npm run web
```

## 🛠️ Development Workflow

### 1. **Hot Reload**
- Changes are automatically reflected when you save files
- Press `R` in terminal to manually reload
- Press `D` to open Developer Menu

### 2. **Debugging**
- Use React Native Debugger: [react-native-debugger](https://github.com/jhen0409/react-native-debugger)
- Browser DevTools via Expo Web
- Console logs visible in terminal

### 3. **Running Tests**
```bash
npm test
```

### 4. **Code Linting**
```bash
npm run lint
```

## 📋 What You Need to Implement

The structure is ready, but you'll need to create:

### Screens (in `src/screens/`)
- [ ] **Auth Screens**
  - Login screen with Formik validation
  - Registration screen with Formik validation
  - Password reset flow (optional)

- [ ] **Home Screen**
  - Trending movies/TV shows display
  - Horizontal scroll for categories
  - Pull-to-refresh functionality
  - Pagination for loading more

- [ ] **Details Screen**
  - Full media information display
  - Cast and crew information
  - Rating and reviews
  - Add to favorites button
  - Watch trailer (if available)

- [ ] **Favorites Screen**
  - List of user's favorite items
  - Remove from favorites
  - Search/filter favorites

- [ ] **Profile Screen** (optional)
  - User information
  - Settings
  - Logout button

### Components (in `src/components/`)
- [ ] **MovieCard** - Reusable movie/show card
- [ ] **MovieList** - Scrollable list of movies
- [ ] **Header** - Navigation header
- [ ] **LoadingIndicator** - Loading spinner
- [ ] **ErrorMessage** - Error display
- [ ] **Rating** - Star rating display
- [ ] **Button** - Reusable button component
- [ ] **Input** - Form input component

### Remaining Work

1. **Complete Navigation Setup**
   - Implement AuthNavigator (login/register stack)
   - Implement HomeNavigator (bottom tabs with stacks)
   - Conditional rendering in RootNavigator

2. **Implement API Integration**
   - Complete service functions with error handling
   - Add loading states to Redux slices
   - Implement pagination

3. **Add Local Storage**
   - Configure AsyncStorage for user preferences
   - Test Redux Persist functionality

4. **Testing**
   - Write unit tests for utilities
   - Write component tests
   - Write integration tests

## 🎨 Design System

### Colors
- Primary: `#FF6B6B` (Red)
- Secondary: `#4ECDC4` (Teal)
- Background: `#0F0F0F` (Dark)
- Surface: `#1A1A1A` (Darker)

See `src/styles/colors.ts` for the complete palette.

### Typography
- Display, H1-H4 for headings
- Body (Large, Medium, Small) for content
- Label (Large, Medium) for UI elements
- Caption and Overline for smaller text

See `src/styles/typography.ts` for details.

### Spacing
- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **lg**: 16px (default)
- **xl**: 24px
- **xxl**: 32px
- **xxxl**: 48px

## 📚 Useful Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Guide](https://reactnavigation.org/docs/getting-started/)
- [Redux Toolkit Guide](https://redux-toolkit.js.org/)
- [TMDb API Documentation](https://developer.themoviedb.org/docs)
- [Formik Documentation](https://formik.org/)
- [Yup Validation](https://github.com/jquense/yup)

## 🐛 Troubleshooting

### Dependencies Not Installing
```bash
npm install --legacy-peer-deps
# or clear cache
npm cache clean --force
npm install --legacy-peer-deps
```

### Expo Go Not Working
- Ensure you're on same WiFi network
- Restart development server: `npm start`
- Clear Expo cache: `expo start --clear`

### Module Not Found Errors
- Clear node_modules: `rm -r node_modules` (or PowerShell: `rmdir node_modules -Force`)
- Reinstall: `npm install --legacy-peer-deps`

### TypeScript Errors
- These should resolve after dependencies install
- Ensure VS Code has TypeScript support installed

## 📝 Next Steps

1. ✅ Project structure created
2. ✅ Dependencies configured
3. ⏳ **Install dependencies** (running now)
4. 📝 Create `.env` file with TMDb API key
5. 🎨 Implement reusable components
6. 🧭 Build navigation structure
7. 🎬 Implement screens
8. 🔧 Integrate Redux for state management
9. 🧪 Add error handling and loading states
10. 📱 Test on device/emulator

## 💡 Tips for Success

1. **Start Small**: Build one screen at a time
2. **Use Expo Go**: Fastest way to test without complex setup
3. **Reference Redux DevTools**: Debug state changes
4. **Test Frequently**: Use hot reload to see changes instantly
5. **Follow Folder Structure**: Keeps code organized and scalable
6. **Use TypeScript**: Catch errors early with strong typing

---

**Happy Coding!** 🚀 If you have any questions or issues, feel free to ask!
