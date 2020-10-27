import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from '@ui-kitten/components';



export default function ViewPagerComponent({ navigation, title, subtitle, image, isEnd }) {

    return (

        <View style={styles.viewPager}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.subtitle}> {subtitle} </Text>
            </View>


            <View style={styles.imageContainer}>
                < ImageBackground
                    resizeMode="contain"
                    source={image}
                    style={styles.image}
                ></ImageBackground>
            </View>

            <View style={styles.footerView}>
                {isEnd ?
                    <Button
                        size='large'
                        style={styles.button}
                        onPress={() => { navigation.navigate('AppStack', { screen: 'Home' }) }}
                    >
                        ¡Comencemos!
                </Button>
                    :
                    < TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}
                        onPress={() => { navigation.navigate('AppStack', { screen: 'Home' }) }}
                    >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                            Saltar
                     </Text>
                    </TouchableOpacity>
                }


            </View>




        </View>

    )
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    titleContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: "Now-Black",
        fontSize: 36,
    },
    subtitle: {
        marginTop: 10,
        fontFamily: "Now-Light",
        fontSize: 19,
        textAlign: "center"

    },
    imageContainer: {
        flex: 2.5,
        justifyContent: "center",
        alignItems: "center",
        width:"90%",
        height:"100%",
        alignSelf:"center"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    footerView: {
        flex: 2,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    button: {
        height: "25%",
        width: "65%",
        alignSelf: "center",
        textAlign:"center",
        backgroundColor: "#241EA3",   
    }


});