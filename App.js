import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import Home from "./src/screens/Home"
import Profile from "./src/screens/Profile";
import QueryHistory from "./src/screens/QueryHistory";
import RegisterClaim from "./src/screens/RegisterClaim";
import HealthCheck from "./components/ClaimQuestions/HealthCheck";
import TowTruckOne from "./src/screens/TowTruckOne";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Registrar Sinistro"
        activeColor="#f0edf6"
        inactiveColor="#3e2465">
        <Tab.Screen name="Início" component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Registrar Sinistro" component={RegisterClaim}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="card-plus" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Perfil" component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="face-recognition" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Guincho" component={TowTruckOne}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="navigation" color={color} size={26} />
            ),
          }} />
          
      </Tab.Navigator>
    </NavigationContainer>
  )
}