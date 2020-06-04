const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const CHANGE_LIKE_COUNT = 'CHANGE-LIKE-COUNT';

let initialState = {
    postsData: [
      { id: 1, text: "What's up?", likeCount: 15 },
      { id: 2, text: "It's my first site", likeCount: 20 },

    ],
    newPostText: ""
  }

const profileReducer = (state = initialState, action) => { //state = state.profilePage
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length + 1,
                text: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state};
            

            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case CHANGE_LIKE_COUNT: {
            let stateCopy = {...state};
            stateCopy.postsData.map(post => {
                if (post.id === action.messageId) {
                    post.likeCount += 1;
                }
            });
            // state.postsData[action.messageId-1].likeCount += 1; 
            return stateCopy;
        }
        default:
            return state;
    }
}

export const changeLikeCountActionCreator = (messageId) => ({ type: CHANGE_LIKE_COUNT, messageId: messageId });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
});
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;


