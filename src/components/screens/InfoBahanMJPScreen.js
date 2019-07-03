import React, { Component } from 'react';
import { Animated, Platform, StatusBar, StyleSheet, Text, View, RefreshControl, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AnimatedHeader from 'react-native-animated-header';
import Bg from '../img/culvert.jpg';
// import API from '../api/API';

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 50 : 55;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class InfoBahanMJPScreen extends Component {
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

    getListItems = count => {
        const items = [];
        let i = 0;

        while (i < count) {
            i++;
            items.push(
                <View key={i} style={{ backgroundColor: i % 2 === 0 ? '#eee5ff' : '#ceebfd', height: 64 }}>
                    <Text style={{ color: '#999' }}>{`List Item ${i}`}</Text>
                </View>
            );
        }

        return items;
    };


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
                            <Text style={{ fontSize: 14, marginTop: 10, textAlign: 'justify' }}>{"\t"}{"\t"}{"\t"}Paving block adalah suatu komposisi bahan bangunan yang terbuat dari campuran semen portland atau bahan perekat hidrolis lainnya, air dan agregat dengan atau tanpa bahan tambahan lainnya yang tidak mengurangi mutu beton tersebut (SNI 03-0691-1996). Paving block adalah bahan bangunan yang dibuat dari campuran semen, pasir dan air, sehingga karakteristiknya hampir mendekati dengan karakteristik mortar. Mortar adalah bahan bangunan yang dibuat dari pencampuran antara pasir dan agregat halus lainnya dengan bahan pengikat dan air yang didalam keadaan keras mempunyai sifat-sifat seperti batuan (Smith, 1979 dalam Malawi, 1996 dalam Artiyani 2010). Sesuai dengan namanya, definisi beton precast adalah beton yang telah dicetak dan dibuat terlebih dahulu di pabrik atau tempat khusus yang terpisah dari lokasi konstruksi.{'\n'}{'\t'}{'\t'}{'\t'}Beton ini dibuat berdasarkan cetakan dan ukuran tertentu yang telah menyesuaikan dengan kebutuhan yang ada di lapangan.Bukan hanya itu, beton ini dijaga dan dirawat dengan baik sesuai dengan standar yang berlaku hingga mencapai umur perawatan.Proses perawatan yang dilakukan bertujuan untuk menjaga kadar air dalam beton supaya kualitasnya tetap terjaga dan mutunya terjamin dengan baik.Proses ini dilakukan dengan berbagai cara, mulai dari penyiraman permukaan beton, pembungkusan dengan karung basah, steam curing, dan handling.Begitu beton sudah mencapai umur perawatan dan siap untuk digunakan, beton ini kemudian dikirim ke lokasi konstruksi untuk dipasang.</Text>
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

export { InfoBahanMJPScreen }