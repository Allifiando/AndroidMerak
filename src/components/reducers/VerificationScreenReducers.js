import {    
    VERIFY_SCREEN_PROCESS,
    VERIFY_SCREEN_SUCCESS,
    VERIFY_SCREEN_FAIL,
    RESET_ALL_STATE
  } from '../actions/types';
  
  const INITIAL_STATE = {    
    error: '',
    loading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {      
      case VERIFY_SCREEN_PROCESS:
        return { ...state, loading: true, error: '' };
      case VERIFY_SCREEN_SUCCESS:
        return { ...state, ...INITIAL_STATE };
      case VERIFY_SCREEN_FAIL:
        return { ...state, error: action.payload, loading: false };
      case RESET_ALL_STATE:
        return INITIAL_STATE;
      default:
        return state;
    }
  }