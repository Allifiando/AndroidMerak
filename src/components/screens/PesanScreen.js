import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, StatusBar
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Content, Footer, FooterTab, Button, Text, Icon, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import { pesan } from '../actions/PesanScreenActions';
// import { profilUser } from '../actions/ProfilScreenActions';
import { connect } from 'react-redux';

import API from '../helpers/API';
// import console = require('console');
var dev_id = DeviceInfo.getUniqueID();

class PesanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { id: dev_id, loaded: false, };
    }

/*
    componentDidMount() {
        // this.props.profilUser();        
        let api = new API();
        api.profil()
            .then((response) => {
                // console.log(response.data.results['nama']);
                this.setState({ nama_depan: response.data.nama });
                this.setState({
                    // nama_depan: [...response.data.results]
                    result: [...this.state.result, ...response.data.results],
                    // plant: [...this.state.plant, ...response.data.results],
                });
                // if (response.data.msg === 'Welcome') {
                //     // Alert.alert('bisa');
                //     Actions.verify({ email: this.state.email, type: 'reset' })
                // } else {
                //     console.log('response', response.data)
                //     Alert.alert(response.data.msg);
                //     // ToastAndroid.show(`Berhasil: ${response.data.MSG}`)
                // }
            })
            .catch((error) => {
                console.log('response', response.data)
                // Alert.alert(response.data.msg);
                console.log(error.data.message)
                // ToastAndroid.show(`Kesalahan: ${error.data.message}`)
            })

        console.log(this.state.result);
    }*/
    componentWillMount() {           
        setTimeout(() => {
            // this.props.geofencesFetch();
            // this.props.devicesFetch();
            // this.props.groupsFetch();
            // this.props.routeSummaryFetch(moment(this.state.date).format('YYYY-MM-DD'));
            // this.props.mileageSummaryFetch(moment(this.state.date).format('YYYY-MM-DD'));
            // this.props.speedSummaryFetch(moment(this.state.date).format('YYYY-MM-DD'));
            // this.props.statusSummaryFetch(moment(this.state.date).format('YYYY-MM-DD'));
            this.setState({ loaded: true });
        }, 3000); //3 Detik

    }

    preloader() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Spinner />
            </View>
        )
    }

    onButtonPress() {
        this.props.pesan(this.state.id)
    }

    goToCaraPesan = () => {
        Actions.carapesan()
    }

    goToInfoBahanDetail = () => {
        Actions.infobahandetail()
    }
    goToDetailBahan = () => {
        Actions.detailbahan()
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
        // const { nama_depan } = this.props;
        // console.log('nama_Depan', this.state.nama_depan);
        return (
            <Container>
                {!this.state.loaded && this.preloader()}
                {this.state.loaded && <Header style={{ backgroundColor: '#258d8d' }}>
                    <Button transparent onPress={this.goToMenu} style={{ position: 'absolute', left: 0 }}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Body style={{ position: 'absolute', left: 60 }}>
                        <Title>Pesanan</Title>
                    </Body>
                </Header>}
                {this.state.loaded && <Content>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity>
                            <Image source={require('../img/btnmjb.png')} style={{ marginTop: 20, marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../img/btnmjp.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity>
                            <Image source={require('../img/btndmr.png')} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../img/btnmbi.png')} />
                        </TouchableOpacity>
                    </View>
                    {!this.props.loading &&
                        <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                            <Text style={styles.button}>Logout</Text>
                        </TouchableOpacity>
                    }
                    {this.props.loading && <Spinner size={24} />}
                    {/* <Text style={styles.button}>{this.state.nama_depan}</Text> */}
                    <TouchableOpacity onPress={this.goToMenu}>
                        <Text style={styles.button}>Menu</Text>
                    </TouchableOpacity>
                </Content>}
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#26A9B5',
        borderColor: 'black',
        borderWidth: 0.5,
        textShadowColor: 'red',
        borderRadius: 7,
        // width:'50%',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        textAlign: 'center',
    },
});

const mapStateToProps = (state) => {
    return {
        error: state.pesanScreen.error,
        loading: state.pesanScreen.loading,
        email: state.loginScreen.email,
        // nama_depan: state.profileScreen.nama_depan,
        // nama_depan: state.profiles.nama_depan,
        //   notificationOpened: state.notification.notificationOpened
    };
};

PesanScreen = connect(mapStateToProps, { pesan})(PesanScreen);

export { PesanScreen }