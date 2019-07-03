import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tab, Tabs, TabHeading, Content, Button, Text, Icon, Accordion } from 'native-base';
import { Actions } from 'react-native-router-flux';

import API from '../helpers/API';

class ValidasiScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: this.props.email }
    }

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
                        <Title>Validasi Order</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ backgroundColor: 'grey', padding: 10 }}>
                        <Text>Validasi Order</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 10 }} >1.	Ketika anda memilih pembayaran maka halaman yang muncul akan berisikan informasi mengenai barang yang anda pesan atau belanjaan anda dan total harga yang harus anda bayar</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >2.	Anda juga dapat memilih bank untuk melakukan transaksi pembayaran sesuai dengan keinginan anda</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >3.	Setelah itu lanjutkan ke pembayaran</Text>
                        <View style={{ alignSelf: 'center', margin: 10 }}>
                            <Image source={require('../img/carapesan/validasi.png')} style={{ width: 180, height: 350, resizeMode: "stretch", borderWidth: 1, borderColor: 'grey' }} />
                        </View>
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
    }
});

export { ValidasiScreen }