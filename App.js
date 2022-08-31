import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { Provider } from "react-redux";
import { store } from "./store";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import HomeScreen from "./src/screens/HomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import StartingScreen from "./src/screens/StartingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import MenuScreen from "./src/screens/MenuScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <TailwindProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Start"
                component={StartingScreen}
                // options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                // options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={SignUpScreen}
                // options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                // options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoadingUser"
                component={LoadingScreen}
                // options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Menu"
                component={MenuScreen}
                // options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </TailwindProvider>
        </Provider>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
}
