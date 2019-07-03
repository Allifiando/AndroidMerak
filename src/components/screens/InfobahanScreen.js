import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, StatusBar
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

// import API from '../api/API';

class InfobahanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: this.props.email }
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
        alert("Image foefwh!!!");
    }
    goToCaraPesan = () => {
        Actions.carapesan()
    }

    goToInfoBahanDetail = () => {
        Actions.infobahandetail()
    }
    goToDetailBahanMJB = () => {
        Actions.infobahanMJB()
    }

    goToDetailBahanMJP = () => {
        Actions.infobahanMJP()
    }

    goToDetailBahanMBI = () => {
        Actions.infobahanMBI()
    }

    goToDetailBahanDMR = () => {
        Actions.infobahanDMR()
    }

    goToLogin = () => {
        Actions.login()
    }

    goToMenu = () => {
        // Actions.menu()
        Actions.menu({ type: 'reset' });
    }

    goToSimulasi = () => {
        Actions.simulasi()
    }    

    render() {
        return (            
            <Container>
                <Header style={{ backgroundColor: '#258d8d' }}>
                    <Button transparent onPress={this.goToMenu} style={{ position: 'absolute', left: 0 }}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Body style={{ position: 'absolute', left: 60 }}>
                        <Title>Informasi Produk</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={this.goToDetailBahanMJB}>
                            <Image source={require('../img/btnmjb.png')} style={{ marginTop: 20, marginRight:10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToDetailBahanMJP}>
                            <Image source={require('../img/btnmjp.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={this.goToDetailBahanDMR}>
                            <Image source={require('../img/btndmr.png')} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToDetailBahanMBI}>
                            <Image source={require('../img/btnmbi.png')} />
                        </TouchableOpacity>
                    </View>
                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#258d8d' }}>
                        <Button onPress={this.goToMenu}>
                            <Icon name="home" />
                            <Text style={{ fontSize: 7 }} >Beranda</Text>
                        </Button>
                        <Button onPress={this.goToCaraPesan}>
                            <Icon name="cart" />
                            <Text style={{ fontSize: 6 }}>Cara Pesan</Text>
                        </Button>
                        <Button active>
                            <Icon name="information-circle" />
                            {/* <Text style={{ fontSize: 7 }}>Bahan</Text> */}
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
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        // marginBottom: 36
        // flexDirection: 'row', 
        alignSelf: 'flex-start'
    }
});

export { InfobahanScreen }