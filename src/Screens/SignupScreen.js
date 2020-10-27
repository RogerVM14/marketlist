import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Icon, Input, Button } from '@ui-kitten/components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Signup = (email, name, pass) => {

    
    axios.post(url + '/user/', {
        email: email,
        name: name,
        password: pass,
        passwordConfirm: passConf
    })
        .then((response) => {
            console.log('Create account...');
            navigation.navigate('Pager')
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
                if (!!error) {
                    showMessage({
                        message: error,
                        type: "danger",
                    });
                }
            }


        });

}






export default function SignupScreen({ navigation }) {

    // Password input configuration  
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );
    // Password input configuration  

    // Set values and config to the password input
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const [email, setEmail] = useState();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();


    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>

                <Image
                    style={styles.image}
                    source={require('../../assets/img/CreateAccount.png')}
                />
                <Text style={styles.title}>
                    Crea tu cuenta
                </Text>




                <View style={styles.inputs}>

                    <Input
                        style={{ marginBottom: 20 }}
                        size='large'
                        placeholder='Ingresa tu correo'
                        label='CORREO'
                        autoCapitalize="none"
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />

                    <Input
                        style={{ marginBottom: 20 }}
                        size='large'
                        placeholder='Ingresa tu usuario'
                        label='USUARIO'
                        autoCapitalize="none"
                        onChangeText={user => setUser(user)}
                        value={user}
                    />

                    <Input
                        style={{ marginBottom: 20 }}
                        size='large'
                        label='CONTRASEÑA'
                        placeholder='Ingresa tu contraseña'
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        autoCapitalize="none"
                        onChangeText={password => setPassword(password)}
                        value={password}
                    />

                    <Button
                        size='large'
                        style={styles.button}
                    >
                        ¡Comencemos!
                    </Button>

                </View>
            </SafeAreaView>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    image: {
        top: 0,
        width: 230,
        height: 230,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: "center",
    },
    title: {
        top: 20,
        fontFamily: "Now-Black",
        fontSize: 32
    },
    form: {
        flex: 4,

    },
    inputs: {
        width: "80%",
        marginTop: "15%",
        alignSelf: "center",
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: "#241EA3",
        shadowColor: "#241EA3",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },

});