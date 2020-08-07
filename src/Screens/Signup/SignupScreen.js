import React, { useState } from 'react';
import Global from '../../../Global';
import axios from 'axios';
import { showMessage } from "react-native-flash-message";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function SignupScreen({ navigation }) {

    const url = Global.url;
    const ErrorValues =  Global.ErrorValues;
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    //Errors constants
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPass, setErrorPass] = useState(null);
    const [errorPassConf, setErrorPassConf] = useState(null);


    const Signup = (email, name, pass, passConf) => {



        axios.post(url + '/user/', {
            email: email,
            name: name,
            password: pass,
            passwordConfirm: passConf
        })
            .then((response) => {
                console.log('Create account...');
                navigation.navigate('Home')
                if (Error != null) {
                    setErrorMessage(null)
                }

            })
            .catch(function ({ response }) {

                if (response) {
                    //console.log(response.data)
                    const { error, errors } = response.data;
                    if (!!errors) {

                        showMessage({
                            message: 'Error en ' + ErrorValues[errors[0]['param']],
                            description: errors[0]['msg'],
                            type: "danger",
                        });
                    }
                    if (!!error) { console.log('tiene errores del lado del client'); }
                }


            });

    }



    return (
        <View style={styles.container}>



            {/* < View style={styles.errorMessage}>
                {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            </View> */}


            < View style={styles.form}>


                < View style={{ marginTop: 32 }}>
                    < Text style={styles.inputTitle}> Nombre </Text>
                    < TextInput style={styles.input}
                        autoCapitalize="none"
                        onChangeText={name => setName(name)}
                        value={name}
                    ></TextInput>
                </View>

                < View style={{ marginTop: 32 }}>
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

                < View style={{ marginTop: 32 }}>
                    < Text style={styles.inputTitle}> Confirmar Contraseña </Text>
                    < TextInput style={styles.input}
                        autoCapitalize="none"
                        secureTextEntry
                        onChangeText={passwordConfirm => setPasswordConfirm(passwordConfirm)}
                        value={passwordConfirm}
                    ></TextInput>
                </View>

                < TouchableOpacity
                    style={styles.button}
                    onPress={() => { Signup(email, name, password, passwordConfirm) }}
                    // onPress={() => {
                    //     showMessage({
                    //         message: "Simple message",
                    //         type: "info",
                    //     });
                    // }}
                >
                    <Text style={{ color: "#fff", fontWeight: "500" }} > Crear Cuenta </Text>
                </TouchableOpacity>


                <View style={styles.socialViewButtons}>
                    {/* r<CustomButton /> */}
                </View>


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
        backgroundColor: "#e03e36",
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
    socialButton: {
        marginRight: 10,
        backgroundColor: "#e03e36",
        borderRadius: 4,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,

    },
    socialViewButtons: {
        flex: 1,
        flexDirection: "row"
    }



});