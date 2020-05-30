import {createStore, combineReducers} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar:  navbarReducer
});

let store = createStore(reducers);

export default store;
