
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import React from 'react';
import Screen1 from "./screens/screen1";
import Home from './screens/home'
import Screen2 from "./screens/screen2";

export default function App() {
  let Stack = createStackNavigator();
  return (
// <Home/>
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name='Screen2' component={Screen2} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>  
  </NavigationContainer>
);

}