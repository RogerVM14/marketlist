
import React from 'react';
import 'react-native-gesture-handler';
//import stacks
import AuthStack from './src/Navigation/AuthStack';
import AppStack from './src/Navigation/AppStack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from "react-native-flash-message";
import { UserProvider } from './src/Context/UserContext';



const RootStack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <UserProvider>
          <RootStack.Navigator initialRouteName="Login">
            <RootStack.Screen name="Login" component={AuthStack} options={{ headerShown: false }} />
            <RootStack.Screen name="Home" component={AppStack} options={{ headerShown: false }} />
          </RootStack.Navigator>
        </UserProvider>
      </NavigationContainer>
      <FlashMessage position="top"
        floating={true}
        duration={4000}
        icon='auto'
        style={{

        }}
        titleStyle={{
          marginLeft: 10,
          fontSize: 20
        }}
        textStyle={{
          marginLeft: 10,
        }}

      />
    </>
  )
}

