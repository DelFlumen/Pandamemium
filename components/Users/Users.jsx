import React from 'react';
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user2.png";
import * as axios from 'axios';
import { followAPI } from '../../API/API';

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div className={classes.pageNumbersContainer}>
            {pages.map(page => {
                return <span className={props.currentPage === page && classes.selectedPage} onClick={(e) => {
                    props.onPageChanged(page)
                }}>{page}</span>
            })}

        </div>
        {/* <button onClick={getUsers}>Get Users</button> */}
        {
            props.users.map(user => <div key={user.id}>

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
                                disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    props.unFollowThunkCreator(user.id);
                                    
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
                                disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    props.followThunkCreator(user.id);
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
            </div>)
        }
    </div>
}

export default Users;