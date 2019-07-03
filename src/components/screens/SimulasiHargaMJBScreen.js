import React, { Component } from 'react';
import {
    StyleSheet, TouchableOpacity, View, ListView, TextInput, Keyboard, ScrollView
} from 'react-native';
import {
    Platform, Container, Header, Left, Body, Right, Title, Subtitle, Item, Label, Input, Content, Button, Footer, FooterTab, Icon, Text
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import SearchableDropdown from 'react-native-searchable-dropdown';
import NumberFormat from 'react-number-format';

import API from '../helpers/API';

var kota = [
    { id: 1, name: 'Surabaya'},
    { id: 2, name: 'Mojokerto'},
    { id: 3, name: 'Wonorejo'},    
];

class SimulasiHargaMJBScreen extends Component {
    constructor(props) {
        super(props);
        // this.state = { email: this.props.email }
        this.state = {
            volume: '',
            tagItem: {
                tagId: 1,
                title: 'nothing'
            },
            lokasi: [],
            plant: [],
            mutu: [],
            jasacp: [],
            idlokasi: 81,
            idplant: 0,
            hargamutu: 0,
            hargajasa: 0,
        };
    }

    

    callFun = () => {
        alert("Image Clicked!!!");
    }
    goToCaraPesan = () => {
        Actions.carapesan()
    }

    goToMenu = () => {        
        Actions.menu({ type: 'reset' });
    }

    goToInfoBahan = () => {
        Actions.infobahan()
    }

    goToSimulasi = () => {
        Actions.simulasi()
    }

    goToLogin = () => {
        Actions.login()
    }

    onVolumeChange(numeric) {        
        this.setState({ volume: numeric })        
    }

    goToTestimoni = () => {
        Actions.testimoni()
    }

    onShow = () => {
        this.setState({ visible: true });
    }

    onSelect = (picked) => {
        this.setState({
            picked: picked,
            visible: false
        })
    }

    onCancel = () => {
        this.setState({
            visible: false
        });
    }

    componentDidMount() {
        let api = new API();
        api.getPlant(this.state.idlokasi)
        .then((response)=>{
            this.setState({ plant: '' })
            this.setState({
                plant: [...this.state.plant, ...response.data.results],
            });
            console.log(this.state.plant);
        })
        .catch((error) => {
            console.log('eror', error)
        })

        api.getJasaCP()
            .then((response) => {
                // console.log('iti',response)
                this.setState({ hargajasa: '' })
                this.setState({
                    jasacp: [...this.state.jasacp, ...response.data.results],
                });
                console.log(response)
            })
            .catch((error) => {
                console.log('eror', error)
            })

        // api.getMutu()
        // .then((response) => {
        //     // console.log('ini',response)
        //     this.setState({ hargamutu: '' })
        //     this.setState({
        //         mutu: [...this.state.mutu, ...response.data.results],
        //     });
        //     console.log(response)
        // })
        // .catch((error) => {
        //     console.log('eror', error)
        // })
    }

    // getPlant(idlokasi) {
    //     let api = new API();
    //     api.getPlant(idlokasi)
    //         .then((response) => {
    //             this.setState({ plant: '' })
    //             this.setState({
    //                 plant: [...this.state.plant, ...response.data.results],
    //             });
    //             console.log(response)
    //         })
    //         .catch((error) => {
    //             console.log('eror', error)
    //         })
    // }

    getMutu(idplant, idlokasi) {
        let api = new API();
        api.getMutu(idplant, this.state.idlokasi)
            .then((response) => {
                console.log('ini',response)
                this.setState({ hargamutu: '', mutu: '' })
                this.setState({
                    mutu: [...this.state.mutu, ...response.data.results],
                });
                console.log(response)
            })
            .catch((error) => {
                console.log('eror', error)
            })
    }

    render() {
        return (            
            <Container>
                <Header style={{ backgroundColor: '#258d8d' }}>
                    <Button transparent onPress={this.goToSimulasi} style={{ position: 'absolute', left: 0 }}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Body style={{ position: 'absolute', left: 60 }}>
                        <Title>Simulasi Harga</Title>
                    </Body>
                </Header>                
                <View style={styles.container}>
                <SearchableDropdown
                        onTextChange={text => console.log(text)}
                        //On text change listner on the searchable input
                        onItemSelect={item => {
                            this.setState({ idplant: item.id });
                            this.getMutu(item.id);
                        }}
                        //onItemSelect called after the selection from the dropdown
                        containerStyle={{ padding: 5 }}
                        //suggestion container style
                        textInputStyle={{
                            //inserted text style
                            padding: 12,
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            backgroundColor: '#FAF7F6',
                        }}
                        itemStyle={{
                            //single dropdown item style
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#FAF9F8',
                            borderColor: '#bbb',
                            borderWidth: 1,
                        }}
                        itemTextStyle={{
                            //text style of a single dropdown item
                            color: '#222',
                        }}
                        // itemsContainerStyle={{
                        //     //items container style you can pass maxHeight
                        //     //to restrict the items dropdown hieght
                        //     maxHeight: '50%',
                        // }}
                        items={this.state.plant}
                        //mapping of item array
                        defaultIndex={2}
                        //default selected item index
                        placeholder="Pengiriman Dari"
                        //place holder for the search input
                        resetValue={true}
                        //reset textInput Value with true and false state
                        underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                    />
                    <SearchableDropdown
                        onTextChange={text => console.log(text)}
                        onItemSelect={item => console.log(item)}
                        containerStyle={{ padding: 5 }}
                        textInputStyle={{
                            padding: 12,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: '#ccc',
                            backgroundColor: '#FAF7F6',
                        }}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#FAF9F8',
                            borderColor: '#bbb',
                            borderWidth: 1,
                        }}
                        itemTextStyle={{
                            color: '#222',
                        }}
                        items={kota}
                        placeholder="Pengiriman Ke"
                        resetValue={true}
                        defaultIndex={4}
                        underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                    />
                    <SearchableDropdown
                        onTextChange={text => console.log(text)}
                        onItemSelect={item => {
                            this.setState({ hargamutu: item.harga });
                        }}
                        containerStyle={{ padding: 5 }}
                        textInputStyle={{
                            padding: 12,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: '#ccc',
                            backgroundColor: '#FAF7F6',
                        }}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#FAF9F8',
                            borderColor: '#bbb',
                            borderWidth: 1,
                        }}
                        itemTextStyle={{
                            color: '#222',
                        }}
                        items={this.state.mutu}
                        placeholder="Mutu"
                        resetValue={true}
                        // defaultIndex={2}
                        underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                    />
                    <SearchableDropdown
                        onTextChange={text => console.log(text)}
                        onItemSelect={item => {
                            this.setState({ hargajasa: item.harga });
                        }}
                        containerStyle={{ padding: 5 }}
                        textInputStyle={{
                            padding: 12,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: '#ccc',
                            backgroundColor: '#FAF7F6',
                        }}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#FAF9F8',
                            borderColor: '#bbb',
                            borderWidth: 1,
                        }}
                        itemTextStyle={{
                            color: '#222',
                        }}
                        items={this.state.jasacp}
                        placeholder="Metode Cor"
                        resetValue={true}
                        underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                    />
                    <Item regular style={styles.inputStyle}>
                        <Input placeholder='Volume'
                            style={{ fontSize: 14 }}
                            keyboardType="numeric"
                            onChangeText={this.onVolumeChange.bind(this)}
                            value={this.state.volume} />
                    </Item>
                </View>
                <View style={styles.bottom}>
                    <View style={{ width: '50%' }}>
                        <Text>Harga Total</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                        {/* <Text style={{alignSelf:'flex-end'}} >Rp. {this.state.mutu * this.state.volume}</Text>   */}
                        <NumberFormat
                            value={(Number.parseInt(this.state.hargamutu, 10) * Number.parseInt(this.state.volume, 10)) + Number.parseInt(this.state.hargajasa, 10)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Rp. '}
                            renderText={value => <Text style={{ alignSelf: 'flex-end' }} >{value}</Text>}
                        />
                    </View>
                </View>
                {/* </ScrollView> */}
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
                            <Icon active name="information-circle" />
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
    bottom: {
        // flex: 1,
        // justifyContent: 'flex-end',
        // marginBottom: 36
        width: '100%',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'grey',
        alignSelf: 'center'
    },
    container: {
        // backgroundColor: '#F5FCFF',
        flex: 1,
        // height:'100%'
        // padding: 16,
        marginTop: 10,
    },
    inputStyle: {
        borderWidth: 1,
        backgroundColor: '#FAF7F6',
        borderColor: '#ccc',
        margin: 5,
        padding: 2,
        marginLeft: 5,
        // marginRight:5,
        // paddingTop: 5,
        // paddingBottom: 5,
        borderRadius: 5
    },

});

export { SimulasiHargaMJBScreen }