import React from 'react';
import classes from './Dialogs.module.css'
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
// import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {
    
    // let state = props.dialogsPage;

    let dialogsArr = props.dialogsPage.dialogsData.map(person => {
        return <DialogItem id={person.id} name={person.name} />
    }
    );

    let messagesArr = props.dialogsPage.messagesData.map(textObj => <MessageItem text={textObj.text} />);
    let newMessageText = props.dialogsPage.newMessageText;

    // let newMessage = React.createRef();
    
    // let onMessageChange = () => {
        
    //     let newMessageEl = newMessage.current.value;
    //     let action = updateNewMessageTextActionCreator(newMessageEl);
    //     props.dispatch(action);

    // }
    
    let addNewMessage = (values) => {
        
        props.addMessage(values.newMessageBody);
    }



    if (props.isAuth === false) return <Redirect to={"/login"}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsArr}

            </div>
            <div className={classes.messages}>

                {messagesArr}
                <AddMessageReduxForm onSubmit={addNewMessage}/>            
            </div>
        </div>

    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div><Field placeholder="Enter your message"
                    component="textarea"
                    name="newMessageBody"/></div>
                <div><button>Add Message</button></div>
                </form>  
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;