import preloader from '../../../assets/images/loader.gif'
import React from 'react';

let Preloader = (props) => {
    return <div>
        <img alt="preloader" src={preloader} width="200px"/>
        </div>
}

export default Preloader;