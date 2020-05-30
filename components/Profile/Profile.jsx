import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
 
  return <div className={classes.content}>
    <ProfileInfo />
    <MyPostsContainer 
    store={props.store} state={props.state}
    />
  </div>


}

export default Profile;