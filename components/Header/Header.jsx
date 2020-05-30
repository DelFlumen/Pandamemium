import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
    <div><img alt='шапка' src="https://www.nacc.com.au/wp-content/uploads/2017/04/img-logo-wwf-panda-transparent.png" /></div>
    <div><h1>Pandamemium</h1></div>
  </header>
}

export default Header;