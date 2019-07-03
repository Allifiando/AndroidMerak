import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, StatusBar
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

// import API from '../api/API';

class SimulasiItemDMRScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: this.props.email }
    }

    onEmailChange(text) {
        this.setState({ email: text })
    }

    goToCaraPesan = () => {
        Actions.carapesan()
    }

    goToInfoBahan = () => {
        Actions.infobahan()
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

    goToSimulasiDMR = () => {
        Actions.simulasihargadmr()
    }

    render() {
        return (            
            <Container>
                <Header style={{ backgroundColor: '#258d8d' }}>
                    <Button transparent onPress={this.goToSimulasi} style={{ position: 'absolute', left: 0 }}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Body style={{ position: 'absolute', left: 60 }}>
                        <Title>Item DMR</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={this.goToSimulasiDMR}>
                            <Image source={require('../img/P_Vulkanisir.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToSimulasiDMR}>
                            <Image source={require('../img/P_Jasa.png')} style={{ marginTop: 20 }} />
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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        // marginBottom: 36
        // flexDirection: 'row', 
        alignSelf: 'flex-start'
    }
});

export { SimulasiItemDMRScreen }