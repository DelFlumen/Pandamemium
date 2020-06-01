import React from 'react';

import { changeLikeCountActionCreator, addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

import { connect } from 'react-redux';




// const MyPostsContainer = (props) => {

//   // let state = props.store.getState();
//   let state = props.store.getState();

//   // let postsArr = props.postsData.map(post => <Post message={post.text} likeCount={post.likeCount} id={post.id} dispatch={props.dispatch}/>);
//   // let newPostElement = React.createRef();

//   let addPost = () => {
//     // props.addPost();
//     props.store.dispatch(addPostActionCreator());
//   }

//   let onPostChange = (text) => {

//     // let text = newPostElement.current.value;
//     // props.updateNewPostText(text);
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);

//   }

//   let likeChange = (messageId) => {
//     // let messageId = state.profilePage.id;
//     let action = changeLikeCountActionCreator(messageId);
//     props.store.dispatch(action);

//   }

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addPost = () => {

//           store.dispatch(addPostActionCreator());
//         }

//         let onPostChange = (text) => {

//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);

//         }

//         let likeChange = (messageId) => {
//           let action = changeLikeCountActionCreator(messageId);
//           store.dispatch(action);

//         }
//         return <MyPosts
//           updateNewPostText={onPostChange}
//           onLikeChange={likeChange}
//           addPost={addPost}
//           posts={state.profilePage.postsData}
//           newPostText={state.profilePage.newPostText}
//         />
//       }
//       }
//     </StoreContext.Consumer>
//   )

// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.NewPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    onLikeChange: (messageId) => {
      let action = changeLikeCountActionCreator(messageId);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;