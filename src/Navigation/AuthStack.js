import React from 'react';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createStackNavigator();

const AuthStack = (props) => {

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={SignupScreen}  options={{ headerShown: false }}/>
            {/* <Stack.Screen name="Splash" component={SplashScreen}  options={{ headerShown: false,  }}/> */}
        </Stack.Navigator>
    );

}

export default AuthStack;