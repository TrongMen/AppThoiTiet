
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import React from 'react';

import Screen1 from "./screens/screen1";
import Home from './screens/home'

import Screen2 from "./screens/screen2";
import { Provider } from 'react-redux';
import store from './redux/store';


export default function App() {
  let Stack = createStackNavigator();
  return (
  <Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name='Screen2' component={Screen2} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>  
  </NavigationContainer>
  </Provider>
);

}







 {/* <Stack.Screen name='HomeTab' component={Mytab} options={{headerShown:false}}></Stack.Screen> */}
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image } from 'react-native';
// const Tab = createBottomTabNavigator();

// const Mytab = () => {
//   return (
//       <Tab.Navigator  tabBarOptions={{
//         activeTintColor: 'blue',
//         inactiveTintColor: 'gray',
//         style: {
//           backgroundColor: 'lightgray',
//         },
//       }}
//         screenOptions={{headerShown:false}}>
//         <Tab.Screen 
        
//         name="Screen1" component={Screen1}  options={{
//           tabBarIcon:()=>{
//           <Image style={{tintColor:'red',activeTintColor:'blue'}} source={require('./assets/location.png')}></Image>
//         }}} />
        
//         <Tab.Screen name="Screen2" component={Screen2} />
//         <Tab.Screen name="Home" component={Home} />
//       </Tab.Navigator>
  
//   );
// };