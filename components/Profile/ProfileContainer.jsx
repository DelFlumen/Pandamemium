import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile, getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getUserProfileAPI } from '../../API/API';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }
    this.props.getProfileThunkCreator(userId);
    
    this.props.getStatusThunkCreator(userId);

    // getUserProfileAPI.getUserProfile().then((data) => {
    //     this.props.setUserProfile(data);
    //     }).catch((err) => {
    //     console.log(err);
    //   });
  }

  render() {
    
    
    
    return (
      <Profile profile={this.props.profile} status={this.props.status} updateStatusThunkCreator={this.props.updateStatusThunkCreator}/>
    )
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
  });

export default compose (
  connect(mapStateToProps, {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}),
   withRouter,
   withAuthRedirect 
) (ProfileContainer);;