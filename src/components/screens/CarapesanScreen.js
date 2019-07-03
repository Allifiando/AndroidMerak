import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tab, Tabs, TabHeading, Content, Footer, Button, FooterTab, Text, Icon, Accordion } from 'native-base';
import { Actions } from 'react-native-router-flux';

// import API from '../api/API';

const dataArray = [
    { title: "MERAK JAYA BETON", content: "Pada tahun 2002 PT. MERAK JAYA BETON yang bergerak dalam bidang beton siap pakai (Ready Mix Concrete) mendirikan batching plant pertama di Pasuruan Jawa Timur . Seiring berjalannya waktu, PT MERAK JAYA BETON telah mendirikan batching plant dengan metode Wet Mix dan Dry Mix di seluruh Jawa dan Bali " },
    { title: "MERAK JAYA PRACETAK", content: "Merupakan anak perusahaan Merak Jaya Group yang bergerak dalam bidang Bergerak dalam bidang paving dan precast. Adapun produk yang diproduksi antara lain: segala jenis paving, tiang pancang, udith, box culvert dan pipa drainase. Dengan tenaga ahli yang memadai, PT. Merak Jaya Pracetak siap memenuhi kebutuhan customer terhadap u ditch, box culvert dan pipa drainase dengan dimensi sesuai dengan kebutuhan di lapangan" },
    { title: "DUTA MERAK RAYA", content: "Perusahaan manufaktur vulkanisir ban yang tergabung dalam Merak Jaya Group. Berdiri pada bulan maret 2015. Menjual ban ready dan jasa vulkanisir ban mulai ukuran 750-15/16 sampai ukuran 11R22,5. Baik jenis ban highway dan radial. " },
    { title: "MULTI BANGUN INDONESIA", content: "Merupakan anak perusahaan Merak Jaya Group yang bergerak dalam bidang pembuatan asphalt hotmix dan jasa pengaspalan jalan, baik jalan baru ataupun overlay jalan lama. Dengan komitmen menjamin kualitas hasil produksi dan kepuasan pelanggan kami PT Multi Bangun Indonesia akan terus melakukan ekspansi ke daerah-daerah dengan pertumbuhan pembangunan yang tinggi" }
];

class CarapesanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: this.props.email, initialPage: 1, activeTab: 1 }
    }

    onEmailChange(text) {
        this.setState({ email: text })
    }

    onButtonPress() {
        // console.log('jalan')
        // console.log(this.state.email)
        // let api = new API();
        // api.lupa(
        //   this.state.email)
        //     .then((response) => Alert.alert('Check Your Email For New Password'))
        //     .catch((error) => console.log(error))
    }

    callFun = () => {
        alert("Image Clicked!!!");
    }
    goToCaraPesan = () => {
        Actions.carapesan()
    }
    goToInfoBahan = () => {
        Actions.infobahan()
    }
    goToMenu = () => {
        Actions.menu({ type: 'reset' });
        // Actions.track({ type: 'reset' });
    }
    goToSimulasi = () => {
        Actions.simulasi()
    }
    goToLogin = () => {
        Actions.login()
    }
    gotoRegistrasi = () => {
        Actions.registrasi()
    }
    gotoPilihPT = () => {
        Actions.pilihpt()
    }
    gotoPilihJenis = () => {
        Actions.pilihjenis()
    }
    gotoIsiData = () => {
        Actions.isidata()
    }
    gotoValidasi = () => {
        Actions.validasi()
    }
    gotoPembayaran = () => {
        Actions.pembayaran()
    }

    render() {
        return (
            <Container>
                <Header hasTabs style={{ backgroundColor: '#258d8d' }}>
                    <Button transparent onPress={this.goToMenu} style={{position: 'absolute',left:     0}}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Body style={{position:'absolute', left:60}}>
                        <Title>Cara Pemesanan</Title>
                    </Body>
                </Header>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#258d8d' }}>
                    <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Text style={{ color: 'black' }}>Tata Cara Pemesanan</Text></TabHeading>}>
                        <Button block onPress={this.gotoRegistrasi} style={{ backgroundColor: '#258d8d', marginTop: 15, borderRadius: 15, marginLeft: 50, marginRight: 50 }}>
                            <Text>Registrasi</Text>
                        </Button>
                        <Button block onPress={this.gotoPilihPT} style={{ backgroundColor: '#258d8d', marginTop: 15, borderRadius: 15, marginLeft: 50, marginRight: 50 }}>
                            <Text>Pilih Perusahaan</Text>
                        </Button>
                        <Button block onPress={this.gotoPilihJenis} style={{ backgroundColor: '#258d8d', marginTop: 15, borderRadius: 15, marginLeft: 50, marginRight: 50 }}>
                            <Text>Pilih Jenis Produk</Text>
                        </Button>
                        <Button block onPress={this.gotoIsiData} style={{ backgroundColor: '#258d8d', marginTop: 15, borderRadius: 15, marginLeft: 50, marginRight: 50 }}>
                            <Text>Mengisi Data Order</Text>
                        </Button>
                        <Button block onPress={this.gotoValidasi} style={{ backgroundColor: '#258d8d', marginTop: 15, borderRadius: 15, marginLeft: 50, marginRight: 50 }}>
                            <Text>Validasi Order</Text>
                        </Button>
                        <Button block onPress={this.gotoPembayaran} style={{ backgroundColor: '#258d8d', marginTop: 15, borderRadius: 15, marginLeft: 50, marginRight: 50 }}>
                            <Text>Pembayaran</Text>
                        </Button>
                        {/* <Button style={{ margin: 10 }} onPress={() => this.setState({ activeTab: 0 })}><Text>Go to second tab</Text></Button> */}
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Text style={{ color: 'black' }}>Mengenai Kami</Text></TabHeading>}>
                        <Text style={{ fontSize: 14, margin: 15 }}>Merak Jaya Group Lahir sebagai cikal bakal perusahaan pada tahun 1989 UD Merak Jaya pertama kali Berdiri di Pasuruan Jawa Timur dan bergerak dalam bidang usaha pemecah batu (Stone crusher) . Seiring dengan permintaan pasar dan perkembangan teknologi konstruksi, MERAK JAYA GROUP melakukan ekspansi dengan mendirikan beberapa unit bisnis di beberapa wilayah di Indonesia.
                        </Text>
                        <Content padder>
                            <Accordion dataArray={dataArray} contentStyle={{ fontSize:14 }}/>
                        </Content>
                        {/* <Button style={{ margin: 10 }}><Text onPress={() => this.setState({ activeTab: 1 })}>Go to first tab</Text></Button> */}
                    </Tab>
                </Tabs>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#258d8d' }}>
                        <Button onPress={this.goToMenu}>
                            <Icon name="home" />
                            <Text style={{ fontSize: 7 }} >Beranda</Text>
                        </Button>
                        <Button active>
                            <Icon name="cart" />
                            {/* <Text style={{fontSize:6}}>Cara Pesan</Text> */}
                        </Button>
                        <Button onPress={this.goToInfoBahan}>
                            <Icon name="information-circle" />
                            <Text style={{ fontSize: 7 }}>Bahan</Text>
                        </Button>
                        <Button onPress={this.goToSimulasi}>
                            <Icon name="calculator" />
                            <Text style={{ fontSize: 7 }}>Simulasi</Text>
                        </Button>
                        <Button onPress={this.goToLogin}>
                            <Icon name="person" />
                            <Text style={{ fontSize: 7 }}>Saya</Text>
                        </Button>
                    </FooterTab>
                </Footer>
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

export { CarapesanScreen }