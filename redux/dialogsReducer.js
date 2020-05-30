const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
      { id: 1, name: "Вика" },
      { id: 2, name: "Ярослав" },
      { id: 3, name: "Леонид Якубович" },
      { id: 4, name: "Сергій Коваленко" }
    ],
    messagesData: [
      { id: 1, text: "Шо такое?" },
      { id: 2, text: "Шо-то не такое" },
      { id: 3, text: "Сектор приз на барабане" },
      { id: 4, text: 'Як читається "sociable"?' }
    ],
    newMessageText: ""
  }

const dialogsReducer = (state = initialState, action) => { //state = state.dialogsPage
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                text: state.newMessageText,
                likeCount: 0
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageElement;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, newMessageElement: text
});

export default dialogsReducer; 