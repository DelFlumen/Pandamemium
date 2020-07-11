import React from 'react';
import classes from './Dialogs.module.css'
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { addMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage;

//     let addMessage = () => {

//         props.store.dispatch(addMessageActionCreator());
//     }

//     // let onMessageChange = () => {

//     //     let newMessageEl = newMessage.current.value;
//     //     let action = updateNewMessageTextActionCreator(newMessageEl);
//     //     props.dispatch(action);

//     // }
//     let onMessageChange = (newMessageEl) => {


//         let action = updateNewMessageTextActionCreator(newMessageEl);
//         props.store.dispatch(action);

//     }

//     return <StoreContext.Consumer> 
//         {(store) => {
//         let state = store.getState().dialogsPage;

//     let addMessage = () => {

//         store.dispatch(addMessageActionCreator());
//     }
   
//     let onMessageChange = (newMessageEl) => {

//         let action = updateNewMessageTextActionCreator(newMessageEl);
//         store.dispatch(action);

//     }
        
//         return <Dialogs
//             updateNewMessageBody={onMessageChange}
//             addMessage={addMessage}
//             dialogsPage={state} />

//     }
//     }
//     </StoreContext.Consumer>


// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage

    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
        },


    }
}


export default compose (
    connect(mapStateToProps, mapDispatchToProps),
     withAuthRedirect 
  ) (Dialogs);