import React from 'react';
import { connect } from 'react-redux';
import { unFollowThunkCreator, followThunkCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, toggleIsFetchingActionCreator, toggleIsFollowingProgress, getUsersThunkCreator } from '../../redux/usersReducer';
import * as axios from 'axios';
import userPhoto from "../../assets/images/user2.png";
import Users from './Users.jsx';

import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../API/API';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, this.props.users);
        
        // !this.props.users && this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
            
        // }).catch((err) => {
        //     console.log(err);
        // });
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
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetching(false);    
        // this.props.setUsers(data.items);

        // }).catch((err) => {
        //     console.log(err);
        // });
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
                unFollowThunkCreator={this.props.unFollowThunkCreator}
                followThunkCreator={this.props.followThunkCreator}
                
                followingInProgress={this.props.followingInProgress}
                />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
        unFollowThunkCreator,
        followThunkCreator,
        // setUsers: setUsersActionCreator,
        setCurrentPage: setCurrentPageActionCreator,
        // setTotalUsersCount: setTotalUsersCountActionCreator,
        // toggleIsFetching: toggleIsFetchingActionCreator,
        toggleIsFollowingProgress: toggleIsFollowingProgress,
        getUsersThunkCreator: getUsersThunkCreator
    }
    )(UsersAPIComponent);