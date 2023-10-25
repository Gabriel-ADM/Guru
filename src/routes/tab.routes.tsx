import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Question from '../screens/Question';
import QueryHistory from '../screens/QueryHistory';
import TowTruckOne from '../screens/TowTruckOne';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
        }}
            
            />

        <Tab.Screen 
            name="Question" 
            component={Question}
            options={{
                tabBarIcon: ({ color, size }) => <Feather name="plus-circle" color={color} size={size}/>
        }}/>

        <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size}/>
        }}/>

        <Tab.Screen 
            name="QueryHistory" 
            component={QueryHistory} 
            options={{
                tabBarIcon: ({ color, size }) => <Feather name="clock" color={color} size={size}/>
        }}/>

        <Tab.Screen 
            name="TowTruckOne" 
            component={TowTruckOne} 
            options={{
                tabBarIcon: ({ color, size }) => <Feather name="navigation" color={color} size={size}/>
        }}/>
      </Tab.Navigator>
    )
}