import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tab, Tabs, TabHeading, Content, Button, Text, Icon, Accordion } from 'native-base';
import { Actions } from 'react-native-router-flux';

import API from '../helpers/API';

class RegistrasiScreen extends Component {

    goToCaraPesan = () => {
        Actions.carapesan()
    }

    render() {
        return (
            <Container>
                <Header hasTabs style={{ backgroundColor: '#258d8d' }}>
                    <Button transparent onPress={this.goToCaraPesan} style={{ position: 'absolute', left: 0 }}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Body style={{ position: 'absolute', left: 60 }}>
                        <Title>Registrasi</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ backgroundColor: 'grey', padding: 10 }}>
                        <Text>Tahap Registrasi</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 10 }} >1.	Customer/User mengisi data diri yaitu Nama Depan, Nama Belakang, Nomor Telpon , Alamat, Email, Password dan Konfirmasi Password. </Text>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >2.	Lalu Klik Daftar</Text>
                        <View style={{ alignSelf: 'center', margin: 10 }}>
                            <Image source={require('../img/carapesan/regis2.png')} style={{ width: 200, height: 350, resizeMode: "stretch" }} />
                        </View>
                        <Text style={{ fontSize: 14, marginLeft: 10 }} >3.	Anda akan mendapatkan email untuk mengaktifkan account anda </Text>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >4.	Jika email belum terkirim maka anda dapat meminta untuk kirim email kembali dengan menekan tombol kirim ulang </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    info: {
        // width: 0,
        flex: 1,
        flexGrow: 1,
        // marginLeft: gutter,
    },
});

export { RegistrasiScreen }