import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
 


  return <div className={classes.content}>
    <ProfileInfo profile={props.profile} 
                 status={props.status} 
                 updateStatusThunkCreator={props.updateStatusThunkCreator}
                 isOwner={props.isOwner}
                 savePhoto={props.savePhoto}
                 saveProfile={props.saveProfile}/>
    <MyPostsContainer 
    
    />
  </div>


}

export default Profile;