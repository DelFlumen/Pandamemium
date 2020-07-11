const ADD_MESSAGE = 'ADD-MESSAGE';

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
                text: action.newMessageBody,
                likeCount: 0
            };
          //   let stateCopy = {...state};
          //   stateCopy.messagesData = [...state.messagesData];
          //   stateCopy.messagesData.push(newMessage);
          //   stateCopy.newMessageText = '';
          //   return stateCopy;
          // }

          return {
            ...state,            
            messagesData: [...state.messagesData, newMessage]
          }
          default:
            return state;
        }
}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody: newMessageBody });


export default dialogsReducer; 