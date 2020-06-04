import React from 'react';
import classes from './Dialogs.module.css'
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
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
    let addMessage = () => {
        
        props.addMessage();
    }

    // let onMessageChange = () => {
        
    //     let newMessageEl = newMessage.current.value;
    //     let action = updateNewMessageTextActionCreator(newMessageEl);
    //     props.dispatch(action);

    // }
    let onMessageChange = (e) => {
        
        let newMessageEl = e.target.value;
        props.updateNewMessageBody(newMessageEl);
        // let action = updateNewMessageTextActionCreator(newMessageEl);
        // props.dispatch(action);

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsArr}

            </div>
            <div className={classes.messages}>

                {messagesArr}
                <div><textarea placeholder="Enter your message"
                    onChange={onMessageChange}
                    value={newMessageText}></textarea></div>
                <div><button onClick={addMessage}>Add Message</button></div>
            </div>
        </div>

    )
}

export default Dialogs;