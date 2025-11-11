import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAppSelector } from "./navigationTypes";

// Import navigation stacks (to be created)
// import AuthNavigator from './AuthNavigator';
// import HomeNavigator from './HomeNavigator';

const Stack = createStackNavigator();

// Placeholder screens
function AuthScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Auth Screen - To be implemented</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen - To be implemented</Text>
    </View>
  );
}

export default function RootNavigator() {
  // TODO: Replace with actual Redux selector when auth slice is ready
  const isAuthenticated = false; // useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
