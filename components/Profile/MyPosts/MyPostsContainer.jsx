import React from 'react';

import { changeLikeCountActionCreator, addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

import { connect } from 'react-redux';






let mapStateToProps = (state) => {
  return {
    // posts: state.profilePage.postsData,
    // newPostText: state.profilePage.NewPostText
    profilePage: state.profilePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    
    onLikeChange: (messageId) => {
      let action = changeLikeCountActionCreator(messageId);
      dispatch(action);
    },
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody));
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;