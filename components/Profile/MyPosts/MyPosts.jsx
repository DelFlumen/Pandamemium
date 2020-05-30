import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';




const MyPosts = (props) => {
  
  let postsArr = props.posts.map(post => <Post message={post.text} likeCount={post.likeCount} id={post.id} likeChange={props.onLikeChange}/>);
  let newPostElement = React.createRef();
 
  let addPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    
    
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);

  }

  return <div className={classes.myPosts}><h2>My posts</h2>
    <div className={classes.textareaContainer}>
      <div><textarea
        onChange={onPostChange}
        ref={newPostElement} value={props.newPostText} /></div>
      <button className={classes.knopka} onClick={addPost}>Add post</button>
      {/* <button>Remove</button> */}
    </div>
    <div className={classes.posts}>

      {postsArr}

    </div>
  </div>

}

export default MyPosts;