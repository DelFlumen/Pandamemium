import {createStore, combineReducers} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar:  navbarReducer,
    auth: authReducer,
    usersPage: usersReducer
    
});

let store = createStore(reducers);


export default store;
