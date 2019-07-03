import { Actions } from 'react-native-router-flux';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button, ToastAndroid
} from 'react-native';
import API from '../helpers/API';

import {    
    PESAN_SCREEN_PROCESS,
    PESAN_SCREEN_SUCCESS,
    PESAN_SCREEN_FAIL,
} from './types';


export const pesan = (dev_id) => {
    // redux-thunk returns a function with dispatch
    // console.log('jaln',{email,password})
    return (dispatch) => {
        dispatch({
            type: PESAN_SCREEN_PROCESS
        });
        let api = new API();
        api.logout(dev_id)
        // cons
            .then((response) => {
                console.log('seccess');
                pesanSuccess(dispatch, response.data.token)
            })
            .catch((error) => {
                console.log('errr1');
                pesanFail(dispatch, error.data)
                // Alert.alert("Invalid email or password")
            });        
                    
    }
};

const pesanSuccess = (dispatch) => {
    let api = new API();
    // // let result = api.saveToken(token);
    // console.log(token);
    api.clearToken();
  
    dispatch({
      type: PESAN_SCREEN_SUCCESS
    });
    // console.log('loginoke');
    Actions.menu({ type: 'reset' });
  
  };

const pesanFail = (dispatch) => {
    // console.log('lognero',errorResponse);
    dispatch({
        type: PESAN_SCREEN_FAIL,
        // payload: errorResponse.data.message        
    });
    Alert.alert("Invalid email or password");
};

