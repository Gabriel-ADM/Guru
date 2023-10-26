import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import TowTruck from "./TowTruck";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function TowTruckOne() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Guincho" component={TowTruckOne} />
            <Stack.Screen name="Enviar localização" component={TowTruck} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create(
    {
        header: {
            padding: 12,
            backgroundColor: '#5d0184',
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f4f4f4 ',
          },
          paragraph: {
            margin: 12,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black'
        },
        button: {
            width: "60%",
            margin: 20,
            padding: 10,
            backgroundColor: "#f4f4f4",
            borderRadius: "30px",
        }
    }
);