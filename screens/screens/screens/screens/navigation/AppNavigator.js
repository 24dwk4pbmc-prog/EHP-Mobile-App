import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NutritionScreen from "../screens/NutritionScreen";
import TrainingScreen from "../screens/TrainingScreen";
import ProgressScreen from "../screens/ProgressScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:"#050505"
          },
          headerTintColor:"#fff"
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />

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
