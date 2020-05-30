import React from 'react';

import { changeLikeCountActionCreator, addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';




const MyPostsContainer = (props) => {
  
  // let state = props.store.getState();
  let state = props.store.getState();

  // let postsArr = props.postsData.map(post => <Post message={post.text} likeCount={post.likeCount} id={post.id} dispatch={props.dispatch}/>);
  // let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {

    // let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);

  }

  let likeChange = (messageId) => {
    // let messageId = state.profilePage.id;
    let action = changeLikeCountActionCreator(messageId);
    props.store.dispatch(action);

}

  return (<MyPosts
    updateNewPostText={onPostChange}
    onLikeChange={likeChange}
    addPost={addPost} 
    posts={state.profilePage.postsData} 
    newPostText={state.profilePage.newPostText}
    />)

}
export default MyPostsContainer;