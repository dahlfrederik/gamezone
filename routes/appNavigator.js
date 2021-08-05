import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { BorderlessButton } from "react-native-gesture-handler";

const Stack = createStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#eee",
            height: 90,
          },
          headerTintColor: "#444",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "GameZone" }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: "Review Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
