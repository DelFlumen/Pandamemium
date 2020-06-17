import React from 'react';
import { connect } from 'react-redux';
import { addFriendActionCreator, delFriendActionCreator, setUsersActionCreator, setCurrentPageActionCreator } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps  = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
    
}
let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {
            dispatch(addFriendActionCreator(userId))
            
        },
        delFriend: (userId) => {
            dispatch(delFriendActionCreator(userId))
            
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
            
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
            
        }


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);