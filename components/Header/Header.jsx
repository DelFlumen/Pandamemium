import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  
    return <header className={classes.header}>
    <div><img alt='шапка' src="https://www.nacc.com.au/wp-content/uploads/2017/04/img-logo-wwf-panda-transparent.png" /></div>
    <div><h1>Pandamemium</h1></div>
    <div className={classes.loginBlock}>
      { props.isAuth ? props.login 
      : <NavLink to={'/login'}>Login</NavLink> }
      
    </div>
  </header>
}

export default Header;