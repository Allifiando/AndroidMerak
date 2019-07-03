import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button, ToastAndroid,
} from 'react-native';
import { Content, Text, Form, Item, Label, Input, Spinner, Container, Card, Body, Picker, } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { namaDepanChanged, namaBelakangChanged, genderChanged, teleponChanged, alamatChanged, emailChanged, passwordChanged, signupUser } from '../actions/SignUpScreenActions';
import { connect } from 'react-redux';
import PasswordInputText from 'react-native-hide-show-password-input';

import API from '../helpers/API';
// import console = require('console');

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validation: '',            
            style1: 'inputStyle',
            style2: 'inputStyle',
            style3: 'inputStyle',
            // loading: 'false'
        };
    }

    onNamaDepanChange(text) {
        // this.setState({ nama_depan: text })
        this.props.namaDepanChanged(text)
    }

    onNamaBelakangChange(text) {
        // this.setState({ nama_belakang: text })
        this.props.namaBelakangChanged(text)
    }

    onGenderChange(text) {
        // this.setState({ gender: text });
        this.props.genderChanged(text)
    }
    onTeleponChange(text) {
        // this.setState({ telepon: text })
        this.props.teleponChanged(text)
    }

    onAlamatChange(text) {
        // this.setState({ alamat: text })
        this.props.alamatChanged(text)
    }

    onEmailChange(text) {
        // this.setState({ email: text })
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        // this.setState({ password: text })
        this.props.passwordChanged(text)
    }

    // onConfirmPasswordChange(text) {
    //     this.setState({ confirm_password: text })
    //     this.state.confirmPasswordChanged(text)
    // }

    renderError() {
        if (this.state.validation) {
            return (
                <View>
                    <Text style={{ color: 'red', alignSelf: 'center', fontSize: 14, margin: 5 }}>{this.state.validation}</Text>
                </View>
            );
        }
    }

    onButtonPress() {

        let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let regpassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,}$/;

        // console.log(this.state.gender);        
        if (this.props.nama_depan === '' || this.props.telepon === '' || this.props.alamat === '' || this.props.email === '' || this.props.password === '') {
            this.setState({
                validation: 'Ada form yang masih kosong'
            });
        }else if(this.props.gender === '' || this.props.gender === null || this.props.gender === 'null'   ){
            this.setState({
                validation: 'Pilih Gender'
            });
        }else if (regemail.test(this.props.email) === false) {
            this.setState({
                validation: `Email is not correct!`,
                style1: 'email_error'
            });
        } else if (regpassword.test(this.props.password) === false) {
            this.setState({
                validation: `Password must be 8 character or more and contains 1 numeric !`,
                style2: 'email_error',
                style1: 'inputStyle'
            });
        } else {
            console.log('gender',this.props.gender);
            this.props.signupUser(this.props.nama_depan, this.props.nama_belakang,this.props.gender,this.props.telepon,this.props.alamat,this.props.email,this.props.password)                        
        }

    }

    goToSignUp = () => {
        Actions.signup()
    }

    goToLupaPassword = () => {
        Actions.lupa()
    }

    render() {
        // console.log(this.props);
        return (
            <ImageBackground style={{ flex: 1 }}
                source={require('../img/bg2.png')}>
                <ScrollView>
                    <Card style={styles.cardStyle}>
                        <View style={{ backgroundColor: '#26A9B5', borderRadius: 10, height: 60 }}>
                            <Image source={require('../img/Logo1.png')} style={{ width: 90, height: 40, marginTop: 10, marginBottom: 10, alignSelf: 'center', resizeMode: "stretch" }} />
                        </View>
                        <Form style={styles.formStyle}>
                            <Item floatingLabel style={styles.inputStyle}>
                                <Label style={{ fontSize: 14 }}>Nama Depan</Label>
                                <Input
                                    style={{ fontSize: 14 }}
                                    onChangeText={this.onNamaDepanChange.bind(this)}
                                    value={this.props.nama_depan} />
                            </Item>
                            <Item floatingLabel style={styles.inputStyle}>
                                <Label style={{ fontSize: 14 }}>Nama Belakang</Label>
                                <Input
                                    style={{ fontSize: 14 }}
                                    onChangeText={this.onNamaBelakangChange.bind(this)}
                                    value={this.props.nama_belakang} />
                            </Item>
                            <Item picker style={styles.inputStyle}>
                                <Picker
                                    mode="dropdown"
                                    style={{ fontSize: 14 }}
                                    selectedValue={this.props.gender}
                                    onValueChange={this.onGenderChange.bind(this)}
                                >
                                    <Picker.Item label="Pilih Gender" value="null" />
                                    <Picker.Item label="Laki-laki" value="Laki-laki" />
                                    <Picker.Item label="Perempuan" value="Perempuan" />
                                </Picker>
                            </Item>
                            <Item floatingLabel style={styles.inputStyle}>
                                <Label style={{ fontSize: 14 }}>Telepon</Label>
                                <Input
                                    style={{ fontSize: 14 }}
                                    keyboardType="numeric"
                                    onChangeText={this.onTeleponChange.bind(this)}
                                    value={this.props.telepon} />
                            </Item>
                            <Item floatingLabel style={styles.inputStyle}>
                                <Label style={{ fontSize: 14 }}>Alamat</Label>
                                <Input
                                    style={{ fontSize: 14 }}
                                    onChangeText={this.onAlamatChange.bind(this)}
                                    value={this.props.alamat} />
                            </Item>
                            <Text style={{fontSize:10, color:'red', marginLeft:7}}>* alamat harus sesuai dengan alamat KTP</Text>
                            <Item floatingLabel style={styles[this.props.style1]}>
                                <Label style={{ fontSize: 14 }}>Email</Label>
                                <Input
                                    style={{ fontSize: 14 }}
                                    onChangeText={this.onEmailChange.bind(this)}
                                    keyboardType="email-address"
                                    value={this.props.email} />
                            </Item>
                            {/* <Item floatingLabel style={styles[this.state.style2]}>
                                <Label style={{ fontSize: 14 }}>Password</Label>
                                <Input
                                    style={{ fontSize: 14 }}
                                    onChangeText={this.onPasswordChange.bind(this)}
                                    secureTextEntry={true}
                                    value={this.state.password} />
                            </Item> */}
                            <View style={styles.inputStyle}>
                                <PasswordInputText
                                    // style={{ marginLeft: 10 }}
                                    style={{ fontSize: 14 }}
                                    value={this.props.password}
                                    onChangeText={this.onPasswordChange.bind(this)}
                                />
                            </View>
                           
                        </Form>
                        {this.renderError()}
                        <View style={{ marginBottom: 20, marginTop: 10, width: '70%', alignSelf: 'center' }}>
                        {!this.props.loading &&
                            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                                <Text style={styles.button}>DAFTAR</Text>
                            </TouchableOpacity>
                        }
                        {this.props.loading && <Spinner size={24} />}
                        </View>
                    </Card>
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
    cardStyle: {
        // flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderRadius: 10,
        marginTop: 40,
        alignSelf: 'center',
        // height:'80%',
        width: '80%'
    },
    formStyle: {
        paddingLeft: 0,
        marginLeft: 0
    },
    inputStyle: {
        // borderWidth: 1,
        // borderColor: 'grey',
        // margin: 7,
        // marginBottom:5,
        marginRight: 10,
        marginLeft: 10,
        // borderRadius: 5
    },
    email_error: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 10,
        marginLeft: 10,
        borderRadius: 5
    },
    button: {
        backgroundColor: '#26A9B5',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
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
        nama_depan: state.signUpScreen.nama_depan,
        nama_belakang: state.signUpScreen.nama_belakang,
        gender: state.signUpScreen.gender,
        telepon: state.signUpScreen.telepon,
        alamat: state.signUpScreen.alamat,
        email: state.signUpScreen.email,
        password: state.signUpScreen.password,        
        error: state.signUpScreen.error,
        loading: state.signUpScreen.loading,

        //   isConnected: state.checkConnection.isConnected,
        //   userId: state.notification.userId,
        //   notificationOpened: state.notification.notificationOpened
    };
};

SignUpScreen = connect(mapStateToProps, { namaDepanChanged, namaBelakangChanged, genderChanged, teleponChanged, alamatChanged, emailChanged, passwordChanged, signupUser })
(SignUpScreen);

export { SignUpScreen }