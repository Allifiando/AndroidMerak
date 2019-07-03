import React, { Component } from 'react';
import {
    StyleSheet, Alert, Image
} from 'react-native';
import { Container, Header, Card, CardItem, Body, Title, Content, Button, Footer, FooterTab, Text, Icon, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Rating, AirbnbRating } from 'react-native-ratings';




class TestimoniDetailScreen extends Component {
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
    goToTestimoni = () => {
        Actions.testimoni()
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#258d8d' }}>
                    <Button transparent onPress={this.goToTestimoni} style={{ position: 'absolute', left: 0 }}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Body style={{ position: 'absolute', left: 60 }}>
                        <Title>Testimoni</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Rating
                                // showRating
                                // onFinishRating={this.ratingCompleted}
                                imageSize={20}
                                startingValue={5}
                                readonly={true}
                            // style={{ paddingVertical: 10 }}
                            />
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Pengiriman Cepat, kualitas oke
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <View style={styles.bottom}>
                                <View style={{ width: '40%', flexDirection: 'row' }}>
                                    <View style={{ width: '40%' }}>
                                        <Image source={require('../img/user.png')} style={styles.ImageStyle} />
                                    </View>
                                    <View style={{ width: '60%' }}>
                                        <Text>Nama </Text>
                                        <Text>Pesanan </Text>
                                    </View>
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ alignSelf: 'flex-start' }} >Mr. xxxx</Text>
                                    <Text style={{ alignSelf: 'flex-start' }} >xxxxx</Text>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header bordered>
                            <Rating
                                // showRating
                                // onFinishRating={this.ratingCompleted}
                                imageSize={20}
                                startingValue={4}
                                readonly={true}
                            // style={{ paddingVertical: 10 }}
                            />
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Respon penjual cepat
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <View style={styles.bottom}>
                                <View style={{ width: '40%', flexDirection: 'row' }}>
                                    <View style={{ width: '40%' }}>
                                        <Image source={require('../img/user.png')} style={styles.ImageStyle} />
                                    </View>
                                    <View style={{ width: '60%' }}>
                                        <Text>Nama </Text>
                                        <Text>Pesanan </Text>
                                    </View>
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ alignSelf: 'flex-start' }} >Mr. xxxx</Text>
                                    <Text style={{ alignSelf: 'flex-start' }} >xxxxx</Text>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
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
                        <Button onPress={this.goToAkun}>
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

export { TestimoniDetailScreen }