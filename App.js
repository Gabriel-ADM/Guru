import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Home from "./screens/Home"
import Profile from "./screens/Profile";
import Question from "./screens/Question";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{
          headerShown: false
        }}/>
        <Tab.Screen name="Question" component={Question}
        options={{
          headerShown: false
        }}/>
        <Tab.Screen name="Profile" component={Profile}
        options={{
          headerShown: false
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}