import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { Textarea } from './/..//..//common/FormsControls/FormsControls';



const MyPosts = (props) => {
  let state = props.profilePage;
  
  let postsArr = state.postsData.map(post => <Post message={post.text} likeCount={post.likeCount} id={post.id} likeChange={props.onLikeChange}/>);
  let newPostElement = state.newPostText;
 
  let addPost = (values) => {
    alert(values.newPostBody)
    props.addPost(values.newPostBody);
    // props.dispatch(addPostActionCreator());
  }  

  return <div className={classes.myPosts}><h2>My posts</h2>
    <div className={classes.textareaContainer}>
      <AddPostReduxForm onSubmit={addPost}/>
      {/* <button>Remove</button> */}
    </div>
    <div className={classes.posts}>

      {postsArr}

    </div>
  </div>

}

const maxLengthCreator10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder="Enter your post"
        component={Textarea}
        name="newPostBody"
        validate={[required, maxLengthCreator10]} /></div>
      <button className={classes.knopka}>Add post</button>
    </form>
    
  )
}

const AddPostReduxForm = reduxForm({
  form: 'addPostForm'
})(AddPostForm)

export default MyPosts;