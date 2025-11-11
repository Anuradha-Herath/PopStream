# StreamBox - First Run Checklist

Follow these steps to get your app running after setup completes.

## ✅ Pre-Installation Verification

Before starting, ensure you have:
- [ ] Node.js v16+ installed
- [ ] npm v8+ installed
- [ ] 5+ GB free disk space
- [ ] Internet connection
- [ ] A code editor (VS Code recommended)

**Verify installations:**
```bash
node --version      # Should be v16 or higher
npm --version       # Should be v8 or higher
```

---

## 📦 Step 1: Wait for Dependencies Installation

The system is currently installing npm packages. You'll see:
- Downloading packages
- Installing dependencies
- Building modules

**This may take 5-15 minutes depending on internet speed.**

✅ **Installation is complete when you see:**
```
added XXX packages in XXm
```

❌ **If you see errors:**
- Run: `npm install --legacy-peer-deps`
- Or check `DEBUGGING_GUIDE.md`

---

## 🔑 Step 2: Create Environment Variables

1. **In your project root directory**, create a new file named `.env`

2. **Copy this content:**
   ```env
   EXPO_PUBLIC_TMDB_API_KEY=your_api_key_here
   EXPO_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

3. **Get your API key:**
   - Go to: https://www.themoviedb.org/settings/api
   - Sign in (create account if needed)
   - Copy your API key
   - Replace `your_api_key_here` with your actual key

4. **Save the file**

⚠️ **Important:** 
- Never commit `.env` to git
- Keep your API key secret
- If key is leaked, regenerate it in TMDb dashboard

---

## 💻 Step 3: Install Expo CLI (Global)

```bash
npm install -g expo-cli
```

**Verify installation:**
```bash
expo --version
```

Should show a version number like `1.x.x` or higher.

---

## 📱 Step 4: Download Expo Go App

### For Android:
1. Open Google Play Store
2. Search for "Expo Go"
3. Download (by Expo Inc.)
4. Keep it installed on your phone

### For iOS:
1. Open Apple App Store
2. Search for "Expo Go"
3. Download (by Expo Inc.)
4. Keep it installed on your phone

**No Expo Go?** No problem! Use Android Emulator/iOS Simulator instead (see Step 7).

---

## 🚀 Step 5: Start Development Server

Open terminal in project root and run:

```bash
npm start
```

You should see:
```
› Metro waiting on exp://192.168.x.x:19000
› Scan the QR code above with Expo Go
```

Keep this terminal running (don't close it).

---

## 📱 Step 6: Run App on Your Phone (Easiest!)

### Option A: With Expo Go App (Recommended for Beginners)

1. **Open Expo Go** on your phone
2. **Scan the QR code** shown in terminal
3. **Wait for app to load** (may take 1-2 minutes first time)
4. **You should see your app!** 🎉

**To reload:**
- Physically shake your phone
- Or in terminal, press `R`

### Option B: Using Terminal Commands

In the terminal where you ran `npm start`:
- Press `a` → Opens on **Android Emulator**
- Press `i` → Opens on **iOS Simulator** (macOS only)
- Press `w` → Opens on **Web Browser**
- Press `d` → Opens **Developer Menu**

---

## 🖥️ Step 7: Run on Emulator (Alternative)

### Android Emulator

**Prerequisites:**
- Install Android Studio
- Create virtual device in Android Studio
- Start emulator before running app

**Then:**
```bash
npm run android
```

### iOS Simulator (macOS Only)

**Prerequisites:**
- Install Xcode from App Store
- Command line tools installed

**Then:**
```bash
npm run ios
```

---

## ✅ Step 8: Verify Everything Works

In your app, you should see:
- ✅ App loads without errors
- ✅ Status bar visible
- ✅ Console shows no critical errors
- ✅ Can interact with the app (once screens are created)

If you see a blank white screen:
- This is normal! No screens have been created yet
- Continue with development

---

## 🎨 Step 9: Make Your First Change

Test hot reload by editing `App.tsx`:

1. Open `App.tsx` in your editor
2. Find the component and add your name
3. Save the file
4. **App should update instantly!** (no manual reload needed)

This confirms hot reload is working. 🔄

---

## 🏗️ Step 10: Start Building

You're ready to build! Here's the suggested order:

### Week 1: Foundation
```bash
# Create HomeScreen
src/screens/home/HomeScreen.tsx

# Create basic MovieCard component
src/components/MovieCard.tsx

# Test by importing in App.tsx
```

### Week 2: Features
```bash
# Add LoginScreen
src/screens/auth/LoginScreen.tsx

# Add DetailsScreen
src/screens/details/DetailsScreen.tsx

# Set up navigation
```

### Week 3: Integration
```bash
# Connect Redux
# Connect API
# Add error handling
```

---

## 🛠️ Helpful Commands

```bash
# Start development
npm start

# Run on Android
npm run android

# Run on iOS (macOS)
npm run ios

# Run on Web
npm run web

# Clear cache and restart
expo start --clear

# Run tests
npm test

# Check code style
npm run lint

# Install new package
npm install package-name --legacy-peer-deps
```

---

## 📚 What to Read Next

1. **QUICK_START.md** - Code examples to copy/paste
2. **SETUP_GUIDE.md** - Detailed setup information
3. **DEBUGGING_GUIDE.md** - If something goes wrong
4. **src/constants/index.ts** - See the constants available

---

## 🎯 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Blank white screen | This is normal! Create your first screen |
| Red error screen | Check console for error details |
| App doesn't reload on save | Restart: Press `C` then `npm start` again |
| Can't scan QR code | Ensure same WiFi network |
| API errors | Check `.env` file has correct API key |
| Dependencies error | Run `npm install --legacy-peer-deps` |

---

## 📱 Testing Checklist

- [ ] App starts without errors
- [ ] Hot reload works (make a change, file auto-reloads)
- [ ] Can open Developer Menu (shake phone or press D)
- [ ] Console doesn't show critical errors
- [ ] Ready to start building screens

---

## 🎓 Learning Resources

### Official Documentation
- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

### Your Project Documentation
- Check README.md for project overview
- Check SETUP_GUIDE.md for detailed setup
- Check QUICK_START.md for code examples

### Video Tutorials (YouTube)
- "React Native for Beginners"
- "Expo Tutorial"
- "Redux for React Native"

---

## 💡 Tips for Success

1. **Start small** - Create one screen at a time
2. **Test frequently** - Use hot reload to see changes instantly
3. **Use TypeScript** - Catch errors early
4. **Follow the structure** - Keep code organized
5. **Read error messages** - They tell you what's wrong
6. **Reference examples** - Copy patterns from QUICK_START.md
7. **Join communities** - Expo Discord, Reddit r/reactnative

---

## 🆘 Need Help?

1. **Check DEBUGGING_GUIDE.md** - Common issues & solutions
2. **Re-read error messages** - Usually very specific
3. **Check your code** - Usually a typo or missing import
4. **Search online** - Most issues have been solved
5. **Ask in Expo Discord** - Community is very helpful

---

## ✨ You're Ready!

🎉 Congratulations! Your development environment is set up.

### Next Actions:
1. ✅ Complete this checklist
2. 📖 Read QUICK_START.md for code examples
3. 🏗️ Create your first screen
4. 🚀 Build amazing features!

---

**Happy Coding!** 🚀

Remember: Every expert was once a beginner. Take it step by step and you'll be building amazing apps in no time!

---

**Need to verify something?**
- Check file structure: `SETUP_GUIDE.md`
- See code examples: `QUICK_START.md`
- Troubleshoot issues: `DEBUGGING_GUIDE.md`
- Project overview: `README.md`
