import { Actions } from 'react-native-router-flux';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button, ToastAndroid
} from 'react-native';
import API from '../helpers/API';

import {
    PROFIL_SCREEN_PROCESS,
    PROFIL_SCREEN_SUCCESS,
    PROFIL_SCREEN_FAIL,
} from './types';

let api = new API();

export const profilUser = () => {
    // redux-thunk returns a function with dispatch
    // console.log('prof',{token})
    /*
    console.log('me');
    return (dispatch) => {
        dispatch({
            type: PROFIL_SCREEN_PROCESS
        });
        api.profil()
            // cons            
            .then((response) => {
                profilUserSuccess(dispatch, response.data.results)
            })
            .catch((error) => {
                console.log('errr1');
                profilUserFail(dispatch, error.data)
                // Alert.alert("Invalid email or password")
            });

    }*/
    return (dispatch) => {
        // console.log('me');
        api.profil()
            .then((response) => profilUserSuccess(dispatch, response.data.nama_depan
                , response.data.nama_blk
                , response.data.telepon
                , response.data.alamat
                , response.data.email
                , response.data.password
                , response.data.gender))

            // console.log(response)
            .catch((error) => profilUserFail(dispatch, error.response.data));
    }
};

const profilUserSuccess = (dispatch,nama_depan, nama_blk, telepon, alamat, email, password, gender) => {
    // let api = new API();
    // // // let result = api.saveToken(token);
    // console.log('nama_depan=>',nama_depan, 'nama_blk=>',nama_blk, 'telepon=>',telepon, 'alamat=>',alamat,'email=>',email,'password=>',password, 'gender=>',gender);
    // api.saveToken(token);
    // console.log('NAMA_DEPAN=>',nama_depan);
    dispatch({
        type: PROFIL_SCREEN_SUCCESS,
        payload: nama_depan,
        // nama_depan: nama_depan,
        // nama_belakang: nama_blk,
        // email: email,
        // alamat: alamat,
        // telepon: telepon,
        // password: password,
        // gender: gender,        
    });
    
    // Actions.pesan({ type: 'reset' });

};

const profilUserFail = (dispatch) => {
    console.log('lognero');
    dispatch({
        type: PROFIL_SCREEN_FAIL,
        // payload: errorResponse.data.message        
    });
    Alert.alert("gagal yaa");
};

