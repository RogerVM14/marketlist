import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Global from '../../Global'
import { showMessage } from "react-native-flash-message";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native';
import { Icon, Input, Button } from '@ui-kitten/components';
import { UserContext } from '../Context/UserContext';



export default function LoginScreen({ navigation }) {


    const url = Global.url;
    const ErrorValues = Global.ErrorValues;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // Set values and config to the password input
    const [value, setValue] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );
    // Password input configuration  



    //Usercontext
    const [user, setUser] = useContext(UserContext);



    //  Handle Login

    const handleLogin = (email, password) => {
        //console.log(email, password)
        axios.post(url + '/login/', {
            // email: 'roger.vazquez14@gmail.com',
            // password: 'Rogelio1923V..'
            email: email,
            password: password
        })
            .then(res => {
                let { data } = res.data;
                console.log('ya paso')
                setUser({
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    marketLists: data.marketLists,
                });
               

                //Saving the data to the asyncstorage

                //Once the user is saved, navigate to the pager screen
                //var isLoggedIn = _checkSession();
                // console.log('chales... ', isLoggedIn)
                navigation.navigate('AppStack', { screen: 'Pager' });


            })

            .catch(function ({ response }) {

                if (response) {

                    const { error, errors } = response.data;
                    if (!!errors) {

                        showMessage({
                            message: 'Error en ' + ErrorValues[errors[0]['param']],
                            description: errors[0]['msg'],
                            type: "danger",
                        });
                    }
                    if (!!error) {
                        showMessage({
                            message: 'Error en el usuario',
                            description: response.data['error'],
                            type: "danger",
                        });
                    }
                }


            });

    }//  Handle Login



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/img/Logo.png')}
                />

                <Text style={styles.title}>Market List</Text>


                <View style={styles.inputView} >
                    <Input
                        style={{ marginBottom: 20 }}
                        size='large'
                        placeholder='Ingresa tu usuario'
                        label='USUARIO'
                        autocomplete='false'
                        autoCapitalize='none'
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                </View>
                <View style={styles.inputView} >
                    <Input
                        style={{ marginBottom: 20 }}
                        size='large'
                        value={password}
                        label='CONTRASEÑA'
                        placeholder='Ingresa tu contraseña'
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={password => setPassword(password)}
                    />

                </View>

                <View style={styles.inputView} >
                    <Button
                        size='large'
                        style={styles.button}
                        onPress={() => handleLogin(email, password)}
                    >
                        Iniciar Sesion
            </Button>
                </View>


                < TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => { navigation.navigate('AuthStack', { screen: 'Signup' }) }} >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        ¿Eres nuevo? <Text style={{ fontWeight: "500", color: "#E9446A" }}> Crea una cuenta  </Text>
                    </Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
    logo: {
        bottom: 80
    },
    inputView: {
        width: "90%",
        borderRadius: 25,
        height: 50,
        marginBottom: 30,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    title: {
        fontFamily: "Now-Black",
        fontSize: 36,
        bottom: 70
    }
});