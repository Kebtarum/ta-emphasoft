import React from 'react';
import User from './User/User';
import { Field } from 'redux-form';
import cn from 'classnames'
import s from './Users.module.css'

function Users(props) {

    

    const onLogout = () => {
        props.logout();
    }

    const onFilterList = (e) => {
        
        let newList = props.allUsers.filter( (user) => {
            return (user.username.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1)
                
        })
        
        props.filterList(newList);
    }
    
    return (
        <div className={cn("container", s.usersContainer)}>
            <div className={cn(s.flexContainer, s.marginContainer)}>
                <div>
                    <h2>Users</h2>
                </div>
                <div className={s.flexChild}>
                    <button onClick={onLogout} className={"btn btn-primary"} >Logout</button>
                </div>
            </div>
            <div className={"form-group"}>
                <input type="text" onInput={onFilterList} className={"form-control"} />
            </div>
            
            <ul className={"list-group"}>
                {props.currentUsers.map(u =>
                    <User user={u} key={u.id} saveUserInfo={props.saveUserInfo} savedToken={props.savedToken} />
                )}
                {/* {props.currentUsers.length !== 0 ? props.currentUsers.map(u =>
                    <User user={u} key={u.id} /> ):
                    props.allUsers.map(u =>
                    <User user={u} key={u.id} /> )
                } */}
            </ul>
        </div>
    )
}



export default Users;