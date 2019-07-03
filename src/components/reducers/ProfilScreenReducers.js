import {
  PROFIL_SCREEN_PROCESS,
  PROFIL_SCREEN_SUCCESS,
  PROFIL_SCREEN_FAIL,
  RESET_ALL_STATE
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  profiles: [],
  nama_depan: '',
  nama_belakang: '',
  email: '',
  telepon: '',
  alamat: '',
  password: '',
  gender: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFIL_SCREEN_PROCESS:
      return { ...state, loading: true, error: '' };
    case PROFIL_SCREEN_SUCCESS:
      return {
        ...state, 
        nama_depan: action.payload,
        // nama_depan: action.payload.nama_depan,
        // nama_belakang: action.payload.nama_belakang,
        // email: action.payload.email,
        // telepon: action.payload.telepon,
        // password: action.payload.password,
        // alamat: action.payload.alamat,
        // gender: action.payload.gender,
        // nama_depan: action.nama_depan, nama_belakang: action.nama_blk,
        // email: action.email, telepon: action.telepon, password: action.password,
        // alamat: action.alamat, gender: action.gender
      };
    case PROFIL_SCREEN_FAIL:
      return { ...state, error: action.payload, loading: false };
    case RESET_ALL_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}