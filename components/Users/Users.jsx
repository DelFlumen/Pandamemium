import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from "../../assets/images/user2.png";




class Users extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((result) => {
                this.props.setUsers(result.data.items);
            }).catch((err) => {
                console.log(err);
            });
    }
    // getUsers = () => {

    //     if (this.props.users.length === 0) {

    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then((result) => {
    //             this.props.setUsers(result.data.items);
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    //         // props.setUsers(initialState.users);
    //     }
    // }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((result) => {
                this.props.setUsers(result.data.items);
            }).catch((err) => {
                console.log(err);
            });
    }
    
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={classes.pageNumbersContainer}>
                    {pages.map (page => {
                        return <span className={this.props.currentPage === page && classes.selectedPage} onClick={(e) => {this.onPageChanged(page)                        
                        }}>{page}</span>
                    })}
                    {/* <span>1</span>
                    <span className={classes.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span> */}
                </div>
                



                {/* <button onClick={this.getUsers}>Get Users</button> */}
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