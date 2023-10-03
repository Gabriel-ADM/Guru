import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from "./screens/Home"
import Profile from "./screens/Profile";
import Question from "./screens/Question";

const Tab = createBottomTabNavigator();

export default function Routes() {
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home}
      options={{
        headerShown: false
      }} />
    <Tab.Screen name="Question" component={Question}
      options={{
        headerShown: false
      }} />
    <Tab.Screen name="Profile" component={Profile}
      options={{
        headerShown: false
      }} />
  </Tab.Navigator>
}