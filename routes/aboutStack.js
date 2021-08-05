import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const Stack = createStackNavigator();

export default AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 90,
        },
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "About GameZone" }}
      />
    </Stack.Navigator>
  );
};
