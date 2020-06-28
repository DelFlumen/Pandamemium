import { authAPI } from "../API/API";

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
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (email, id, login) => ({ type: SET_AUTH_USER_DATA, data: { email, id, login } });

export const authMeThunkCreator = () => {
    return (dispatch) => {
    authAPI.authMe().then((data) => {

        if (data.resultCode === 0) {
            let { email, id, login } = data.data;

            dispatch(setAuthUserData(id, email, login));
        }
    }).catch((err) => {
        console.log(err);
    });
    }
}
export default authReducer;


