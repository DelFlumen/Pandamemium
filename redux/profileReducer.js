import { profileAPI } from "../API/API";

const ADD_POST = 'ADD-POST';
const CHANGE_LIKE_COUNT = 'CHANGE-LIKE-COUNT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
      { id: 1, text: "What's up?", likeCount: 15 },
      { id: 2, text: "It's my first site", likeCount: 20 },

    ],
    profile: null,
    status: ""
  }

const profileReducer = (state = initialState, action) => { //state = state.profilePage
    switch (action.type) {
        case ADD_POST: {
            debugger
            let newPost = {
                id: state.postsData.length + 1,
                text: action.newPostBody,
                likeCount: 0
            };
            let stateCopy = {...state};
            

            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        
        case SET_STATUS: {
            
            return {
                ...state,
                status: action.status
            }

        }

        case SET_USER_PROFILE: {
            
            return {...state, profile: action.profile}
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

export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody: newPostBody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
            }).catch((err) => {
            console.log(err);
          });
    } 
}

export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((data) => {
            dispatch(setStatus(data));
            }).catch((err) => {
            console.log(err);
          });
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.resultCode === 0) {
            dispatch(setStatus(status));
            };
        });
    }
}

export default profileReducer;


