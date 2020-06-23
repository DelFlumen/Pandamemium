import React from 'react';
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user2.png";

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }


    return <div>
    <div className={classes.pageNumbersContainer}>
        {pages.map (page => {
            return <span className={props.currentPage === page && classes.selectedPage} onClick={(e) => {props.onPageChanged(page)                        
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
                    {user.friend ?
                        <button
                            onClick={() => {
                                props.delFriend(user.id)
                            }}
                        >Удалить из друзей</button> :
                        <button
                            onClick={() => {
                                props.addFriend(user.id)
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