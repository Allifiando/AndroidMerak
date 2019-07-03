import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, BackHandler, NetInfo, Linking
} from 'react-native';
// import { StatusBar } from 'native-base';
import { Actions } from 'react-native-router-flux';

// import API from '../api/API';

class MenuScreen extends Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress',  this.handleBackButton());
    //     // NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectionChange);
    // }

    // componentWillMount() {
    //     BackHandler.removeEventListener('hardwareBackPress',  this.handleBackButton());
    //     // NetInfo.isConnected.removeEventListener('connectionChange', this._handleConnectionChange);
    // }

    // exit() {
    //     // BackHandler.exitApp();
    //     Alert.alert('oke');
    //     // Actions.pop({ type: 'reset' });
    // }

    // handleBackButton() {
    //     console.log('tes');
    //     Alert.alert(
    //         'Caution',
    //         'Are you sure to exit?',
    //         [
    //             { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
    //             { text: 'OK', onPress: () => this.exit() },
    //         ],
    //         { cancelable: false }
    //     );
    //     return true;
    // }

    goToLogin = () => {
        Actions.login()
    }

    goToCaraPesan = () => {
        Actions.carapesan()
    }

    goToInfoBahan = () => {
        Actions.infobahan()
    }

    goToSimulasi = () => {
        Actions.simulasi()
    }

    goToTestimoni = () => {
        Actions.testimoni()
    }

    onCallPressed() {
        Linking.openURL(`whatsapp://send?text=Hi, \nSaya: \nKendala: &phone=+62812-2320-5378`)
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }}
                source={require('../img/bg2.png')}>                
                <View style={styles.MainContainer}>
                    <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'flex-end', marginRight: 15 }}>
                        <TouchableOpacity onPress={this.goToLogin}>
                            <Image source={require('../img/man.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToLogin}>
                            <Image source={require('../img/keranjang.png')} style={{ marginLeft: 10, marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onCallPressed}>
                            <Image source={require('../img/chat.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.goToLogin}>
                        <Image source={require('../img/pesansekarang.png')} style={{ marginTop: 20, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.goToCaraPesan}>
                            <Image source={require('../img/carapesan.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToInfoBahan}>
                            <Image source={require('../img/infobahan2.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.goToSimulasi}>
                            <Image source={require('../img/simulasi.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToTestimoni}>
                            <Image source={require('../img/testimoni.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        <Image source={require('../img/iso.png')} />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
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
        color: 'red',
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
        color: 'red',
        marginTop: 5,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15
    },
    underline: {
        textDecorationLine: 'underline'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        // marginBottom: 36
        // flexDirection: 'row', 
        alignSelf: 'flex-start'
    },
});

export { MenuScreen }