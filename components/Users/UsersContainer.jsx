import React from 'react';
import { connect } from 'react-redux';
import { addFriendActionCreator, delFriendActionCreator, setUsersActionCreator } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps  = (state) => {
    return {
        users: state.usersPage.users
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
            
        }


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);