import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';




const MyPosts = (props) => {
  let state = props.profilePage;
  
  let postsArr = state.postsData.map(post => <Post message={post.text} likeCount={post.likeCount} id={post.id} likeChange={props.onLikeChange}/>);
  let newPostElement = state.newPostText;
 
  let addPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);

  }

  return <div className={classes.myPosts}><h2>My posts</h2>
    <div className={classes.textareaContainer}>
      <div><textarea
        onChange={onPostChange}
        value={newPostElement} /></div>
      <button className={classes.knopka} onClick={addPost}>Add post</button>
      {/* <button>Remove</button> */}
    </div>
    <div className={classes.posts}>

      {postsArr}

    </div>
  </div>

}

export default MyPosts;