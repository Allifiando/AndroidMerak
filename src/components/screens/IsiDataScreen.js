import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tab, Tabs, TabHeading, Content, Button, Text, Icon, Accordion } from 'native-base';
import { Actions } from 'react-native-router-flux';

// import API from '../api/API';

class IsiDataScreen extends Component {
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
                        <Title>Mengisi Data Order</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ backgroundColor: 'grey', padding: 10 }}>
                        <Text>Mengisi Data Order</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 10 }} >1. Setelah Anda membuat dan mengisi nama proyek baru beserta keterangannya , maka akan dilanjutkan ke tahap detail proyek</Text>
                        <View style={{ alignSelf: 'center', margin: 10 }}>
                            <Image source={require('../img/carapesan/isidata1.png')} style={{ width: 180, height: 350, resizeMode: "stretch", borderWidth: 1, borderColor: 'grey' }} />
                        </View>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >2.	Anda harus mengisi data detail proyek sebagai berikut: Nama Penerima,Lokasi Proyek,Lokasi detail Proyek dan Informasi Tambahan . Informasi Tambahan bisa anda isi dengan kondisi jalan, kondisi lokasi dan lain lain</Text>
                        <View style={{ alignSelf: 'center', margin: 10 }}>
                            <Image source={require('../img/carapesan/isidata2.png')} style={{ width: 180, height: 350, resizeMode: "stretch", borderWidth: 1, borderColor: 'grey' }} />
                        </View>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >3.	Setelah itu anda harus mengisi detail pesanan sebagai berikut Mutu , Metode Cor , Volume dan Tanggal Pengiriman sesuai dengan kebutuhan anda</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >4.	Setelah melakukan pengisian data , anda dapat menambahkan belanjaan anda ke keranjang , sehingga anda dapat memilih produk lain untuk dibelanjakan</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }} >5.	Jika anda ingin langsung melanjutkan ke pembayaran maka silahkan pilih Pembayaran untuk melanjutkan proses</Text>
                        <View style={{ alignSelf: 'center', margin: 10 }}>
                            <Image source={require('../img/carapesan/isidata3.png')} style={{ width: 180, height: 350, resizeMode: "stretch", borderWidth: 1, borderColor: 'grey' }} />
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

export { IsiDataScreen }