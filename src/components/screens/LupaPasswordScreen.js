import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button
} from 'react-native';
import { Content, Text, Form, Item, Label, Input, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

import API from '../helpers/API';

class LupaPasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: this.props.email }
    }

    onEmailChange(text) {
        this.setState({ email: text })
    }

    onButtonPress() {
        // console.log('jalan')
        // console.log(this.state.email)
        let api = new API();
        api.lupa(
            this.state.email)
            .then((response) => {
                console.log(response.data.msg)
                if (response.data.msg === 'Welcome') {
                    // Alert.alert('bisa');
                    console.log('response', response.data)
                    alert('Check Your Email');                // ToastAndroid.show(`Berhasil: ${response.data.MSG}`)
                    Actions.login({ type: 'reset' })
                } else {
                    console.log('response', response.data)
                    alert('Email is not valid');
                }
            })
            .catch((error) => console.log(error))
    }

    callFun = () => {
        alert("Image Clicked!!!");
    }
    goToSignUp = () => {
        Actions.lupa()
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.MainContainer}>
                    <Image source={require('../img/Logo1.png')} style={{ width: 260, height: 130, marginTop: 50, marginBottom: 180 }} />
                    <Text>Lupa Pasword?</Text>
                    <View style={styles.SectionStyle}>
                        <Image source={require('../img/user.png')} style={styles.ImageStyle} />
                        <TextInput style={{ width: 215 }} underlineColorAndroid="transparent" placeholder="Email"
                            onChangeText={this.onEmailChange.bind(this)}
                            keyboardType="email-address"
                            defaultValue={this.state.email} />
                    </View>
                    <View style={{ width: "70%", margin: 10 }}>
                        <Button title="Kirim" color="#26A9B5" border-radius="15" onPress={this.onButtonPress.bind(this)} />
                    </View>
                    <Text style={{ fontSize: 14 }} >Password pengganti akan dikirim melalui email</Text>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    TextInputStyleClass: {
        borderColor: '#2196F3',
        backgroundColor: 'white',
        textAlign: 'center',
        width: 200,
        borderRadius: 5,
        fontSize: 15,
        marginBottom: 20,
        borderWidth: 0.5,
        height: 40,
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        marginTop: 70,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15
    },
    btnsignup: {
        textAlign: 'center',
        color: 'white',
        marginTop: 60,
        // backgroundColor: '#fff',
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    text1: {
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15
    },
    underline: {
        textDecorationLine: 'underline'
    }
});

export { LupaPasswordScreen }