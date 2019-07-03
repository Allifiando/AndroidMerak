import { Actions } from 'react-native-router-flux';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button, ToastAndroid
} from 'react-native';
import API from '../helpers/API';

import {    
    VERIFY_SCREEN_CODE_CHANGED,
    VERIFY_SCREEN_PROCESS,
    VERIFY_SCREEN_SUCCESS,
    VERIFY_SCREEN_FAIL,
} from './types';

export const codeChanged = (text) => {
    return {
        type: VERIFY_SCREEN_CODE_CHANGED,
        payload: text
    }
};
export const verify = (code,email) => {
    // redux-thunk returns a function with dispatch
    console.log('jaln',{email,code})
    return (dispatch) => {
        dispatch({
            type: VERIFY_SCREEN_PROCESS
        });
        let api = new API();
        api.checkcode(code,email)
        // cons
            .then((response) => {
                console.log('seccess');
                verifySuccess(dispatch, response.data)
            })
            .catch((error) => {
                console.log('errr1');
                verifyFail(dispatch, error.data)
                // Alert.alert("Invalid email or password")
            });        
                    
    }
};

const verifySuccess = (dispatch) => {
  
    dispatch({
      type: VERIFY_SCREEN_SUCCESS
    });
    // console.log('loginoke');
    Actions.login();
  
  };

const verifyFail = (dispatch) => {
    // console.log('lognero',errorResponse);
    dispatch({
        type: VERIFY_SCREEN_FAIL,
        // payload: errorResponse.data.message        
    });
    Alert.alert("Kode Salah");
};

