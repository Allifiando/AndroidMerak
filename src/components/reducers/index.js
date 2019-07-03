import { combineReducers } from 'redux';
// import AuthReducer from './AuthReducer';
import LoginScreenReducer from './LoginScreenReducers';
import SignUpScreenReducer from './SignUpScreenReducers';
import PesanScreenReducer from './PesanScreenReducers';
import VerificationScreenReducer from './VerificationScreenReducers';
import ProfilScreenReducer from './ProfilScreenReducers';

export default combineReducers({
    // auth: AuthReducer,
    loginScreen: LoginScreenReducer,
    signUpScreen: SignUpScreenReducer,
    pesanScreen: PesanScreenReducer,
    verificationScreen: VerificationScreenReducer,
    profiles: ProfilScreenReducer,
});