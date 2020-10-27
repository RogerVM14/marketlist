import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
//import stacks
import AuthStack from './src/Navigation/AuthStack';
import AppStack from './src/Navigation/AppStack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from "react-native-flash-message";
import { UserProvider } from './src/Context/UserContext';
//
// import AsyncStorage from '@react-native-community/async-storage';

//UI Kitten
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';





const RootStack = createStackNavigator();



export default function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(null);

    //   _checkSession = async () => {
    //     let value = await AsyncStorage.getItem('IsLoggedIn');
    //     console.log('Islogged ', value)
    //     return value;
    // }
    // useEffect(() => {
    //   _checkSession().then(() => setIsLoggedIn(_checkSession)));
    // },[]);

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>

        <NavigationContainer>
          <UserProvider>
            <RootStack.Navigator>
              <RootStack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
              <RootStack.Screen name="AppStack" component={AppStack} options={{ headerShown: false }} />
            </RootStack.Navigator>
          </UserProvider>
        </NavigationContainer>


        <FlashMessage position="top"
          floating={true}
          duration={4000}
          icon='auto'
          titleStyle={{
            marginLeft: 10,
            fontSize: 20
          }}
          textStyle={{
            marginLeft: 10,
          }}

        />
      </ApplicationProvider>
    </>
  )
}

