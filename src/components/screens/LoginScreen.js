import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button, ToastAndroid
} from 'react-native';
import { Content, Text, Form, Item, Label, Input, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions/LoginScreenActions';
import { connect } from 'react-redux';
import DeviceInfo from 'react-native-device-info';

import API from '../helpers/API';

var dev_id = DeviceInfo.getUniqueID();

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { validation: '', style: 'SectionStyle', id: dev_id, hidePassword: true };
        // this.state = { hidePassword: true }
    }

    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    async componentWillMount() {
        // if already logged in then, we redirect
        let api = new API();
        let token = await api.getToken();
        // console.log("Method ini dijalankan");
        if (token !== null) {
            // console.log("tokennya:", token);
            // this.props.profileFetch();      
            Actions.pesan({ type: 'reset' });
        }
    }

    onEmailChange(text) {
        // this.setState({ email: text }) 
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        // this.setState({ password: text })
        this.props.passwordChanged(text)
    }

    callfun() {
        alert('ok')
    }

    renderError() {
        if (this.state.validation) {
            return (
                <View>
                    <Text style={{ color: 'red', alignSelf: 'center', fontSize: 15 }}>{this.state.validation}</Text>
                </View>
            );
        }
    }

    onButtonPress() {        

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.props.email === '' || this.props.password === '') {
            this.setState({
                validation: 'Ada form yang masih kosong'

            });
        } else if (reg.test(this.props.email) === false) {
            this.setState({
                validation: `Email is not correct!`,
                style: 'email_error'
            });
        } else {
            this.props.loginUser(this.props.email, this.props.password, this.state.id)           
        }

    }

    goToSignUp = () => {
        Actions.signup()
    }

    goToLupaPassword = () => {
        Actions.lupa({ email: this.props.email })
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }}
                source={require('../img/bg2.png')}>
                <ScrollView>
                    <View style={styles.MainContainer}>
                        <Image source={require('../img/Logo1.png')} style={{ width: 260, height: 130, marginTop: 50, marginBottom: 150 }} />
                        <View style={styles[this.state.style]}>
                            <Image source={require('../img/user.png')} style={styles.ImageStyle} />
                            <TextInput style={{ width: '80%' }} underlineColorAndroid="transparent" placeholder="Email"
                                onChangeText={this.onEmailChange.bind(this)}
                                keyboardType="email-address"
                                value={this.props.email} />
                        </View>

                        <View style={styles.SectionStyle}>
                            <Image source={require('../img/locked.png')} style={styles.ImageStyle} />
                            <TextInput style={{ width: '80%' }} underlineColorAndroid="transparent" placeholder="Password" secureTextEntry={this.state.hidePassword}
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password} />
                            <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>
                                <Image source={(this.state.hidePassword) ? require('../img/hide.png') : require('../img/view.png')} style={styles.btnImage} />
                            </TouchableOpacity>
                        </View>
                        {this.renderError()}
                        <View style={{ width: "70%", margin: 10 }}>
                            {!this.props.loading &&
                                <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                                    <Text style={styles.button}>MASUK</Text>
                                </TouchableOpacity>
                            }
                            {this.props.loading && <Spinner size={24} />}
                            <TouchableOpacity onPress={this.goToLupaPassword}>
                                <Text style={styles.text1}>Lupa password ? </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "90%" }}>
                            <TouchableOpacity onPress={this.goToSignUp}><Text style={styles.btnsignup}> Belum punya akun ? Daftar disini</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
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
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
        width: '70%'
    },
    email_error: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'red',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    visibilityBtn:
    {
        position: 'absolute',
        right: 3,
        height: 25,
        width: 25,       
    },
    btnImage:
    {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
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
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    text1: {
        textAlign: 'center',
        color: 'white',
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15
    },
    underline: {
        textDecorationLine: 'underline'
    },
    button: {
        backgroundColor: '#26A9B5',
        borderColor: 'black',
        borderWidth: 0.5,
        textShadowColor: 'red',
        borderRadius: 7,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 10,
        textAlign: 'center',
    },
});
const mapStateToProps = (state) => {
    return {
        email: state.loginScreen.email,
        password: state.loginScreen.password,
        error: state.loginScreen.error,
        loading: state.loginScreen.loading,
        //   isConnected: state.checkConnection.isConnected,
        //   userId: state.notification.userId,
        //   notificationOpened: state.notification.notificationOpened
    };
};

LoginScreen = connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);
export { LoginScreen }