# StreamBox - Debugging & Troubleshooting Guide

## Common Issues & Solutions

### 🔴 Installation Issues

#### Issue: `npm ERR! code ERESOLVE`
**Solution:**
```bash
npm install --legacy-peer-deps
```
This happens due to peer dependency conflicts in testing libraries. It's safe to use.

#### Issue: Module not found after installation
**Solution:**
```bash
rm -Force node_modules  # On Windows PowerShell
npm cache clean --force
npm install --legacy-peer-deps
```

#### Issue: Different npm versions cause issues
**Solution:**
```bash
npm install -g npm@latest  # Update npm globally
npm install --legacy-peer-deps
```

---

### 🔴 Expo Issues

#### Issue: Expo not starting
**Solution:**
```bash
npm start
# or with cleared cache
expo start --clear
# or specify a port
expo start --port 19000
```

#### Issue: QR code not scanning in Expo Go
**Solution:**
- Ensure device and computer are on the **same WiFi network**
- Restart development server: Press `C` in terminal
- Restart Expo Go app on your phone
- Try tunneling mode: `expo start --tunnel`

#### Issue: Port 19000 already in use
**Solution:**
```bash
expo start --port 19001
```

#### Issue: Module resolution error
**Solution:**
Update `metro.config.js`:
```javascript
const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = new Proxy({}, {
  get: (target, name) => {
    if (target.hasOwnProperty(name)) {
      return target[name];
    }
    return path.join(process.cwd(), `node_modules/${name}`);
  },
});

module.exports = config;
```

---

### 🔴 TypeScript Issues

#### Issue: `Cannot find module` errors
**Solution:**
- Clear TypeScript cache: `rm -Force .eslintcache`
- Restart VS Code
- Check import paths match actual file structure
- Ensure all files have correct extensions (`.tsx`, `.ts`)

#### Issue: JSX not recognized
**Solution:**
Ensure `App.tsx` starts with:
```typescript
import React from 'react';
```

#### Issue: Type errors in Redux
**Solution:**
Make sure to use typed hooks:
```typescript
import { useAppDispatch, useAppSelector } from '@/navigation/navigationTypes';

// Not this:
// import { useDispatch, useSelector } from 'react-redux';
```

---

### 🔴 Redux Issues

#### Issue: Redux Persist not working
**Solution:**
Check `store/index.ts`:
```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'favorites'],
};
```

#### Issue: State not persisting
**Solution:**
- Ensure reducers are added to `whitelist` in persistConfig
- Check AsyncStorage is installed: `npm install @react-native-async-storage/async-storage`
- Clear app data and restart

#### Issue: State undefined in component
**Solution:**
```typescript
// Use optional chaining
const user = useAppSelector((state) => state?.auth?.user);

// Or provide default
const user = useAppSelector((state) => state.auth?.user || null);
```

---

### 🔴 API Issues

#### Issue: Cannot fetch from TMDb API
**Checklist:**
- [ ] API key added to `.env` file
- [ ] `.env` file is not in `.gitignore`
- [ ] Restarted development server after adding `.env`
- [ ] API key is valid and not expired
- [ ] Using `process.env.EXPO_PUBLIC_*` naming (for Expo)

**Solution:**
Restart dev server:
```bash
npm start  # Press C to clear cache first
```

#### Issue: CORS errors
**Solution:**
This happens with web testing. For now, test on Android/iOS only. Web requires proxy setup.

#### Issue: 401 Unauthorized
**Solution:**
- Check API key is correct
- Verify key in TMDb dashboard settings
- Try regenerating the key in TMDb settings

#### Issue: 404 Not Found
**Solution:**
- Check endpoint URL spelling
- Verify movie/TV ID exists
- Check TMDb API documentation for correct endpoint format

#### Issue: Rate limiting (429 error)
**Solution:**
- Reduce request frequency
- Add delays between requests:
```typescript
import { sleep } from '@/utils/helpers';

// In your fetch function
await sleep(1000);  // Wait 1 second
```

---

### 🔴 Navigation Issues

#### Issue: Navigation undefined
**Solution:**
Ensure navigators are properly nested in `RootNavigator.tsx`:
```typescript
<NavigationContainer>
  <AuthNavigator /> or <HomeNavigator />
</NavigationContainer>
```

#### Issue: Cannot navigate to screen
**Solution:**
```typescript
// In component
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
navigation.navigate('ScreenName', { params });
```

#### Issue: Back button not working
**Solution:**
Add back action to header:
```typescript
<Stack.Navigator>
  <Stack.Screen 
    name="Details" 
    component={DetailsScreen}
    options={{
      headerLeft: () => <BackButton />,
    }}
  />
</Stack.Navigator>
```

---

### 🔴 Component Issues

#### Issue: Images not loading
**Solution:**
```typescript
// Add require statement for local images
const image = require('@/assets/placeholder.png');

<Image source={image} style={{ width: 200, height: 200 }} />
```

#### Issue: Text not rendering
**Solution:**
- Check color contrast with background
- Ensure `numberOfLines` prop is set if needed:
```typescript
<Text numberOfLines={2}>Long text...</Text>
```

#### Issue: Styles not applying
**Solution:**
```typescript
// Make sure to return StyleSheet.create()
const styles = StyleSheet.create({
  container: { flex: 1 },
});

<View style={styles.container}>
```

---

### 🔴 Form Issues

#### Issue: Formik not validating
**Solution:**
```typescript
// Ensure schema is passed
const formik = useFormik({
  initialValues: { email: '' },
  validationSchema: yup.object().shape({
    email: yup.string().email().required(),
  }),
  onSubmit: handleSubmit,
});

// Validate on blur
<Input onBlur={formik.handleBlur('email')} />

// Show errors
{formik.touched.email && formik.errors.email && (
  <Text>{formik.errors.email}</Text>
)}
```

#### Issue: Input not updating
**Solution:**
```typescript
// Use handleChange correctly
<TextInput
  value={formik.values.email}
  onChangeText={formik.handleChange('email')}
/>
```

---

### 🔴 Performance Issues

#### Issue: App running slow
**Solution:**
- Profile with React DevTools
- Use `React.memo` for expensive components:
```typescript
const MovieCard = React.memo(({ movie }: Props) => {
  return <View>...</View>;
});
```

- Use `useMemo` for expensive calculations:
```typescript
const expensiveData = useMemo(() => {
  return complexCalculation(data);
}, [data]);
```

#### Issue: Large lists lagging
**Solution:**
Use `FlatList` instead of `ScrollView`:
```typescript
<FlatList
  data={movies}
  renderItem={({ item }) => <MovieCard movie={item} />}
  keyExtractor={(item) => item.id.toString()}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  updateCellsBatchingPeriod={50}
/>
```

---

### 🔴 Device/Emulator Issues

#### Issue: Android Emulator not starting
**Solution:**
```bash
# List available emulators
emulator -list-avds

# Start specific emulator
emulator -avd emulator_name
```

#### Issue: iOS Simulator slow
**Solution:**
- Close other apps
- Reset simulator: `xcrun simctl erase all`
- Update Xcode

#### Issue: Hot reload not working
**Solution:**
- Ensure watching is enabled
- Check file permissions
- Restart dev server

---

## 🛠️ Debugging Tools

### VS Code Extensions
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **ESLint**
- **Thunder Client** (for API testing)

### Command Line Tools
```bash
# Check React Native version
npm list react-native

# Check Expo version
expo --version

# Clear Metro bundler cache
expo start --clear

# Run linter
npm run lint
```

### Development Menu
In running app:
- **Android**: Shake device or press `D`
- **iOS**: Shake device or press `D`
- **Web**: Press `Ctrl+M` or `Cmd+M`

Options:
- Reload
- Toggle Element Inspector
- Show Performance Monitor
- Toggle Remote JS Debugging

---

## 🐛 Debug Logging

### Console Logs
```typescript
console.log('Value:', value);
console.warn('Warning:', warning);
console.error('Error:', error);
```

### Redux DevTools
```typescript
// In Redux store
const store = configureStore({
  reducer: rootReducer,
  devTools: true,  // Enable Redux DevTools
});
```

Then inspect in React Native Debugger.

### Network Logging
```typescript
// In api.ts
api.interceptors.request.use((config) => {
  console.log('API Request:', config.url, config.params);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);
```

---

## ✅ Verification Checklist

- [ ] Dependencies installed successfully
- [ ] `.env` file created with TMDb API key
- [ ] `npm start` runs without errors
- [ ] Expo Go app downloads and runs
- [ ] App appears in Expo Go with your project name
- [ ] HomeScreen shows without crashing
- [ ] Able to navigate between screens
- [ ] Redux state updates visible in React DevTools
- [ ] API calls return data (check console)
- [ ] Images load correctly

---

## 📞 Getting Help

1. **Check Documentation**: Official docs for React Native, Expo, Redux
2. **Read Error Messages**: They usually tell you exactly what's wrong
3. **Check Console**: Browser/terminal console for detailed errors
4. **Search Stack Overflow**: Most issues have been solved before
5. **Check GitHub Issues**: Search the library's GitHub for similar issues

---

## 🔄 Recovery Steps

If your project is broken, try in order:

1. ```bash
   npm start --clear
   ```

2. ```bash
   npm cache clean --force
   npm install --legacy-peer-deps
   ```

3. ```bash
   rm -Force node_modules
   npm cache clean --force
   npm install --legacy-peer-deps
   ```

4. **Delete and reinstall** entire `node_modules` and start fresh

5. **Start a new Expo project** and copy your source files over

---

**Remember**: Most issues are configuration related. Check your setup first! 🎯
