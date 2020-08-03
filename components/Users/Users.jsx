import React from 'react';

import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {


    return <div>
        
        <Paginator currentPage = {currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {/* <button onClick={getUsers}>Get Users</button> */}
        <div>
        {
            props.users.map(user => <User user={user} 
                                          followingInProgress={props.followingInProgress}
                                          key={user.id} 
                                          unFollowThunkCreator={props.unFollowThunkCreator}
                                          followThunkCreator={props.followThunkCreator}/>)
        }
        </div>
    </div>
}

export default Users;