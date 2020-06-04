import React from 'react';
import classes from './Friends.module.css';
import { NavLink } from 'react-router-dom';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {

    let friendsArr = props.friends.map(person => {
        return <FriendsItem id={person.id} name1={person.name1} name2={person.name2} img={person.img} />
    }
    );

    return (
        <div className={classes.friends}>
            <div className={classes.h4}><h4>Friends</h4></div>
            <div className={classes.items}>

                {friendsArr}

            </div>
        </div>

    )
}

export default Friends;