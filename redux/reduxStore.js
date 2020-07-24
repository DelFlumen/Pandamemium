import {createStore, combineReducers, applyMiddleware} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar:  navbarReducer,
    auth: authReducer,
    usersPage: usersReducer,
    form: formReducer,
    app: appReducer
    
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;
