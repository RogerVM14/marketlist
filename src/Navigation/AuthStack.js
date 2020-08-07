import React from 'react';
import LoginScreen from '../Screens/Login/LoginScreen';
import SignupScreen from '../Screens/Signup/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = (props) => {

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={SignupScreen}  options={{ headerShown: false }}/>
        </Stack.Navigator>
    );

}

export default AuthStack;