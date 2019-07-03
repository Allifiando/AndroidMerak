import {
    SIGN_UP_SCREEN_NAMA_DEPAN_CHANGED,
    SIGN_UP_SCREEN_NAMA_BELAKANG_CHANGED,
    SIGN_UP_SCREEN_GENDER_CHANGED,
    SIGN_UP_SCREEN_TELEPON_CHANGED,
    SIGN_UP_SCREEN_ALAMAT_CHANGED,
    SIGN_UP_SCREEN_EMAIL_CHANGED,
    SIGN_UP_SCREEN_PASSWORD_CHANGED,    
    SIGN_UP_SCREEN_PROCESS,
    SIGN_UP_SCREEN_SUCCESS,
    SIGN_UP_SCREEN_FAIL,
    RESET_ALL_STATE
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    loading: false,
    validation: '',
    nama_depan: '',
    nama_belakang: '',
    gender: '',
    telepon: '',
    alamat: '',
    // email: '',
    password: '',
    // confirm_password: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP_SCREEN_NAMA_DEPAN_CHANGED:
            return { ...state, nama_depan: action.payload };
        case SIGN_UP_SCREEN_NAMA_BELAKANG_CHANGED:
            return { ...state, nama_belakang: action.payload };
        case SIGN_UP_SCREEN_GENDER_CHANGED:
            return { ...state, gender: action.payload };
            case SIGN_UP_SCREEN_TELEPON_CHANGED:
            return { ...state, telepon: action.payload };
        case SIGN_UP_SCREEN_ALAMAT_CHANGED:
            return { ...state, alamat: action.payload };        
        case SIGN_UP_SCREEN_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case SIGN_UP_SCREEN_PASSWORD_CHANGED:
            return { ...state, password: action.payload };        
        case SIGN_UP_SCREEN_PROCESS:
            return { ...state, loading: true, error: '' };
        case SIGN_UP_SCREEN_SUCCESS:
            return { ...state, loading: false };
        case SIGN_UP_SCREEN_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
        case RESET_ALL_STATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}