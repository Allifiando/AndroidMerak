/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, BackHandler, Alert } from 'react-native';
import { Router, Scene, Stack, Actions, Drawer } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { StyleProvider, Root } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/components/reducers';

import {
  LoginScreen,
  MenuScreen,
  SignUpScreen,
  LupaPasswordScreen,
  VerificationScreen,
  SimulasiScreen,
  SimulasiHargaScreen,
  SimulasiHargaDMRScreen,
  SimulasiHargaMBIScreen,
  SimulasiHargaMJPScreen,
  SimulasiHargaMJBScreen,
  SimulasiItemMJPScreen,
  SimulasiItemDMRScreen,
  TestimoniScreen,
  TestimoniDetailScreen,
  InfobahanScreen,
  InfoBahanDMRScreen,
  InfoBahanMBIScreen,
  InfoBahanMJBScreen,
  InfoBahanMJPScreen,
  CarapesanScreen,
  RegistrasiScreen,
  PilihPTScreen,
  PilihJenisScreen,
  IsiDataScreen,
  ValidasiScreen,
  PembayaranScreen,
  DetailbahanScreen,
  PesanScreen,
}
  from './src/components/screens/';

class App extends Component {

  constructor() {
    super();
    this.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    // NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectionChange);
  }

  componentWillMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    // NetInfo.isConnected.removeEventListener('connectionChange', this._handleConnectionChange);
  }

  exit() {
    BackHandler.exitApp();
    // Alert.alert('oke');
    // Actions.pop({ type: 'reset' });
  }

  handleBackButton() {
    console.log('tes');
    if (Actions.currentScene == 'menuScreen') {
      Alert.alert(
        'Peringatan',
        'Ingin keluar Aplikasi ?',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => this.exit() },
        ],
        { cancelable: false }
      );
    }else{
      Actions.pop();
    }

    return true;
  }

  render() {
    return (
      <Root style={{ height: '100%', width: '100%' }}>
        <Provider store={this.store}>
          <Router backAndroidHandler={this.handleBackButton.bind(this)}>
            <Stack key="root" hideNavBar>
              <Scene key="menu" hideNavBar initial  >
                <Scene key="menuScreen" component={MenuScreen} title="Menu" />
              </Scene>
              <Scene key="login" hideNavBar  >
                <Scene key="loginScreen" component={LoginScreen} title="Login" />
              </Scene>
              <Scene key="signup" hideNavBar  >
                <Scene key="signupScreen" component={SignUpScreen} title="Signup" />
              </Scene>
              <Scene key="lupa" hideNavBar  >
                <Scene key="lupaPasswordScreen" component={LupaPasswordScreen} title="LupaPassword" />
              </Scene>
              <Scene key="verify" hideNavBar  >
                <Scene key="verifyScreen" component={VerificationScreen} title="VerificationPassword" />
              </Scene>              
              <Scene key="testimoni" hideNavBar   >
                <Scene key="testimoniScreen" component={TestimoniScreen} title="Testimoni" />
              </Scene>
              <Scene key="testimonidetail" hideNavBar >
                <Scene key="testimonidetailScreen" component={TestimoniDetailScreen} title="Testimoni Detail" />
              </Scene>
              <Scene key="carapesan" hideNavBar  >
                <Scene key="carapesanScreen" component={CarapesanScreen} title="Cara_Pesan" />
              </Scene>
              <Scene key="infobahan" hideNavBar   >
                <Scene key="infobahanScreen" component={InfobahanScreen} title="Info_Bahan" />
              </Scene>
              <Scene key="infobahanMJB" hideNavBar   >
                <Scene key="infobahanMJBScreen" component={InfoBahanMJBScreen} title="Info_Bahan_MJB" />
              </Scene>
              <Scene key="infobahanMJP" hideNavBar    >
                <Scene key="infobahanMJPScreen" component={InfoBahanMJPScreen} title="Info_Bahan_MJP" />
              </Scene>
              <Scene key="infobahanMBI" hideNavBar   >
                <Scene key="infobahanMBIScreen" component={InfoBahanMBIScreen} title="Info_Bahan_MBI" />
              </Scene>
              <Scene key="infobahanDMR" hideNavBar  >
                <Scene key="infobahanDMRScreen" component={InfoBahanDMRScreen} title="Info_Bahan_DMR" />
              </Scene>
              <Scene key="registrasi" hideNavBar   >
                <Scene key="RegistrasiScreen" component={RegistrasiScreen} title="Registrasi" />
              </Scene>
              <Scene key="pilihpt" hideNavBar >
                <Scene key="PilihPTScreen" component={PilihPTScreen} title="Pilih_PT" />
              </Scene>
              <Scene key="pilihjenis" hideNavBar  >
                <Scene key="PilihJenisScreen" component={PilihJenisScreen} title="Pilih_Jenis" />
              </Scene>
              <Scene key="isidata" hideNavBar  >
                <Scene key="IsiDataScreen" component={IsiDataScreen} title="Isi_Data" />
              </Scene>
              <Scene key="validasi" hideNavBar  >
                <Scene key="validasiScreen" component={ValidasiScreen} title="Validasi" />
              </Scene>
              <Scene key="pembayaran" hideNavBar  >
                <Scene key="PembayaranScreen" component={PembayaranScreen} title="Pembayaran" />
              </Scene>
              <Scene key="detailbahan" hideNavBar >
                <Scene key="DetailbahanScreen" component={DetailbahanScreen} title="Detil bahan" />
              </Scene>
              <Scene key="simulasi" hideNavBar   >
                <Scene key="simulasiScreen" component={SimulasiScreen} title="Simulasi" />
              </Scene>
              <Scene key="simulasiharga" hideNavBar >
                <Scene key="SimulasiHargaScreen" component={SimulasiHargaScreen} title="Simulasi Harga" />
              </Scene>
              <Scene key="simulasihargamjb" hideNavBar  >
                <Scene key="SimulasiHargaMJBScreen" component={SimulasiHargaMJBScreen} title="Simulasi Harga MJB" />
              </Scene>
              <Scene key="simulasihargadmr" hideNavBar  >
                <Scene key="SimulasiHargaDMRScreen" component={SimulasiHargaDMRScreen} title="Simulasi Harga DMR" />
              </Scene>
              <Scene key="simulasihargamjp" hideNavBar  >
                <Scene key="SimulasiHargaMJPScreen" component={SimulasiHargaMJPScreen} title="Simulasi Harga MJP" />
              </Scene>
              <Scene key="simulasihargambi" hideNavBar  >
                <Scene key="SimulasiHargaMBIScreen" component={SimulasiHargaMBIScreen} title="Simulasi Harga MBI" />
              </Scene>
              <Scene key="simulasiitemmjp" hideNavBar  >
                <Scene key="SimulasiItemMJPScreen" component={SimulasiItemMJPScreen} title="Simulasi Item MJP" />
              </Scene>
              <Scene key="simulasiitemdmr" hideNavBar   >
                <Scene key="SimulasiItemDMRScreen" component={SimulasiItemDMRScreen} title="Simulasi Item DMR" />
              </Scene>
              <Scene key="pesan" hideNavBar  >
                <Scene key="PesanScreen" component={PesanScreen} title="Pesan" />
              </Scene>
            </Stack>
          </Router>
        </Provider>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%',
    width: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
