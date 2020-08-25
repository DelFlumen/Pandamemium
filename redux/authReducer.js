import { authAPI, securityAPI } from "../API/API";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => { //state = state.profilePage
    switch (action.type) {
        case SET_AUTH_USER_DATA:

            return {
                ...state,
                ...action.payload,
                
            }
        case GET_CAPTCHA_URL_SUCCESS: 
        debugger;
            return {
                ...state,
                ...action.payload,
                
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } }); //action creator
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } }); //action creator

export const authMeThunkCreator = () => async (dispatch) => {
    let response = await authAPI.authMe();

        if (response.resultCode === 0) {
            let { email, id, login } = response.data;

            dispatch(setAuthUserData(id, email, login, true));
        }
    
    }



export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha); //response – результат промиса
        if (response.resultCode === 0) {
            dispatch(authMeThunkCreator());
        }
        else {
            if (response.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());    
            }
            let message = response.messages.length > 0 ? response.messages[0] : "Some error";
            dispatch(stopSubmit("login", {email: message}));
        }
    }

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl(); //response – результат промиса
    const captchaUrl = response.data.url;
    
    dispatch(getCaptchaUrlSuccess(captchaUrl));
    }



export const logoutThunkCreator = () => {
    return (dispatch) => {
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }).catch((err) => {
        console.log(err);
    });
    }
}

export default authReducer;


