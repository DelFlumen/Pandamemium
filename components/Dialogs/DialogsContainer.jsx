import React from 'react';
import classes from './Dialogs.module.css'
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {

        props.store.dispatch(addMessageActionCreator());
    }

    // let onMessageChange = () => {

    //     let newMessageEl = newMessage.current.value;
    //     let action = updateNewMessageTextActionCreator(newMessageEl);
    //     props.dispatch(action);

    // }
    let onMessageChange = (newMessageEl) => {


        let action = updateNewMessageTextActionCreator(newMessageEl);
        props.store.dispatch(action);

    }

    return <Dialogs
        updateNewMessageBody={onMessageChange} 
        addMessage={addMessage}
        dialogsPage={state} />


}

export default DialogsContainer;