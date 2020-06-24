import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => { //props = store

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

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
