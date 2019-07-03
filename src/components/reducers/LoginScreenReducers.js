import {
    LOGIN_SCREEN_EMAIL_CHANGED,
    LOGIN_SCREEN_PASSWORD_CHANGED,
    LOGIN_SCREEN_PROCESS,
    LOGIN_SCREEN_SUCCESS,
    LOGIN_SCREEN_FAIL,
    RESET_ALL_STATE
  } from '../actions/types';
  
  const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    loading: false,
    // profile: [],
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_SCREEN_EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case LOGIN_SCREEN_PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case LOGIN_SCREEN_PROCESS:
        return { ...state, loading: true, error: '' };
      case LOGIN_SCREEN_SUCCESS:
        return { ...state, password: '' };
      case LOGIN_SCREEN_FAIL:
        return { ...state, error: action.payload, password: '', loading: false };
      case RESET_ALL_STATE:
        return INITIAL_STATE;
      default:
        return state;
    }
  }