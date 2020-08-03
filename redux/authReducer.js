import { authAPI } from "../API/API";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => { //state = state.profilePage
    switch (action.type) {
        case SET_AUTH_USER_DATA:

            return {
                ...state,
                ...action.payload,
                
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } });

export const authMeThunkCreator = () => async (dispatch) => {
    let response = await authAPI.authMe();

        if (response.resultCode === 0) {
            let { email, id, login } = response.data;

            dispatch(setAuthUserData(id, email, login, true));
        }
    
    }



export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe); //response – результат промиса
        if (response.resultCode === 0) {
            dispatch(authMeThunkCreator());
        }
        else {
            let message = response.messages.length > 0 ? response.messages[0] : "Some error";
            dispatch(stopSubmit("login", {email: message}));
        }
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


