import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button
} from 'react-native';
import { Content, Text, Form, Item, Label, Input, Spinner } from 'native-base';
import CountDown from 'react-native-countdown-component';
import { Actions } from 'react-native-router-flux';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { verify } from '../actions/VerificationScreenActions';
// import { emailChanged } from '../actions/SignUpScreenActions';
import { connect } from 'react-redux';


import API from '../helpers/API';

class VerificationScreen extends Component {
    constructor(props) {
        super(props);
        this.onLaunchClicked = this.onLaunchClicked.bind(this);
        this.state = {
            code1: '', code2: '', code3: '', code4: '', timer: 3, btnkirimulang: true, arrCode: true,
            code: '',
        }
        // this.state = { email: this.props.email }

    }

    onLaunchClicked(event) {
        event.preventDefault();
        // **** here's the timeout ****
        // setTimeout(() => this.setState({ btnkirimulang: true }), 1);        
        this.setState({ timer: 90 })

        console.log(this.state.email)
        console.log(this.state.code1)
        console.log(this.state.code2)
        console.log(this.state.code3)
        let api = new API();
        api.checkcode(
            this.state.code1, this.state.code2, this.state.code3, this.state.code4, this.state.email)
            .then((response) => {
                if (response.data.msg === 'Nice') {
                    // Alert.alert('bisa');
                    console.log('response', response.data)
                    alert(response.data.msg);                // ToastAndroid.show(`Berhasil: ${response.data.MSG}`)
                } else {
                    console.log('response', response.data)
                    alert(response.data.msg);                // ToastAndroid.show(`Berhasil: ${response.data.MSG}`)
                }
            })
            .catch((error) => {
                console.log('response', response.data)
                alert(response.data.msg);
                // console.log(error.data.message)
                // ToastAndroid.show(`Kesalahan: ${error.data.message}`)
            })

        // return this.props.onLaunchClicked();

    }

    onKirimUlang() {
        this.setState({ timer: 3, btnkirimulang: true, code: '' })
        let api = new API();
        api.kirimUlang(
            this.props.email)
            .then((response) => {
                if (response.data.msg === 'Cek Email Anda') {
                    // Alert.alert('bisa');
                    console.log('response', response.data)
                    Alert.alert(response.data.msg);                // ToastAndroid.show(`Berhasil: ${response.data.MSG}`)
                } else {
                    console.log('response', response.data)
                    Alert.alert(response.data.msg);                // ToastAndroid.show(`Berhasil: ${response.data.MSG}`)
                }
            })
            .catch((error) => {
                console.log('response', response.data)
                Alert.alert(response.data.msg);
                // console.log(error.data.message)
                // ToastAndroid.show(`Kesalahan: ${error.data.message}`)
            })
    }

    callFun = () => {
        alert("Image Clicked!!!");
    }

    pinInput = React.createRef();

    _checkCode = (code) => {
        this.props.verify(code, this.props.email)
    }

    render() {
        const { code } = this.state;
        const { email } = this.props;
        // console.log('mail',email);
        return (
            <ScrollView>
                <View style={styles.MainContainer}>
                    <Text style={{ fontSize: 14, marginTop: 30 }} >KODE VERIFIKASI DIKIRIM MELALUI EMAIL</Text>
                    <Text style={{ fontSize: 16 }}>{email}</Text>
                    <SmoothPinCodeInput
                        ref={this.pinInput}
                        value={code}
                        onTextChange={code => this.setState({ code })}
                        onFulfill={this._checkCode}
                        onBackspace={() => console.log('No more back.')}
                    />
                    <CountDown
                        until={this.state.timer}
                        onFinish={() => this.setState({ btnkirimulang: false, timer: null })}
                        digitStyle={{ backgroundColor: 'transparent' }}
                        // onPress={() => alert('hello')}
                        timeToShow={['M', 'S']}
                        size={20}
                    />
                    <View style={{ width: "70%", margin: 10 }}>
                        <Button title="Kirim Ulang" disabled={this.state.btnkirimulang} color="#26A9B5" border-radius="15" onPress={this.onKirimUlang.bind(this)} />
                    </View>

                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        // olor:'grey'
    },
    formStyle: {
        paddingLeft: 0,
        marginLeft: 0,
        flexDirection: 'row'

    },
    itemStyles: {
        width: 40,
        marginTop: 70
    }
});

const mapStateToProps = (state) => {
    return {
        error: state.verificationScreen.error,
        loading: state.verificationScreen.loading,
        //   isConnected: state.checkConnection.isConnected,
        email: state.signUpScreen.email,
        //   notificationOpened: state.notification.notificationOpened
    };
};

VerificationScreen = connect(mapStateToProps, { verify })(VerificationScreen);

export { VerificationScreen }