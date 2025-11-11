import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from './navigationTypes';

// Import navigation stacks (to be created)
// import AuthNavigator from './AuthNavigator';
// import HomeNavigator from './HomeNavigator';

export default function RootNavigator() {
  // TODO: Replace with actual Redux selector when auth slice is ready
  const isAuthenticated = false; // useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {/* {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />} */}
      {/* Placeholder - replace with actual navigators */}
    </NavigationContainer>
  );
}
