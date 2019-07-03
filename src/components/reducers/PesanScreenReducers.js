import {    
    PESAN_SCREEN_PROCESS,
    PESAN_SCREEN_SUCCESS,
    PESAN_SCREEN_FAIL,
    RESET_ALL_STATE
  } from '../actions/types';
  
  const INITIAL_STATE = {    
    error: '',
    loading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {      
      case PESAN_SCREEN_PROCESS:
        return { ...state, loading: true, error: '' };
      case PESAN_SCREEN_SUCCESS:
        return { ...state, ...INITIAL_STATE };
      case PESAN_SCREEN_FAIL:
        return { ...state, error: action.payload, loading: false };
      case RESET_ALL_STATE:
        return INITIAL_STATE;
      default:
        return state;
    }
  }