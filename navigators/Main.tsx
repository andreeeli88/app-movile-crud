import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegistroScreen from '../screens/RegistroScreen';
import Welcome from '../screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registro" component={RegistroScreen} />
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Login" component={RegistroScreen} />
    </Tab.Navigator>
  );
}
  export default function TabNavigator() { 
    return(
        <NavigationContainer>
            <MyTabs></MyTabs>
        </NavigationContainer>
    )
  }
