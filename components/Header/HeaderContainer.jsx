import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { authMeThunkCreator } from "../../redux/authReducer";
import { authAPI } from '../../API/API';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunkCreator();
    // authAPI.authMe.then((data) => {
    
    //         if (data.resultCode === 0) {
    //           let {email, id, login} = data.data;
              
    //           this.props.setAuthUserData(id, email, login);
    //         }
    //     }).catch((err) => {
    //         console.log(err);
    //     });
  }
  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login

})
export default connect (mapStateToProps, {authMeThunkCreator}) (HeaderContainer);