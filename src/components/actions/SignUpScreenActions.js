import { Actions } from 'react-native-router-flux';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button, ToastAndroid
} from 'react-native';
import API from '../helpers/API';

import {
    SIGN_UP_SCREEN_NAMA_DEPAN_CHANGED,
    SIGN_UP_SCREEN_NAMA_BELAKANG_CHANGED,
    SIGN_UP_SCREEN_GENDER_CHANGED,
    SIGN_UP_SCREEN_TELEPON_CHANGED,
    SIGN_UP_SCREEN_ALAMAT_CHANGED,
    SIGN_UP_SCREEN_EMAIL_CHANGED,
    SIGN_UP_SCREEN_PASSWORD_CHANGED,
    // SIGN_UP_SCREEN_CONFIRM_PASSWORD_CHANGED,
    SIGN_UP_SCREEN_PROCESS,
    SIGN_UP_SCREEN_SUCCESS,
    SIGN_UP_SCREEN_FAIL,    
} from './types';

export const namaDepanChanged = (text) => {
    return {
        type: SIGN_UP_SCREEN_NAMA_DEPAN_CHANGED,
        payload: text
    }
};

export const namaBelakangChanged = (text) => {
    return {
        type: SIGN_UP_SCREEN_NAMA_BELAKANG_CHANGED,
        payload: text
    }
};

export const genderChanged = (text) => {
    return {
        type: SIGN_UP_SCREEN_GENDER_CHANGED,
        payload: text
    }
};

export const teleponChanged = (text) => {
    return {
        type: SIGN_UP_SCREEN_TELEPON_CHANGED,
        payload: text
    }
};

export const alamatChanged = (text) => {
    return {
        type: SIGN_UP_SCREEN_ALAMAT_CHANGED,
        payload: text
    }
};

export const emailChanged = (text) => {
    return {
        type: SIGN_UP_SCREEN_EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: SIGN_UP_SCREEN_PASSWORD_CHANGED,
        payload: text
    }
};

// export const confirmPasswordChanged = (text) => {
//     return {
//         type: SIGN_UP_SCREEN_CONFIRM_PASSWORD_CHANGED,
//         payload: text
//     }
// };

export const signupUser = (nama_depan,nama_belakang,gender,telepon,alamat,email, password) => {
    // redux-thunk returns a function with dispatch
    console.log('jaln',{gender})
    return (dispatch) => {
        dispatch({
            type: SIGN_UP_SCREEN_PROCESS
        });
        let api = new API();
        api.signup(nama_depan,nama_belakang,telepon,alamat,email, password,gender)
        // cons
            .then((response) => {
                console.log('seccess');
                signupUserSuccess(dispatch, response.data)
            })
                .catch((error) => {
                    console.log('errr');
                    signupUserFail(dispatch, error.data)
                    // Alert.alert("Invalid email or password")
                });        
                    
    }
};

const signupUserSuccess = (dispatch) => {
    // let api = new API();
    // let result = api.saveToken(token);
    // console.log(token);
    // api.saveToken(token);
  
    dispatch({
      type: SIGN_UP_SCREEN_SUCCESS
    });
    // console.log('loginoke');
    Actions.verify({ type: 'reset' });
  
  };

const signupUserFail = (dispatch) => {
    // console.log('lognero',errorResponse);
    dispatch({
        type: SIGN_UP_SCREEN_FAIL,
        // payload: errorResponse.data.message        
    });
    Alert.alert("Email sudah ada");
};

