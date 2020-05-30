import React from 'react';
import classes from './FriendsItem.module.css'
import { NavLink } from 'react-router-dom';


const FriendsItem = (props) => {
    return <div className={classes.item}>
     {/* <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink> */}
     <img src={props.img} alt="ava" width="90px"/>
     <div>{props.name1}</div>
     <div>{props.name2}</div>
    </div>
}



export default FriendsItem;