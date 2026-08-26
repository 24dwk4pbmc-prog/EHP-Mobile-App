import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NutritionScreen from "../screens/NutritionScreen";
import TrainingScreen from "../screens/TrainingScreen";
import ProgressScreen from "../screens/ProgressScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
import ProfileSetupScreen from "../screens/ProfileSetupScreen";
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        <Stack.Screen
          name="Nutrition"
          component={NutritionScreen}
        />

        <Stack.Screen
          name="Training"
          component={TrainingScreen}
        />

        <Stack.Screen
          name="Progress"
          component={ProgressScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
