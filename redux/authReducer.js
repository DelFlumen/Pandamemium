import { authAPI } from "../API/API";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


let initialState = {
    userId: null,
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

export const setAuthUserData = (email, id, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { email, id, login, isAuth } });

export const authMeThunkCreator = () => {
    return (dispatch) => {
    return authAPI.authMe().then((data) => {

        if (data.resultCode === 0) {
            let { email, id, login } = data.data;

            dispatch(setAuthUserData(id, email, login, true));
        }
    }).catch((err) => {
        console.log(err);
    });
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
        if (data.resultCode === 0) {
            dispatch(authMeThunkCreator());
        }
        else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {email: message}));
        }
    });
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


