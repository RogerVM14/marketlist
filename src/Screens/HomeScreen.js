import React, { useState, useContext, useEffect } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { UserContext } from '../Context/UserContext';

//async storage
import AsyncStorage from '@react-native-community/async-storage';

_saveSession = async () => {
    await AsyncStorage.setItem('IsLoggedIn','true')
}

export default function HomeScreen({ navigation }) {

    // useEffect(() => {
    //     // _saveSession();
    
    // }, []);



    const [user, setUser] = useContext(UserContext);

    return (
        <View style={style.container}>
            {
                user.name ? <Text style={style.welcome}> Bienvenido {user.name} </Text> : <Text> Inicia Sesion </Text>
            }
            {/* <Button
            title="Borrar"
            onPress={() => AsyncStorage.clear()}
            >
             
            </Button>
             */}

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

})