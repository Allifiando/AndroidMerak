// login screen
export const LOGIN_SCREEN_EMAIL_CHANGED = 'LOGIN_SCREEN_EMAIL_CHANGED';
export const LOGIN_SCREEN_PASSWORD_CHANGED = 'LOGIN_SCREEN_PASSWORD_CHANGED';
export const LOGIN_SCREEN_PROCESS = 'LOGIN_SCREEN_PROCESS';
export const LOGIN_SCREEN_SUCCESS = 'LOGIN_SCREEN_SUCCESS';
export const LOGIN_SCREEN_FAIL = 'LOGIN_SCREEN_FAIL';

// create new account screen
export const SIGN_UP_SCREEN_NAMA_DEPAN_CHANGED = 'SIGN_UP_SCREEN_NAMA_DEPAN_CHANGED';
export const SIGN_UP_SCREEN_NAMA_BELAKANG_CHANGED = 'SIGN_UP_SCREEN_NAMA_BELAKANG_CHANGED';
export const SIGN_UP_SCREEN_GENDER_CHANGED = 'SIGN_UP_SCREEN_GENDER_CHANGED';
export const SIGN_UP_SCREEN_TELEPON_CHANGED = 'SIGN_UP_SCREEN_TELEPON_CHANGED';
export const SIGN_UP_SCREEN_ALAMAT_CHANGED = 'SIGN_UP_SCREEN_ALAMAT_CHANGED';
export const SIGN_UP_SCREEN_EMAIL_CHANGED = 'SIGN_UP_SCREEN_EMAIL_CHANGED';
export const SIGN_UP_SCREEN_PASSWORD_CHANGED = 'SIGN_UP_SCREEN_PASSWORD_CHANGED';
export const SIGN_UP_SCREEN_PROCESS = 'SIGN_UP_SCREEN_PROCESS';
export const SIGN_UP_SCREEN_SUCCESS = 'SIGN_UP_SCREEN_SUCCESS';
export const SIGN_UP_SCREEN_FAIL = 'SIGN_UP_SCREEN_FAIL';

// Pesan Screen
export const PESAN_SCREEN_PROCESS = 'PESAN_SCREEN_PROCESS';
export const PESAN_SCREEN_SUCCESS = 'PESAN_SCREEN_SUCCESS';
export const PESAN_SCREEN_FAIL = 'PESAN_SCREEN_FAIL';

//Verification Screem
export const VERIFY_SCREEN_PROCESS = 'VERIFY_SCREEN_PROCESS';
export const VERIFY_SCREEN_SUCCESS = 'VERIFY_SCREEN_SUCCESS';
export const VERIFY_SCREEN_FAIL = 'VERIFY_SCREEN_FAIL';
/*
//pROFIL
export const PROFIL_SCREEN_PROCESS = 'PROFIL_SCREEN_PROCESS';
export const PROFIL_SCREEN_SUCCESS = 'PROFIL_SCREEN_SUCCESS';
export const PROFIL_SCREEN_FAIL = 'PROFIL_SCREEN_FAIL';

// reset password screen
export const RESET_PASSWORD_SCREEN_EMAIL_CHANGED = 'RESET_PASSWORD_SCREEN_EMAIL_CHANGED';
export const RESET_PASSWORD_SCREEN_PROCESS = 'RESET_PASSWORD_SCREEN_PROCESS';
export const RESET_PASSWORD_SCREEN_SUCCESS = 'RESET_PASSWORD_SCREEN_SUCCESS';
export const RESET_PASSWORD_SCREEN_FAIL = 'RESET_PASSWORD_SCREEN_FAIL';

// CREATE DEVICE
export const CREATE_DEVICE_SUCCESS = 'CREATE_DEVICE_SUCCESS';
export const CREATE_DEVICE_FAIL = 'CREATE_DEVICE_FAIL';
export const CREATE_DEVICE_PROCESS = 'CREATE_DEVICE_PROCESS';
export const CREATE_DEVICE_SET_SERVER_PROCESS = 'CREATE_DEVICE_SET_SERVER_PROCESS';
export const CREATE_DEVICE_SET_SERVER_SUCCESS = 'CREATE_DEVICE_SET_SERVER_SUCCESS';
export const CREATE_DEVICE_SET_SERVER_FAIL = 'CREATE_DEVICE_SET_SERVER_FAIL';

// UPDATE DEVICE
export const UPDATE_DEVICE_UNIT_NAME_CHANGED = 'UPDATE_DEVICE_UNIT_NAME_CHANGED';
export const UPDATE_DEVICE_UNIT_TYPE_CHANGED = 'UPDATE_DEVICE_UNIT_TYPE_CHANGED';
export const UPDATE_DEVICE_IMEI_CHANGED = 'UPDATE_DEVICE_IMEI_CHANGED';
export const UPDATE_DEVICE_GSM_UNIT_CHANGED = 'UPDATE_DEVICE_GSM_UNIT_CHANGED';
export const UPDATE_DEVICE_AVATAR_CHANGED = 'UPDATE_DEVICE_AVATAR_CHANGED';
export const UPDATE_DEVICE_UNIT_STATUS_CHANGED = 'UPDATE_DEVICE_UNIT_STATUS_CHANGED';
export const UPDATE_DEVICE_SUCCESS = 'UPDATE_DEVICE_SUCCESS';
export const UPDATE_DEVICE_FAIL = 'UPDATE_DEVICE_FAIL';
export const UPDATE_DEVICE_PROCESS = 'UPDATE_DEVICE_PROCESS';

// EMAIL CHECK
export const EMAIL_CHECK_SUCCESS = 'EMAIL_CHECK_SUCCESS';
export const EMAIL_CHECK_FAIL = 'EMAIL_CHECK_FAIL';
export const EMAIL_CHECK_PROCESS = 'EMAIL_CHECK_PROCESS';

// track screen
export const TRACK_SCREEN_DEVICES_FETCH_SUCCESS = 'TRACK_SCREEN_DEVICES_FETCH_SUCCESS';
export const TRACK_SCREEN_DEVICES_FETCH_FAIL = 'TRACK_SCREEN_DEVICES_FETCH_FAIL';
export const TRACK_SCREEN_DEVICES_FETCH_PROCESS = 'TRACK_SCREEN_DEVICES_FETCH_PROCESS';
export const TRACK_SCREEN_SELECT_DEVICE = 'TRACK_SCREEN_SELECT_DEVICE';
export const TRACK_SCREEN_DEVICE_ADDRESS_SUCCESS = 'TRACK_SCREEN_DEVICE_ADDRESS_SUCCESS';
export const TRACK_SCREEN_DEVICE_ADDRESS_FAIL = 'TRACK_SCREEN_DEVICE_ADDRESS_FAIL';
export const TRACK_SCREEN_GEONAME_CHANGED = 'TRACK_SCREEN_GEONAME_CHANGED';
export const TRACK_SCREEN_GEORADIUS_CHANGED = 'TRACK_SCREEN_GEORADIUS_CHANGED';
export const TRACK_SCREEN_GEOLAT_CHANGED = 'TRACK_SCREEN_GEOLAT_CHANGED';
export const TRACK_SCREEN_GEOLONG_CHANGED = 'TRACK_SCREEN_GEOLONG_CHANGED';
export const TRACK_SCREEN_SUBMIT_GEOFENCE_SUCCESS = 'TRACK_SCREEN_SUBMIT_GEOFENCE_SUCCESS';
export const TRACK_SCREEN_SUBMIT_GEOFENCE_FAIL = 'TRACK_SCREEN_SUBMIT_GEOFENCE_FAIL';
export const TRACK_SCREEN_SUBMIT_GEOFENCE_PROCESS = 'TRACK_SCREEN_SUBMIT_GEOFENCE_PROCESS';
export const TRACK_SCREEN_GEOFENCES_FETCH_SUCCESS = 'TRACK_SCREEN_GEOFENCES_FETCH_SUCCESS';
export const TRACK_SCREEN_GEOFENCES_FETCH_FAIL = 'TRACK_SCREEN_GEOFENCES_FETCH_FAIL';
export const TRACK_SCREEN_GEOFENCES_FETCH_PROCESS = 'TRACK_SCREEN_GEOFENCES_FETCH_PROCESS';
export const TRACK_SCREEN_SELECT_GEOFENCE = 'TRACK_SCREEN_SELECT_GEOFENCE';
export const TRACK_SCREEN_DELETE_GEOFENCE_SUCCESS = 'TRACK_SCREEN_DELETE_GEOFENCE_SUCCESS';
export const TRACK_SCREEN_DELETE_GEOFENCE_FAIL = 'TRACK_SCREEN_DELETE_GEOFENCE_FAIL';
export const TRACK_SCREEN_DELETE_GEOFENCE_PROCESS = 'TRACK_SCREEN_DELETE_GEOFENCE_PROCESS';
export const TRACK_SCREEN_EDIT_GEOFENCE_SUCCESS = 'TRACK_SCREEN_EDIT_GEOFENCE_SUCCESS';
export const TRACK_SCREEN_EDIT_GEOFENCE_FAIL = 'TRACK_SCREEN_EDIT_GEOFENCE_FAIL';
export const TRACK_SCREEN_EDIT_GEOFENCE_PROCESS = 'TRACK_SCREEN_EDIT_GEOFENCE_PROCESS';
export const TRACK_SCREEN_ADDGEOFENCE_CANCEL = 'TRACK_SCREEN_ADDGEOFENCE_CANCEL';
export const TRACK_SCREEN_EDITGEOFENCE_CANCEL = 'TRACK_SCREEN_EDITGEOFENCE_CANCEL';
export const TRACK_SCREEN_MAPCARD_CANCEL = 'TRACK_SCREEN_MAPCARD_CANCEL';
export const TRACK_SCREEN_MAPCARD_CLOSE = 'TRACK_SCREEN_MAPCARD_CLOSE';
export const TRACK_SCREEN_CANCEL_ALL_CARD = 'TRACK_SCREEN_CANCEL_ALL_CARD';
export const TRACK_SCREEN_OPEN_ALERT_CARD = 'TRACK_SCREEN_OPEN_ALERT_CARD';
export const TRACK_SCREEN_CLOSE_ALERT_CARD = 'TRACK_SCREEN_CLOSE_ALERT_CARD';
export const TRACK_SCREEN_RENEW_GEOFENCES = 'TRACK_SCREEN_RENEW_GEOFENCES';
export const TRACK_SCREEN_CLEAR_TRAIL_DEVICE = 'TRACK_SCREEN_CLEAR_TRAIL_DEVICE';

//Check Connection
export const CHANGE_CONNECTION_STATUS = 'CHANGE_CONNECTION_STATUS';
export const CHANGE_CHECK_CONNECTION_STATE = 'CHANGE_CHECK_CONNECTION_STATE';

// device detail
export const DEVICE_DETAIL_FETCH_PROCESS = 'DEVICE_DETAIL_FETCH_PROCESS';
export const DEVICE_DETAIL_FETCH_SUCCESS = 'DEVICE_DETAIL_FETCH_SUCCESS';
export const DEVICE_DETAIL_FETCH_ERROR = 'DEVICE_DETAIL_FETCH_ERROR';
export const DEVICE_DETAIL_ADDRESS_FETCH_SUCCESS = 'DEVICE_DETAIL_ADDRESS_FETCH_SUCCESS';
export const DEVICE_DETAIL_ADDRESS_FETCH_FAIL = 'DEVICE_DETAIL_ADDRESS_FETCH_FAIL';

// device form
export const DEVICE_FORM_UPDATE = 'DEVICE_FORM_UPDATE';
export const DEVICE_FORM_PROCESS = 'DEVICE_FORM_PROCESS';
export const DEVICE_FORM_SUCCESS = 'DEVICE_FORM_SUCCESS';
export const DEVICE_FORM_RESET = 'DEVICE_FORM_RESET';

// device list
export const DEVICE_LIST_SCREEN_GROUP_FETCH_SUCCESS = 'DEVICE_LIST_SCREEN_DEVICES_FETCH_SUCCESS';
export const DEVICE_LIST_SCREEN_GROUP_FETCH_FAIL = 'DEVICE_LIST_SCREEN_DEVICES_FETCH_FAIL';
export const DEVICE_LIST_SCREEN_GROUP_FETCH_PROCESS = 'DEVICE_LIST_SCREEN_DEVICES_FETCH_PROCESS';


// device history
export const DEVICE_HISTORY_ROUTES_FETCH_SUCCESS = 'DEVICE_HISTORY_ROUTES_FETCH_SUCCESS';
export const DEVICE_HISTORY_ROUTES_FETCH_FAIL = 'DEVICE_HISTORY_ROUTES_FETCH_FAIL';
export const DEVICE_HISTORY_ROUTES_FETCH_PROCESS = 'DEVICE_HISTORY_ROUTES_FETCH_PROCESS';
export const DEVICE_HISTORY_ROUTES_GET_START_ADDRESS_SUCCESS = 'DEVICE_HISTORY_ROUTES_GET_START_ADDRESS_SUCCESS';
export const DEVICE_HISTORY_ROUTES_GET_START_ADDRESS_FAIL = 'DEVICE_HISTORY_ROUTES_GET_START_ADDRESS_FAIL';
export const DEVICE_HISTORY_ROUTES_GET_START_ADDRESS_PROCESS = 'DEVICE_HISTORY_ROUTES_GET_START_ADDRESS_PROCESS';
export const DEVICE_HISTORY_ROUTES_GET_END_ADDRESS_PROCESS = 'DEVICE_HISTORY_ROUTES_GET_END_ADDRESS_PROCESS';
export const DEVICE_HISTORY_ROUTES_GET_END_ADDRESS_SUCCESS = 'DEVICE_HISTORY_ROUTES_GET_END_ADDRESS_SUCCESS';
export const DEVICE_HISTORY_ROUTES_GET_END_ADDRESS_FAIL = 'DEVICE_HISTORY_ROUTES_GET_END_ADDRESS_FAIL';

// device route detail
export const DEVICE_ROUTE_DETAIL_FETCH_PROCESS = 'DEVICE_ROUTE_DETAIL_FETCH_PROCESS';
export const DEVICE_ROUTE_DETAIL_FETCH_SUCCESS = 'DEVICE_ROUTE_DETAIL_FETCH_SUCCESS';
export const DEVICE_ROUTE_DETAIL_FETCH_FAIL = 'DEVICE_ROUTE_DETAIL_FETCH_FAIL';

// devices
export const DEVICES_FETCH_SUCCESS = 'DEVICES_FETCH_SUCCESS';

// Change password
export const CHANGE_PASSWORD_SCREEN_SUCCESS = 'CHANGE_PASSWORD_SCREEN_SUCCESS';
export const CHANGE_PASSWORD_SCREEN_FAIL = 'CHANGE_PASSWORD_SCREEN_FAIL';
export const CHANGE_PASSWORD_SCREEN_PROCESS = 'CHANGE_PASSWORD_SCREEN_PROCESS';
export const CHANGE_PASSWORD_SCREEN_PASSWORD_CHANGED = 'CHANGE_PASSWORD_SCREEN_PASSWORD_CHANGED';
export const CHANGE_PASSWORD_SCREEN_PASSWORD_CONF_CHANGED = 'CHANGE_PASSWORD_SCREEN_PASSWORD_CONF_CHANGED';

// Profiles
export const PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
export const PROFILE_FETCH_FAIL = 'PROFILE_FETCH_FAIL';
export const EDIT_PROFILE_PROCESS = 'EDIT_PROFILE_PROCESS';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAIL = 'EDIT_PROFILE_FAIL';
export const PROFILE_NAME_CHANGED = 'PROFILE_NAME_CHANGED';
export const PROFILE_EMAIL_CHANGED = 'PROFILE_EMAIL_CHANGED';
export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE';
export const SPEED_LIMIT_CHANGED = 'SPEED_LIMIT_CHANGED';
export const SET_SPEED_LIMIT_PROCESS = 'SET_SPEED_LIMIT_PROCESS';
export const SET_SPEED_LIMIT_SUCCESS = 'SET_SPEED_LIMIT_SUCCESS';
export const SET_SPEED_LIMIT_FAIL = 'SET_SPEED_LIMIT_FAIL';

// License
export const LICENSE_ADD_CHANGED = 'LICENSE_ADD_CHANGED';
export const LICENSE_TOTAL_CHANGED = 'LICENSE_TOTAL_CHANGED';
export const LICENSE_TYPE_CHANGED = 'LICENSE_TYPE_CHANGED';
export const LICENSE_PAYMENT_NAME_CHANGED = 'LICENSE_PAYMENT_NAME_CHANGED';
export const LICENSE_PAYMENT_BANK_CHANGED = 'LICENSE_PAYMENT_BANK_CHANGED';
export const LICENSE_PAYMENT_DATE_CHANGED = 'LICENSE_PAYMENT_DATE_CHANGED';
export const LICENSE_PAYMENT_NUMBER_CHANGED = 'LICENSE_PAYMENT_NUMBER_CHANGED';
export const LICENSE_PAYMENT_VALUE_CHANGED = 'LICENSE_PAYMENT_VALUE_CHANGED';
export const LICENSE_BUY_PROCESS = 'LICENSE_BUY_PROCESS';
export const LICENSE_BUY_SUCCESS = 'LICENSE_BUY_SUCCESS';
export const LICENSE_BUY_FAIL = 'LICENSE_BUY_FAIL';
export const LICENSE_PAYMENT_METHOD_CHANGED = 'LICENSE_PAYMENT_METHOD_CHANGED';
export const LICENSE_CREATE_INVOICE_FAIL = 'LICENSE_CREATE_INVOICE_FAIL';
export const LICENSE_CREATE_INVOICE_SUCCESS = 'LICENSE_CREATE_INVOICE_SUCCESS';
export const LICENSE_CREATE_INVOICE_PROCESS = 'LICENSE_CREATE_INVOICE_PROCESS';
export const LICENSE_PAYMENT_CONF_PROCESS = 'LICENSE_PAYMENT_CONF_PROCESS';
export const LICENSE_PAYMENT_CONF_SUCCESS = 'LICENSE_PAYMENT_CONF_SUCCESS';
export const LICENSE_PAYMENT_CONF_FAIL = 'LICENSE_PAYMENT_CONF_FAIL';
export const LICENSE_BILLING_NAME_CHANGED = 'LICENSE_BILLING_NAME_CHANGED';
export const LICENSE_BILLING_EMAIL_CHANGED = 'LICENSE_BILLING_EMAIL_CHANGED';
export const LICENSE_BILLING_PHONE_CHANGED = 'LICENSE_BILLING_PHONE_CHANGED';
export const LICENSE_BILLING_ADDRESS_CHANGED = 'LICENSE_BILLING_ADDRESS_CHANGED';
export const LICENSE_BILLING_CITY_CHANGED = 'LICENSE_BILLING_CITY_CHANGED';
export const LICENSE_BILLING_POSTAL_CHANGED = 'LICENSE_BILLING_POSTAL_CHANGED';

// Invoice
export const INVOICES_FETCH_PROCESS = 'INVOICES_FETCH_PROCESS';
export const INVOICES_FETCH_SUCCESS = 'INVOICES_FETCH_SUCCESS';
export const INVOICES_FETCH_FAIL = 'INVOICES_FETCH_FAIL';
export const SELECT_INVOICE = 'SELECT_INVOICE';
export const BANK_DETAILS_FETCH_PROCESS = 'BANK_DETAILS_FETCH_PROCESS';
export const BANK_DETAILS_FETCH_SUCCESS = 'BANK_DETAILS_FETCH_SUCCESS';
export const BANK_DETAILS_FETCH_FAIL = 'BANK_DETAILS_FETCH_FAIL';


// Share Link
export const SHARE_LINK_NAME_CHANGED = 'SHARE_LINK_NAME_CHANGED';
export const SHARE_LINK_DATE_CHANGED = 'SHARE_LINK_DATE_CHANGED';
export const SHARE_LINK_INPUT_PROCESS = 'SHARE_LINK_INPUT_PROCESS';
export const SHARE_LINK_INPUT_FAIL = 'SHARE_LINK_INPUT_FAIL';
export const SHARE_LINK_INPUT_SUCCESS = 'SHARE_LINK_INPUT_SUCCESS';
export const SHARE_LINK_FETCH_PROCESS = 'SHARE_LINK_FETCH_PROCESS';
export const SHARE_LINK_FETCH_SUCCESS = 'SHARE_LINK_FETCH_SUCCESS';
export const SHARE_LINK_FETCH_FAIL = 'SHARE_LINK_FETCH_FAIL';
export const SHARE_LINK_DELETE_PROCESS = 'SHARE_LINK_DELETE_PROCESS';
export const SHARE_LINK_DELETE_SUCCESS = 'SHARE_LINK_DELETE_SUCCESS';
export const SHARE_LINK_DELETE_FAIL = 'SHARE_LINK_DELETE_FAIL';


// Notification
export const NOTIFICATION_GET_USER_ID = 'NOTIFICATION_GET_USER_ID';
export const NOTIFICATION_OPENED = 'NOTIFICATION_OPENED';

// Device Command
export const DEVICE_COMMAND_PASSWORD_CHANGED = 'DEVICE_COMMAND_PASSWORD_CHANGED';
export const SET_MODAL_COMMAND_VISIBLE = 'SET_MODAL_COMMAND_VISIBLE';
export const DEVICE_COMMAND_CUT_OFF_ENGINE_PROCESS = 'DEVICE_COMMAND_CUT_OFF_ENGINE_PROCESS';
export const DEVICE_COMMAND_CUT_OFF_ENGINE_SUCCESS = 'DEVICE_COMMAND_CUT_OFF_ENGINE_SUCCESS';
export const DEVICE_COMMAND_CUT_OFF_ENGINE_FAIL = 'DEVICE_COMMAND_CUT_OFF_ENGINE_FAIL';
export const DEVICE_COMMAND_TURN_ON_ENGINE_PROCESS = 'DEVICE_COMMAND_TURN_ON_ENGINE_PROCESS';
export const DEVICE_COMMAND_TURN_ON_ENGINE_SUCCESS = 'DEVICE_COMMAND_TURN_ON_ENGINE_SUCCESS';
export const DEVICE_COMMAND_TURN_ON_ENGINE_FAIL = 'DEVICE_COMMAND_TURN_ON_ENGINE_FAIL';

// Member
export const MEMBER_NAME_CHANGED = 'MEMBER_NAME_CHANGED';
export const MEMBER_EMAIL_CHANGED = 'MEMBER_EMAIL_CHANGED';
export const MEMBER_PASSWORD_CHANGED = 'MEMBER_PASSWORD_CHANGED';
export const MEMBER_INPUT_PROCESS = 'MEMBER_INPUT_PROCESS';
export const MEMBER_INPUT_FAIL = 'MEMBER_INPUT_FAIL';
export const MEMBER_INPUT_SUCCESS = 'MEMBER_INPUT_SUCCESS';
export const MEMBER_FETCH_PROCESS = 'MEMBER_FETCH_PROCESS';
export const MEMBER_FETCH_SUCCESS = 'MEMBER_FETCH_SUCCESS';
export const MEMBER_FETCH_FAIL = 'MEMBER_FETCH_FAIL';
export const MEMBER_DELETE_PROCESS = 'MEMBER_DELETE_PROCESS';
export const MEMBER_DELETE_SUCCESS = 'MEMBER_DELETE_SUCCESS';
export const MEMBER_DELETE_FAIL = 'MEMBER_DELETE_FAIL';

// Dashboard
// export const DASHBOARD_SUMMARY_ROUTE_FETCH_PROCESS = 'DASHBOARD_SUMMARY_ROUTE_FETCH_PROCESS';
// export const DASHBOARD_SUMMARY_ROUTE_FETCH_SUCCESS = 'DASHBOARD_SUMMARY_ROUTE_FETCH_SUCCESS';
// export const DASHBOARD_SUMMARY_ROUTE_FETCH_FAIL = 'DASHBOARD_SUMMARY_ROUTE_FETCH_FAIL';
// export const DASHBOARD_SUMMARY_MILEAGE_FETCH_PROCESS = 'DASHBOARD_SUMMARY_MILEAGE_FETCH_PROCESS';
// export const DASHBOARD_SUMMARY_MILEAGE_FETCH_SUCCESS = 'DASHBOARD_SUMMARY_MILEAGE_FETCH_SUCCESS';
// export const DASHBOARD_SUMMARY_MILEAGE_FETCH_FAIL = 'DASHBOARD_SUMMARY_MILEAGE_FETCH_FAIL';
// export const DASHBOARD_SUMMARY_SPEED_FETCH_SUCCESS = 'DASHBOARD_SUMMARY_SPEED_FETCH_SUCCESS';
// export const DASHBOARD_SUMMARY_SPEED_FETCH_PROCESS = 'DASHBOARD_SUMMARY_SPEED_FETCH_PROCESS';
// export const DASHBOARD_SUMMARY_SPEED_FETCH_FAIL = 'DASHBOARD_SUMMARY_SPEED_FETCH_FAIL';
// export const DASHBOARD_SUMMARY_STATUS_FETCH_SUCCESS = 'DASHBOARD_SUMMARY_STATUS_FETCH_SUCCESS';
// export const DASHBOARD_SUMMARY_STATUS_FETCH_FAIL = 'DASHBOARD_SUMMARY_STATUS_FETCH_FAIL';
// export const DASHBOARD_SUMMARY_STATUS_FETCH_PROCESS = 'DASHBOARD_SUMMARY_STATUS_FETCH_PROCESS';
// export const DASHBOARD_SUMMARY_DATE_ROUTE_CHANGED = 'DASHBOARD_SUMMARY_DATE_ROUTE_CHANGED';
// export const DASHBOARD_SUMMARY_DATE_MILEAGE_CHANGED = 'DASHBOARD_SUMMARY_DATE_MILEAGE_CHANGED';
// export const DASHBOARD_SUMMARY_DATE_SPEED_CHANGED = 'DASHBOARD_SUMMARY_DATE_SPEED_CHANGED';
// export const DASHBOARD_SUMMARY_DATE_STATUS_CHANGED = 'DASHBOARD_SUMMARY_DATE_STATUS_CHANGED';
*/
// Reset All State
export const RESET_ALL_STATE = 'RESET_ALL_STATE';
export const RESET_ALL_STATE_SUCCESS = 'RESET_ALL_STATE_SUCCESS';
export const RESET_ALL_STATE_FAIL = 'RESET_ALL_STATE_FAIL';