import React, { useState, useContext } from 'react';
import axios from 'axios';
import Global from '../../../Global'
import { showMessage } from "react-native-flash-message";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { UserContext } from '../../Context/UserContext';






export default function LoginScreen({ navigation }) {

    const url = Global.url;
    const ErrorValues = Global.ErrorValues;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //Usercontext
    const [user, setUser] = useContext(UserContext);

    const handleLogin = (email, password) => {

        axios.post(url + '/login/', {
            email: email,
            password: password
        })
            .then(res => {
                let { data } = res.data;
                // let name = data.name;
                // name = name.split(" ");
                // name = name[0];

                setUser({
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    marketLists: data.marketLists,
                })

                navigation.navigate('Home')
                if (Error != null) {
                    setErrorMessage(null)
                }

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

    }

    return (
        <View style={styles.container}>
            {/* < View style={styles.errorMessage}>
                {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            </View> */}


            < View style={styles.form}>

                < View>
                    < Text style={styles.inputTitle}> Correo </Text>
                    < TextInput style={styles.input}
                        autoCapitalize="none"
                        onChangeText={email => setEmail(email)}
                        value={email}
                    ></TextInput>
                </View>

                < View style={{ marginTop: 32 }}>
                    < Text style={styles.inputTitle}> Contraseña </Text>
                    < TextInput style={styles.input}
                        autoCapitalize="none"
                        secureTextEntry
                        onChangeText={password => setPassword(password)}
                        value={password}
                    ></TextInput>
                </View>

                < TouchableOpacity
                    style={styles.button}
                    onPress={() => { handleLogin(email, password) }}
                // onPress={ () => {navigation.navigate('MenuTabs')} }
                >
                    <Text style={{ color: "#fff", fontWeight: "500" }}> Iniciar Sesion </Text>
                </TouchableOpacity>

                < TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        ¿Eres nuevo? <Text style={{ fontWeight: "500", color: "#E9446A" }} onPress={() => { navigation.navigate('Signup') }}> Crea una cuenta  </Text>
                    </Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        marginBottom: 10,
        marginHorizontal: 30,
        marginTop: 250,

    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",

    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        width: 300,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#242463",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    errorMessage: {
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
        top: 130
    },



});