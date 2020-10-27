import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Animated, Platform, StatusBar } from 'react-native';


StatusBar.setBarStyle("dark-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("rgba(0,0,0,0)");
  StatusBar.setTranslucent(true);
}

export default function SplashScreen({ navigation }) {

    const [animate, setAnimate] = useState({
        animate: new Animated.Value(0),
        animatexy: new Animated.ValueXY({ x: 0, y: 0 })
    })

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('AuthStack', { screen: 'Login' })
        }, 3000)

    }, []);
    return (
        < View style={styles.container}>
            <Text style={styles.title}> Market List </Text>
            <Text style={styles.subtitle}> Enlista tus productos </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        textShadowColor: "#fff",
        fontFamily: "Now-Black",
    },
    subtitle: {
        fontFamily: Platform.OS === 'android'
            ? 'sans-serif-light'
            : 'DamascusLight',
        marginTop: 20
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        width: 200
    },

})