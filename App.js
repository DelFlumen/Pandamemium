import React, { Component, Suspense } from 'react';

import './App.css';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from "./redux/appReducer";
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/reduxStore.js';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
          <Route path="/dialogs" render={() => {return <Suspense fallback={<div>Loading...</div>}><DialogsContainer
            /></Suspense>}} />
          <Route path="/profile/:userId?" render={() => {return <Suspense fallback={<div>Loading...</div>}><ProfileContainer
            /></Suspense>}} />
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

let AppContainer = compose(
  connect(mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) => {

  return <BrowserRouter>
      <Provider store={store}>
      
      <AppContainer />
      </Provider>
  </BrowserRouter>  
}

export default SamuraiJSApp;