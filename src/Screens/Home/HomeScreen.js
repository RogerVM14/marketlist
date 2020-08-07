import React from 'react';
import { Text, StyleSheet,View } from 'react-native';

export default function HomeScreen({ navigation }) {

    return (
        <View style={style.container}>
            <Text> Hola soy el home </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})