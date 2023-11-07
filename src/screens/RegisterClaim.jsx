import { createStackNavigator } from '@react-navigation/stack';

import HealthCheck from '../../components/ClaimQuestions/HealthCheck';
import ClaimType from '../../components/ClaimQuestions/ClaimType';
import React from "react";
import ClaimPhotos from '../../components/ClaimQuestions/ClaimPhotos';

const Stack = createStackNavigator();

export default function RegisterClaim() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registro de Sinistro" component={HealthCheck} />
      <Stack.Screen name="Tipo de Sinistro" component={ClaimType} />
      <Stack.Screen name="Registro Fotografico" component={ClaimPhotos}/>
    </Stack.Navigator>
  );
}