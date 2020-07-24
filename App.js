import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { authMeThunkCreator, logoutThunkCreator } from "./redux/authReducer";
import { initializeApp } from "./redux/appReducer";
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component  { //props = store
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        {/* <Navbar state={props.state.navBar} /> */}
        <NavbarContainer />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer
            />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer
            
            />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/Users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />

        </div>

      </div>
    </BrowserRouter>
  );
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, {initializeApp})) (App);
