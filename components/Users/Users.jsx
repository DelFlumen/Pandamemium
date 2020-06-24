import React from 'react';
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user2.png";
import * as axios from 'axios';

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
                                onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {"API-KEY":"6503ad9a-a837-4f6e-b6bb-c995694e446c"}
                                    }).then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.delFriend(user.id)
                                        }
                                    })                                 


                                }}
                            >Удалить из друзей</button> :
                            <button
                                onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {"API-KEY": "6503ad9a-a837-4f6e-b6bb-c995694e446c"}
                                    }).then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.addFriend(user.id)
                                        }
                                    })

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