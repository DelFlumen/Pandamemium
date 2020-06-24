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

export const setAuthUserData = (email, id, login) => ({ type: SET_AUTH_USER_DATA, data: {email, id, login} });


export default authReducer;


