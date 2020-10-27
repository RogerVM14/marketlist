import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import PagerScreen from '../Screens/PagerScreen'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppStack = (props) => {

    return (
        <Stack.Navigator initialRouteName="Pager">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Pager" component={PagerScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );

}

export default AppStack;