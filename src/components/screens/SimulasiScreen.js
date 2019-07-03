import React, { Component } from 'react';
import {
    StyleSheet, TouchableOpacity, View, ListView, Image, TextInput, StatusBar
} from 'react-native';
import {
    Platform, Text, Container, Header, Left, Body, Right, Title, Subtitle, Item, Label, Input, Content, Button, Footer, FooterTab, Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';

class SimulasiScreen extends Component {
    constructor(props) {
        super(props);     
        this.state = {
            volume: '',
        };
    }
    
    goToMenu = () => {        
        Actions.menu({ type: 'reset' });
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

    goToSimulasiHargaMJB = () => {
        Actions.simulasihargamjb()
    }

    goToSimulasiHargaMBI = () => {
        Actions.simulasihargambi()
    }

    goToItemMJP = () => {
        Actions.simulasiitemmjp()
    }

    goToItemDMR = () => {
        Actions.simulasiitemdmr()
    }

    onVolumeChange(text) {
        this.setState({ volume: text })
    }

    goToTestimoni = () => {
        Actions.testimoni()
    }

    goToLogin = () => {
        Actions.login()
    }

    render() {
        return (            
            <Container>
                <Header style={{ backgroundColor: '#258d8d' }}>
                    <Button transparent onPress={this.goToMenu} style={{ position: 'absolute', left: 0 }}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Body style={{ position: 'absolute', left: 60 }}>
                        <Title>Simulasi Harga</Title>
                    </Body>
                </Header>
                <Content >
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={this.goToSimulasiHargaMJB}>
                            <Image source={require('../img/btnmjb.png')} style={{ marginTop: 20, marginRight:10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToItemMJP}>
                            <Image source={require('../img/btnmjp.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={this.goToItemDMR}>
                            <Image source={require('../img/btndmr.png')} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToSimulasiHargaMBI}>
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
                        <Button onPress={this.goToInfoBahan}>
                            <Icon name="information-circle" />
                            <Text style={{ fontSize: 7 }}>Bahan</Text>
                        </Button>
                        <Button active>
                            <Icon name="calculator" />
                            {/* <Text style={{ fontSize: 7 }}>Simulasi</Text> */}
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
    autocompleteContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 0,
    },
    descriptionContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 16,
    },
    bottom: {
        // flex: 1,
        // justifyContent: 'flex-end',
        // marginBottom: 36
        width: '100%',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'grey',
        alignSelf: 'center'
    }
});

export { SimulasiScreen }