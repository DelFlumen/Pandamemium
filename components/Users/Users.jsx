import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from "../../assets/images/user2.png";



class Users extends React.Component {
    state = {}
    getUsers = () => {

        if (this.props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((result) => {
                this.props.setUsers(result.data.items);
            }).catch((err) => {
                console.log(err);
            });
            // props.setUsers(initialState.users);
        }
    }
    render() {
        return (
            <div>

                <button onClick={this.getUsers}>Get Users</button>
                {
                    this.props.users.map(user => <div key={user.id}>

                        <span>
                            <div>
                                <img alt="ava"
                                    src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.photo} />
                            </div>
                            <div>
                                {user.friend ?
                                    <button
                                        onClick={() => {
                                            this.props.delFriend(user.id)
                                        }}
                                    >Удалить из друзей</button> :
                                    <button
                                        onClick={() => {
                                            this.props.addFriend(user.id)
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


        );
    }
}

export default Users;