import { usersAPI } from "../api/api";



let initialState = {

    allUsers: [],
    currentUsers: [],

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET-USERS':
            return {
                ...state,
                allUsers: action.users,
                currentUsers: action.users,
            }
        case 'CURRENT-USERS':
            return {
                ...state,
                currentUsers: action.currentUsers
            }
        default:
            return state;

    }
}

export const setUsers = (users) => {
    return {
        type: 'SET-USERS',
        users,
    }
}

export const filterList = (currentUsers) => {
    
    return {
        type: 'CURRENT-USERS',
        currentUsers,
    }
}

export const getUsers = (token) => async (dispatch) => {
    let data = await usersAPI.getUsers(token)

    data.sort((u0, u1) => {
        return u0.id > u1.id;
    });
    dispatch(setUsers(data))
}

export const saveUserInfo = (userData, savedToken) => async(dispatch) =>{
    
    const data = await usersAPI.saveInfo(userData, savedToken)

    dispatch(getUserInfo(userData.user.id));
}

export const getUserInfo = (userId) => async (dispatch) => {
    debugger;
    let data = await usersAPI.getUserInfo(userId)
debugger;

}


export default usersReducer;