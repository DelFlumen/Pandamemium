import React from 'react';
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import { reduxForm, Field } from "redux-form";
import classes from './ProfileInfo.module.css';
import styles from '../../common/FormsControls/FormsControls.module.css';


const ProfileDataForm = ({handleSubmit, profile, error, isOwner, goToEditMode}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        { error && <div className={styles.formSummaryError}>
                {error}

            </div>}
          
          <div>
            <b>Full name:</b> <div><Field 
                                        placeholder={"Full name"} 
                                        name={"fullName"} 
                                        // validate={[]} 
                                        component={Input} 
                                        /></div>
          </div>
          <div>
            <b>Looking for a job:</b> <div><Field 
                                         
                                        name={"lookingForAJob"} 
                                        // validate={[]} 
                                        component={Input}
                                        props={{type: "checkbox"}} 
                                        /></div>
          
          </div>
          
            <div>
              <b>My professional skills:</b>  
              <div><Field 
                                        placeholder={"My professional skills"} 
                                        name={"lookingForAJobDescription"} 
                                        // validate={[]} 
                                        component={Textarea} 
                                        /></div>
            </div>
          
          <div>
            <b>About me:</b> <div><Field 
                                        placeholder={"About me"} 
                                        name={"aboutMe"} 
                                        // validate={[]} 
                                        component={Textarea} 
                                        /></div>
          </div>
          <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
              return <div className={classes.contact}>
                <b>{key}: </b><div><Field 
                                        placeholder={key} 
                                        name={"contacts." + key} 
                                        // validate={[]} 
                                        component={Input} 
                                        /></div>
                </div>
            })
            }
  
          </div>
        </form>
    )
  }

  const ProfileDataReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)

  export default ProfileDataReduxForm;