import React,{ useState, useContext} from 'react';
import { Text, StyleSheet,View } from 'react-native';
import { UserContext } from '../../Context/UserContext';

export default function HomeScreen({ navigation }) {

    const [user, setUser] = useContext(UserContext);

    return (
        <View style={style.container}>
            {
                user.name ? <Text style = { style.welcome}> Bienvenido {user.name} </Text> : <Text> Inicia Sesion </Text>
            }

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    welcome: {
    fontSize:20,
    fontStyle: "italic",
    fontWeight:"bold"
    }
})