import React from 'react';
import { connect } from 'react-redux';
import { unFollowThunkCreator, followThunkCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, toggleIsFetchingActionCreator, toggleIsFollowingProgress, getUsersThunkCreator } from '../../redux/usersReducer';
import * as axios from 'axios';
import userPhoto from "../../assets/images/user2.png";
import Users from './Users.jsx';

import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../API/API';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize, users} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize, users);
        
        
    }
    
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsersThunkCreator(pageNumber, pageSize);
    }

    render() {

        
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

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }

// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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