import { authAPI } from "../API/API";
import { stopSubmit } from "redux-form";
import { authMeThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => { //state = state.profilePage
    switch (action.type) {
        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized: true,
                
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authMeThunkCreator());
       promise.then(() => {
        dispatch(initializedSuccess());
       })
        
    
    }
}

export default appReducer;


