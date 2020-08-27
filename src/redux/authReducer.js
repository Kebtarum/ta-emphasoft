import { tokenAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";


let initialState = {
    
    savedToken: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'AUTH-SUCCESS':
            return{
                ...state,
                savedToken: action.token,
                isAuth: true,
            }
            case 'LOGOUT':
                return{
                    ...state,
                    savedToken: null,
                    isAuth: false,
                }    
        default:
            return state;

    }
}

export const authSuccess = (token) => {
    return{
        type: 'AUTH-SUCCESS',
        token,
        
    }
}



export const giveToken = (username, password) => async(dispatch) =>{
    
    let data = await tokenAPI.postToken(username, password);

    if(data.token){
        dispatch(authSuccess(data.token))
    }
    // else{
    //     alert("error")
    //     let message = "Some error";        
    //     dispatch(stopSubmit('/login', { _error: message }));
    // }
    
}

export const logout = () => {
    return{
        type: 'LOGOUT',
    }
}

export default authReducer;