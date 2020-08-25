import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user2.png";
import { useState } from 'react';
import ProfileDataReduxForm from './ProfileDataForm';



const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }
  else {
    const onMainPhotoChanged = (e) => {
      if (e.target.files.length) {
        props.savePhoto(e.target.files[0]);
      }

    }

    const onSubmit = (formData) => {      
        props.saveProfile(formData).then(() => {
        setEditMode(false);
    });
  }


    return <div className={classes.content}>
      {/* <div><img alt="newImage" src='https://capturelandscapes.com/wp-content/uploads/2017/07/Fallen-e1499694482182.jpg' /></div> */}
      <div className={classes.descriptionBlock}>
        {/* <h2>ReactoCat</h2> */}
      </div>
      <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} alt="ava" />
      {props.isOwner && <input type={"file"} onChange={onMainPhotoChanged} />}
      
      {editMode ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> : 
                  <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}



      <ProfileStatusWithHooks status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator} />
    </div>


  }
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>
        }
        <div>
          <b>Full name:</b> {profile.fullName}
        </div>
        <div>
          <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
          <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
          </div>
        }
        <div>
          <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
          <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]} />
          })
          }

        </div>
      </div>
  )
}


const Contact = ({ contactTitle, contactValue }) => {
  return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;