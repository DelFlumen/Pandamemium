import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div className={classes.content}>
    <div><img alt="newImage" src='https://capturelandscapes.com/wp-content/uploads/2017/07/Fallen-e1499694482182.jpg' /></div>
    <div className={classes.descriptionBlock}><h2>ReactoCat</h2></div>
    
      </div>
    
  
}

export default ProfileInfo;