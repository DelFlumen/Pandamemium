import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile, getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, savePhoto, saveProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getUserProfileAPI } from '../../API/API';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refreshprofile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      // userId = this.props.loginedUserId;
      userId = this.props.loginedUserId;
      if (!userId) {
        this.props.history.push("/login");
        
    }
  }

    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }
  
  componentDidMount() {
    
    this.refreshprofile(); 
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
    this.refreshprofile();
    }
  }

  render() {
    
    
    
    return (
      <Profile profile={this.props.profile} 
               status={this.props.status} 
               updateStatusThunkCreator={this.props.updateStatusThunkCreator}
               isOwner={!this.props.match.params.userId}
               savePhoto={this.props.savePhoto}
               saveProfile={this.props.saveProfile}/>
    )
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loginedUserId: state.auth.id,
  isAuth: state.auth.isAuth
  });

export default compose (
  connect(mapStateToProps, {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, savePhoto, saveProfile}),
   withRouter,
   withAuthRedirect
   
) (ProfileContainer);;