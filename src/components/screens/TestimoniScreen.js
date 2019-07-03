import React, { Component } from 'react';
import {
    StyleSheet, Alert, Image, View, TouchableOpacity
} from 'react-native';
import { Container, Header, Card, CardItem, Body, Title, Content, Button, Footer, FooterTab, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Rating, AirbnbRating } from 'react-native-ratings';




class TestimoniScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
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
        // Actions.menu()
        Actions.menu({ type: 'reset' });
    }
    goToSimulasi = () => {
        Actions.simulasi()
    }
    goToAkun = () => {
        Alert.alert('akun')
    }
    goToTestimoniDetail = () => {
        Actions.testimonidetail()
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
                        <Title>Testimoni</Title>
                    </Body>
                </Header>
                <Content padder>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={this.goToTestimoniDetail}>
                            <Image source={require('../img/btnmjb.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToTestimoniDetail}>
                            <Image source={require('../img/btnmjp.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={this.goToTestimoniDetail}>
                            <Image source={require('../img/btndmr.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToTestimoniDetail}>
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
        // flex: 1,
        // justifyContent: 'flex-end',
        // marginBottom: 36
        width: '100%',
        flexDirection: 'row',
        // padding: 15,
        // backgroundColor: 'grey',
        alignSelf: 'center'
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});

export { TestimoniScreen }