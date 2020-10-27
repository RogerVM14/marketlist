import React, { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { UserContext } from '../Context/UserContext';
import ViewPager from '@react-native-community/viewpager';
import ViewPagerComponent from '../Components/ViewPagerComponent';
let FirstImage = require('../../assets/img/fp.png');
let SecondImage = require('../../assets/img/Share.png');
let LikeImage = require('../../assets/img/likep.png');
let enjoyimage = require('../../assets/img/tp.png');


const StarIcon = (props) => (
    <Icon {...props} name='star' />
);




export default function Pager({ navigation }) {

    const [user, setUser] = useContext(UserContext);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const shouldLoadComponent = (index) => index === selectedIndex;


    return (

        <ViewPager style={styles.viewPager} initialPage={0} showPageIndicator={true}>
            {/* Firts View */}
            <View key="1">
                <ViewPagerComponent
                    key="1"
                    title="Crea!"
                    subtitle="Crea tus listas, asignales nombre 
                      y elige los productos que necesites"
                    image={FirstImage}
                    navigation={navigation}
                />
            </View>

            {/* Firts View */}

            {/* Second View */}
            <View key="2">
                <ViewPagerComponent

                    title="Comparte!"
                    subtitle="Comparte todas tus listas con tus 
                          amigos y desconocidos"
                    image={SecondImage}
                    navigation={navigation}
                />
            </View>

            {/* Second View */}

            {/* Third View */}
            <View key="3">
                <ViewPagerComponent

                    title="Sigue!"
                    subtitle="¡Sigue todas tus listas favoritas!"
                    image={LikeImage}
                    navigation={navigation}
                />
            </View>
            {/* Third View */}

            {/* Fourth View */}
            <View key="4">
                <ViewPagerComponent
                    title="Disfruta!"
                    subtitle="¡Disfruta de todas las listas 
                    de los demás usuarios!"
                    image={enjoyimage}
                    navigation={navigation}
                    isEnd="true"
                />
            </View>
            {/* Fourth View */}

        </ViewPager>





    );
}



const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        justifyContent: "center",
    }
});

