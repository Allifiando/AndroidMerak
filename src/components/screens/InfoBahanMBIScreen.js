import React, { Component } from 'react';
import { Animated, Platform, StatusBar, StyleSheet, Text, View, RefreshControl, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AnimatedHeader from 'react-native-animated-header';
import Bg from '../img/aspal.jpg';
// import API from '../api/API';

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 50 : 55;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class InfoBahanMBIScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(
                // iOS has negative initial scroll value because content inset...
                Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
            ),
            refreshing: false,
        }
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

    goToInfoBahan = () => {
        Actions.infobahan()
    }
    goToDetailBahan = () => {
        Actions.detailbahan()
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



    render() {
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });

        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });

        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: 'clamp',
        });
        const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
        });
        return (
            <View style={styles.fill}>
                <AnimatedHeader
                    style={{ flex: 1 }}
                    // backText='Back'
                    title='Informasi Produk'
                    renderLeft={() => (
                        <Icon name='arrow-back' style={{ marginLeft: 20 }} onPress={this.goToInfoBahan}
                        />)}
                    backStyle={{ marginLeft: 10 }}
                    backTextStyle={{ fontSize: 14, color: '#000' }}
                    titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#000' }}
                    headerMaxHeight={250}
                    imageSource={Bg}
                    toolbarColor='#FFF'
                    disabled={false}
                >
                    <ScrollView>
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontSize: 14, marginTop: 10, textAlign: 'justify' }}>{'\t'}{'\t'}{'\t'}Aspal ialah bahan hidro karbon yang bersifat melekat (adhesive), berwarna hitam kecoklatan, tahan terhadap air, dan visoelastis. Aspal sering juga disebut bitumen merupakan bahan pengikat pada campuran beraspal yang dimanfaatkan sebagai lapis permukaan lapis perkerasan lentur. Aspal berasal dari alam atau dari pengolahan minyak bumi. Aspal atau bitumen adalah suatu cairan kental yang merupakan senyawa hidrokarbon dengan sedikit mengandung sulfur, oksigen, dan klor. Aspal sebagai bahan pengikat dalam perkerasan lentur mempunyai sifat viskoelastis. Aspal tampak padat pada suhu ruang padahal adalah cairan yang sangaaat kental. Aspal merupakan bahan yang sangat kompleks, dan secara kimia belum dikarakterisasi dengan baik. Kandungan utama aspal adalah senyawa karbon jenuh, dan tak jenuh, alifatik, dan aromatic yang mempunyai atom karbon sampai 150 per molekul.{'\n'}{'\t'}{'\t'}{'\t'} Atom-atom selain hidrogen, dan karbon yang juga menyusun aspal adalah nitrogen, oksigen, belerang, dan beberapa atom lain. Secara kuantitatif, biasanya 80% massa aspal adalah karbon, 10% hydrogen, 6% belerang, dan sisanya oksigen, dan nitrogen, serta sejumlah renik besi, nikel, dan vanadium. Senyawa-senyawa ini sering dikelaskan atas aspalten (yang massa molekulnya kecil), dan malten (yang massa molekulnya besar). Biasanya aspal mengandung 5 sampai 25% aspalten. Sebagian besar senyawa di aspal adalah senyawa polar. </Text>
                        </View>
                        <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                        <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                        <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                    </ScrollView>
                </AnimatedHeader>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'grey',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        height: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { InfoBahanMBIScreen }