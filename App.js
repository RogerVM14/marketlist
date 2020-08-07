
import React from 'react';
import 'react-native-gesture-handler';
//import stacks
import AuthStack from './src/Navigation/AuthStack';
import AppStack from './src/Navigation/AppStack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from "react-native-flash-message";



const RootStack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login">
          <RootStack.Screen name="Login" component={AuthStack} options={{ headerShown: false }} />
          <RootStack.Screen name="Home" component={AppStack} options={{ headerShown: false }} />
        </RootStack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top"
      floating={true}
      duration = {2500}
      icon='auto'/>
    </>
  )
}

