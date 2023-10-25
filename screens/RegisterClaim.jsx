import { createStackNavigator } from '@react-navigation/stack';

import HealthCheck from '../components/ClaimQuestions/HealthCheck';
import ClaimType from '../components/ClaimQuestions/ClaimType';

const Stack = createStackNavigator();

export default function RegisterClaim() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HealthCheck} />
      <Stack.Screen name="Tipo de Sinistro" component={ClaimType} />
    </Stack.Navigator>
  );
}