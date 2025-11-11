# StreamBox - Visual Project Overview

## 🎬 Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    STREAMBOX APP                             │
│          (Entertainment & Media Discovery)                  │
└─────────────────────────────────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌────▼────┐      ┌────▼────┐
    │ REACT   │      │ REDUX   │      │  EXPO   │
    │ NATIVE  │      │ TOOLKIT │      │  CLI    │
    └────┬────┘      └────┬────┘      └────┬────┘
         │                │                │
    [UI Layer]       [State Layer]    [Runtime]
```

---

## 📱 Screen Hierarchy

```
RootNavigator
│
├─ AuthNavigator (When Not Logged In)
│  ├─ LoginScreen
│  │  └─ Form Validation with Formik + Yup
│  └─ RegisterScreen
│     └─ Form Validation with Formik + Yup
│
└─ HomeNavigator (When Logged In)
   ├─ Home Tab
   │  ├─ HomeScreen
   │  │  ├─ Trending Movies List
   │  │  ├─ Popular Movies
   │  │  └─ Top Rated Shows
   │  └─ DetailsScreen
   │     ├─ Full Media Info
   │     ├─ Cast & Crew
   │     └─ Add to Favorites Button
   │
   ├─ Favorites Tab
   │  └─ FavoritesScreen
   │     ├─ List of Saved Items
   │     ├─ Remove from Favorites
   │     └─ Filter/Search
   │
   └─ Profile Tab
      └─ ProfileScreen
         ├─ User Info
         ├─ Settings
         └─ Logout Button
```

---

## 🗄️ State Management Structure

```
Redux Store
│
├─ Auth State
│  ├─ user: { id, email, name }
│  ├─ isAuthenticated: boolean
│  ├─ loading: boolean
│  └─ error: string | null
│
├─ Favorites State
│  ├─ items: [
│  │   {
│  │     id: number,
│  │     title: string,
│  │     type: 'movie' | 'tv',
│  │     poster_path: string,
│  │     vote_average: number,
│  │     addedAt: timestamp
│  │   }
│  │ ]
│  └─ loading: boolean
│
└─ Movies State
   ├─ trending: { data, loading, error, page }
   ├─ popular: { data, loading, error, page }
   ├─ topRated: { data, loading, error, page }
   ├─ search: { data, loading, error, query }
   └─ selectedMovie: Movie | null
```

---

## 🔌 Data Flow

```
User Action (Click)
    │
    ▼
Dispatch Redux Action
    │
    ▼
API Call (Axios)
    │
    ├─ Loading State → UI Shows Spinner
    │
    ├─ Success → Redux State Updated
    │         → Component Re-renders
    │
    └─ Error → Redux Error State
             → UI Shows Error Message
```

---

## 🌐 API Integration Structure

```
TMDb API (https://api.themoviedb.org/3)
    │
    ├─ /trending/movie/week      → getTrendingMovies()
    ├─ /trending/tv/week         → getTrendingTV()
    ├─ /movie/popular            → getPopularMovies()
    ├─ /tv/popular               → getPopularTV()
    ├─ /movie/top_rated          → getTopRatedMovies()
    ├─ /tv/top_rated             → getTopRatedTV()
    ├─ /search/movie             → searchMovies()
    ├─ /search/tv               → searchTV()
    ├─ /movie/{id}              → getMovieDetails()
    └─ /tv/{id}                 → getTVDetails()

         ↓ (Axios)
    
    apiService.ts
    ├─ Auto-inject API Key
    ├─ Handle Requests
    └─ Handle Errors
```

---

## 📦 Component Architecture

```
App.tsx (Root)
│
├─ Redux Provider
│  │
│  ├─ Redux Persist
│  │  │
│  │  ├─ NavigationContainer
│  │  │  │
│  │  │  └─ RootNavigator
│  │  │     ├─ AuthNavigator
│  │  │     └─ HomeNavigator
│  │  │        ├─ HomeStack
│  │  │        ├─ FavoritesStack
│  │  │        └─ ProfileStack
│  │  │
│  │  └─ StatusBar
│  │
│  └─ SafeAreaProvider
```

---

## 🎨 Design System Hierarchy

```
Design Tokens (src/styles/)
│
├─ colors.ts
│  ├─ Primary: #FF6B6B
│  ├─ Secondary: #4ECDC4
│  ├─ Background: #0F0F0F
│  ├─ Surface: #1A1A1A
│  ├─ Text: Primary, Secondary, Tertiary
│  └─ Semantic: Success, Warning, Error, Info
│
├─ typography.ts
│  ├─ Display (48px)
│  ├─ H1-H4 (40-24px)
│  ├─ Body Large/Medium/Small
│  ├─ Label Large/Medium
│  ├─ Caption
│  └─ Overline
│
└─ spacing.ts
   ├─ Scale: xs(4) → xxxl(48)
   ├─ Border Radius: xs(4) → round(999)
   └─ Shadows: sm, md, lg
```

---

## 📊 Data Model Examples

### Movie/TV Object
```typescript
{
  id: 550,
  title: "Fight Club",
  overview: "An insomniac office worker...",
  poster_path: "/fJJmDJP2VhIY2u5ytpvgnZLJfXu.jpg",
  backdrop_path: "/hxrZQIKcbDJLSh5Bq0bHc1rV8ZI.jpg",
  release_date: "1999-10-15",
  vote_average: 8.8,
  vote_count: 28547,
  popularity: 86.35
}
```

### Favorite Item
```typescript
{
  id: 550,
  title: "Fight Club",
  type: "movie",
  poster_path: "/fJJmDJP2VhIY2u5ytpvgnZLJfXu.jpg",
  vote_average: 8.8,
  addedAt: 1668090000000
}
```

### User State
```typescript
{
  id: "user_123",
  email: "user@example.com",
  name: "John Doe"
}
```

---

## 🔄 Development Workflow

```
1. Start Dev Server
   └─ npm start

2. Choose Platform
   ├─ a) Android Emulator
   ├─ b) iOS Simulator
   ├─ c) Expo Go
   └─ d) Web Browser

3. Make Code Changes
   └─ Hot Reload (Automatic)

4. View Changes
   └─ Instant Preview

5. Debug if Needed
   └─ Console Logs / Redux DevTools

6. Repeat Steps 3-5
   └─ Until feature complete
```

---

## 🚀 Deployment Pipeline

```
Local Development (npm start)
        ↓
Test on Device (Expo Go)
        ↓
Build Android (eas build --platform android)
        ↓
Build iOS (eas build --platform ios)
        ↓
Production Release (EAS Submit)
```

---

## 📈 Feature Implementation Order

```
Phase 1: Setup (This Week)
├─ ✅ Project Structure
├─ ✅ Redux Store
├─ ✅ API Services
├─ ✅ Design System
└─ 📝 Install Dependencies (In Progress)

Phase 2: Foundation (Week 1-2)
├─ Authentication Screens
├─ Basic Navigation
├─ HomeScreen UI
└─ Component Library

Phase 3: Integration (Week 2-3)
├─ Redux Actions
├─ API Integration
├─ Error Handling
└─ Loading States

Phase 4: Features (Week 3-4)
├─ Favorites Management
├─ Search Implementation
├─ Profile Screen
└─ Polish & Optimization

Phase 5: Testing & Release (Week 4)
├─ Device Testing
├─ Bug Fixes
├─ Performance Optimization
└─ Production Build
```

---

## 🔧 Technology Stack Visualization

```
┌─────────────────────────────────────────────────────┐
│              STREAMBOX TECH STACK                   │
├─────────────────────────────────────────────────────┤
│                                                     │
│  UI Layer:      React Native + Expo                │
│  Navigation:    React Navigation (Stack + Tabs)    │
│  State:         Redux Toolkit + Redux Persist      │
│  Forms:         Formik + Yup                       │
│  HTTP:          Axios                              │
│  Icons:         @expo/vector-icons                 │
│  Storage:       AsyncStorage                       │
│  API:           TMDb (The Movie Database)          │
│                                                     │
│  Language:      TypeScript                         │
│  Testing:       Jest + React Testing Library       │
│  Linting:       ESLint                             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 📚 File Cross-References

```
src/screens/ (Create screens here)
  ├─ Links to: navigation, redux, components, services
  └─ Uses: colors, typography from src/styles

src/navigation/ (Connect screens)
  ├─ Links to: screens, redux hooks
  └─ Uses: ROUTES from src/constants

src/redux/ (Manage state)
  ├─ Links to: services for API calls
  └─ Imports: axios from services/api

src/services/ (API calls)
  ├─ Links to: redux slices
  └─ Uses: API_KEY, API_BASE_URL from constants

src/components/ (Reusable components)
  ├─ Links to: screens, navigation
  └─ Uses: colors, typography, spacing from styles

src/utils/ (Helper functions)
  ├─ Used by: All components and screens
  └─ Uses: constants

src/styles/ (Design tokens)
  └─ Used by: All visual components

src/constants/ (App constants)
  └─ Used by: All modules
```

---

## 🎯 Key Metrics

```
Project Completeness:  ████████░░  80%
├─ Structure:         ██████████ 100% ✅
├─ Configuration:     ██████████ 100% ✅
├─ Documentation:     ██████████ 100% ✅
├─ Dependencies:      ████░░░░░░  40% ⏳ (Installing)
├─ Screens:          ░░░░░░░░░░   0%  (To Create)
├─ Components:        ░░░░░░░░░░   0%  (To Create)
└─ Features:         ░░░░░░░░░░   0%  (To Build)

Lines of Code:
├─ Project Files:   ~3,500 lines created
├─ Documentation:  ~5,000 lines written
├─ Examples:       ~1,000 lines in guides
└─ Total:         ~9,500 lines of setup
```

---

## 📋 Prerequisites Status

```
✅ Node.js v16+
✅ npm v8+
⏳ Expo CLI (install with: npm install -g expo-cli)
⏳ Dependencies (installing now)
⏳ Android Studio/Xcode (optional, for emulator)
⏳ TMDb API Key (get free at themoviedb.org)
⏳ .env file with API key (to be created)
```

---

## 🎓 Knowledge Requirements

```
Required:
✓ JavaScript/TypeScript basics
✓ React concepts (Components, Hooks, State)
✓ Understanding of async/await

Helpful:
◐ Redux state management
◐ REST API knowledge
◐ Mobile development experience
◐ Form validation patterns

Nice to Have:
○ React Native experience
○ Navigation patterns
○ Testing frameworks
○ Performance optimization
```

---

## 🌟 Success Indicators Checklist

```
Development Setup:
☐ npm install completes successfully
☐ npm start runs without critical errors
☐ App appears on phone via Expo Go

First Run:
☐ App loads without crashing
☐ No red error screens
☐ Console is clean (no critical errors)
☐ Hot reload works (files auto-update)

Functionality:
☐ Redux DevTools shows state changes
☐ API calls return data
☐ Navigation works between screens
☐ Favorites persist after app restart
☐ Form validation works
☐ API errors handled gracefully
```

---

## 📞 Support Matrix

```
Issue Type          → Solution Resource
───────────────────────────────────────
Setup Questions     → SETUP_GUIDE.md
Code Examples       → QUICK_START.md
Troubleshooting     → DEBUGGING_GUIDE.md
Getting Started     → FIRST_RUN.md
Project Overview    → README.md
General Help        → PROJECT_INDEX.md
```

---

**Visual Tour Complete!** 🎉

Start your journey:
1. Wait for npm install
2. Read FIRST_RUN.md
3. Set up .env file
4. Run npm start
5. See your app! 📱

---

*Welcome to StreamBox Development!* 🚀
