import React from 'react';
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user2.png";
import * as axios from 'axios';
import { followAPI } from '../../API/API';
import Paginator from '../common/Paginator/Paginator';

let User = ({user, followingInProgress, unFollowThunkCreator, followThunkCreator}) => {


    return <div>
        
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt="ava"
                                src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.photo} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button 
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unFollowThunkCreator(user.id);
                                    
                                    // followAPI.unfollowUser(user.id)                                    
                                    // .then((data) => {
                                        
                                    //     if (data.resultCode === 0) {
                                    //         props.delFriend(user.id)
                                    //     }
                                    //     props.toggleIsFollowingProgress(false, user.id);
                                    // })                             
                                }}
                            >Удалить из друзей</button> :
                            <button 
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    followThunkCreator(user.id);
                                    // followAPI.followUser(user.id).then((data) => {
                                    //     if (data.resultCode === 0) {
                                    //         props.addFriend(user.id)
                                    //     }
                                    //     props.toggleIsFollowingProgress(false, user.id);
                                    // })
                                }}
                            >Добавить в друзья</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>

                </span>
            </div>
}

export default User;