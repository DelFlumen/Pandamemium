const ADD_FRIEND = 'ADD_FRIEND';
const DEL_FRIEND = 'DEL_FRIEND';

let initialState = {
    userId: 2,
    email: 'blabla@bla.bla',
    loging: 'samurai',
    isFetching: true
}

const usersReducer = (state = initialState, action) => { //state = state.profilePage
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, friend: true }
                    }
                    return user;
                })
            }

        case DEL_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, friend: false }
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return {...state, users: [ ...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, 
                currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, 
                totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, 
                isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const addFriendActionCreator = (userId) => ({ type: ADD_FRIEND, userId });
export const delFriendActionCreator = (userId) => ({ type: DEL_FRIEND, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountActionCreator = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetchingActionCreator = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });


export default usersReducer;


