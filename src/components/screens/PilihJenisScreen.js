import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tab, Tabs, TabHeading, Content, Button, Text, Icon, Accordion } from 'native-base';
import { Actions } from 'react-native-router-flux';

// import API from '../api/API';

class PilihJenisScreen extends Component {
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
                        <Title>Pilih Jenis Produk</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ backgroundColor: 'grey', padding: 10 }}>
                        <Text>Pilih Jenis Produk </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 10 }} >1.	Customer memilih jenis produk yang terdapat pada masing masing perusahaan </Text>
                        <View style={{ alignSelf: 'center', margin: 10 }}>
                            <Image source={require('../img/carapesan/pilihjenis.png')} style={{ width: 200, height: 350, resizeMode: "stretch", borderWidth: 1, borderColor: 'grey' }} />
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

export { PilihJenisScreen }