import * as axios from 'axios';
import { saveUserInfo } from '../redux/usersReducer';

const instance = axios.create({
    baseURL: 'https://emphasoft-test-assignment.herokuapp.com',
    // withCredentials: true,

})

export const tokenAPI = {
    postToken(username, password) {
        return instance.post('/api-token-auth/',
            { username, password },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => {
                return response.data;
            });
    }
}

export const usersAPI = {
    getUsers(token) {
        return instance.get('/api/v1/users/', {
            headers: {
                'Authorization': `token ${token}`
            }
        })
            .then(response => {
                return response.data;
            });
    },
    // saveInfo(userData, token){
    //     debugger;
    //     return instance.put(`/api/v1/users/${userData.id}/`, userData, {
    //         headers: {
    //             'Authorization': `token ${token}`
    //         }
    //     })
    //     .then(response => {
    //         return response.data;
    //     })
    // },
    // getUserInfo(userId){
    //     return instance.get(`/api/v1/users/${userId}/`)
    //     .then(response => {
    //         return response.data;
    //     })
    // }
}