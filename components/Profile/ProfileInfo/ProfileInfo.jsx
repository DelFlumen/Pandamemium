import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  else {
    return <div className={classes.content}>
    {/* <div><img alt="newImage" src='https://capturelandscapes.com/wp-content/uploads/2017/07/Fallen-e1499694482182.jpg' /></div> */}
    <div className={classes.descriptionBlock}>
      {/* <h2>ReactoCat</h2> */}
      </div>
        <img src={props.profile.photos.large} alt="ava"/>
        <ProfileStatus status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
      </div>
    
  
}
}

export default ProfileInfo;