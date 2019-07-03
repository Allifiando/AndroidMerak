import { Actions } from 'react-native-router-flux';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button, ToastAndroid
} from 'react-native';
import API from '../helpers/API';

import {
    LOGIN_SCREEN_EMAIL_CHANGED,
    LOGIN_SCREEN_PASSWORD_CHANGED,
    LOGIN_SCREEN_PROCESS,
    LOGIN_SCREEN_SUCCESS,
    LOGIN_SCREEN_FAIL,
} from './types';

export const emailChanged = (text) => {
    return {
        type: LOGIN_SCREEN_EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: LOGIN_SCREEN_PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = (email, password, dev_id) => {
    // redux-thunk returns a function with dispatch
    // console.log('jaln',{email,password})
    return (dispatch) => {
        dispatch({
            type: LOGIN_SCREEN_PROCESS
        });
        let api = new API();
        api.login(email, password, dev_id)
        // cons
            .then((response) => {
                console.log('seccess');
                loginUserSuccess(dispatch, response.data.token)
            })
            .catch((error) => {
                console.log('errr1');
                loginUserFail(dispatch, error.data)
                // Alert.alert("Invalid email or password")
            });        
                    
    }
};

const loginUserSuccess = (dispatch,token) => {
    let api = new API();
    // // let result = api.saveToken(token);
    console.log(token);
    api.saveToken(token);
  
    dispatch({
      type: LOGIN_SCREEN_SUCCESS,
      
    });
    // console.log('loginoke');
    Actions.pesan({ type: 'reset' });
  
  };

const loginUserFail = (dispatch) => {
    // console.log('lognero',errorResponse);
    dispatch({
        type: LOGIN_SCREEN_FAIL,
        // payload: errorResponse.data.message        
    });
    Alert.alert("Invalid email or password");
};

