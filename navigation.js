import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();


// const screenOptions = { 
//     headerShow: false,
// }

export const SignedInStack = () => (
    <NavigationContainer>
        {/* //if user is laged in  acess HomeScreen and NewPostScreen */}
        <Stack.Navigator  
           // screenOptions= {screenOptions} 
            initialRouteName= 'HomeScreen' 
          
        >
            <Stack.Screen  name='HomeScreen' component = {HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen  name='NewPostScreen' component={ NewPostScreen}  options={{ headerShown: false }}/>

        </Stack.Navigator>
    </NavigationContainer>

     //if user is Not Logged in acess loginScreen and SignupScreen
)


export const SignedoutStack = () => (
  <NavigationContainer>
        <Stack.Navigator 
            //screenOptions= {screenOptions}  
            initialRouteName= 'LoginScreen' 
           
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen  name='SignupScreen' component={SignupScreen}  options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
)



