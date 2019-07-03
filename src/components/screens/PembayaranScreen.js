import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tab, Tabs, TabHeading, Content, Button, Text, Icon, Accordion } from 'native-base';
import { Actions } from 'react-native-router-flux';

// import API from '../api/API';

class PembayaranScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: this.props.email }
    }

    goToCaraPesan = () => {
        Actions.carapesan()
    }

    goToMenu = () => {
        Actions.menu()
    }

    render() {
        return (
            <Container>
                <Header hasTabs style={{ backgroundColor: '#258d8d' }}>
                    <Button transparent onPress={this.goToMenu} style={{ position: 'absolute', left: 0 }}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Body style={{ position: 'absolute', left: 60 }}>
                        <Title>Pembayaran</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ backgroundColor: 'grey', padding: 10 }}>
                        <Text>Tahap Pembayaran</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 10 }} >1.	Pada halaman ini terdapat informasi mengenai rekening perusahaan atau rekening tujuan untuk melakukan pembayaran</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >2.	Anda dapat mengupload file bukti transfer dengan memilih Upload Bukti Transfer Sekarang jika anda sudah melakukan transfer dan status pada barang belanjaan anda pada tab belum bayar akan berganti menjadi “sudah dilakukan upload bukti transfer”</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >3.	Anda hanya tinggal menunggu pihak Merak Jaya Group menghubungi anda untuk proses dan informasi lebih lanjut</Text>
                        <View style={{ alignSelf: 'center', margin: 10, flexDirection: 'row' }}>
                            <Image source={require('../img/carapesan/bayar1.png')} style={{ width: 160, height: 300, resizeMode: "stretch", borderWidth: 1, borderColor: 'grey' }} />
                            <Image source={require('../img/carapesan/bayar2.png')} style={{ width: 160, height: 300, resizeMode: "stretch", marginLeft: 10, borderWidth: 1, borderColor: 'grey' }} />
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

export { PembayaranScreen }