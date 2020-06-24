import React from 'react';
import { connect } from 'react-redux';
import { addFriendActionCreator, delFriendActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, toggleIsFetchingActionCreator } from '../../redux/usersReducer';
import * as axios from 'axios';
import userPhoto from "../../assets/images/user2.png";
import Users from './Users.jsx';

import Preloader from '../common/Preloader/Preloader';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        !this.props.users && this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, 
        {withCredentials: true
        }).then((result) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(result.data.items);
            this.props.setTotalUsersCount(result.data.totalCount);
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
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, 
        {
            withCredentials: true
        }).then((result) => {
            this.props.toggleIsFetching(false);    
        this.props.setUsers(result.data.items);

        }).catch((err) => {
            console.log(err);
        });
    }

    render() {

        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        // let pages = [];
        // for (let i=1; i <= pagesCount; i++) {
        //     pages.push(i);
        // }
        return <>
        {this.props.isFetching ? 
        <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                delFriend={this.props.delFriend}
                addFriend={this.props.addFriend} />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addFriend: (userId) => {
//             dispatch(addFriendActionCreator(userId))

//         },
//         delFriend: (userId) => {
//             dispatch(delFriendActionCreator(userId))

//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))

//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageActionCreator(currentPage))

//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount))

//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }


//     }
// }



export default connect(mapStateToProps, 
    {
        addFriend: addFriendActionCreator,
        delFriend: delFriendActionCreator,
        setUsers: setUsersActionCreator,
        setCurrentPage: setCurrentPageActionCreator,
        setTotalUsersCount: setTotalUsersCountActionCreator,
        toggleIsFetching: toggleIsFetchingActionCreator
    }
    )(UsersAPIComponent);