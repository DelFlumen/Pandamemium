import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile, getProfileThunkCreator } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfileAPI } from '../../API/API';

class ProfileContainer extends React.Component {
  componentDidMount() {
    
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }
    this.props.getProfileThunkCreator(userId);

    // getUserProfileAPI.getUserProfile().then((data) => {
    //     this.props.setUserProfile(data);
    //     }).catch((err) => {
    //     console.log(err);
    //   });
  }

  render() {
    
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getProfileThunkCreator}) (WithUrlDataContainerComponent);