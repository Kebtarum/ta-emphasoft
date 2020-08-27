import React from 'react';
import s from './User.module.css'
import cn from 'classnames'
import UserDataReduxForm from './UserDataReduxForm';
import { useState } from 'react';

function User(props) {

    // let [editMode, setEditMode] = useState(false);

    // const onSubmit = (formData) => {

    //     console.log(formData);
    //     props.saveUserInfo(formData, props.savedToken)
    //         .then(() => {
    //             setEditMode(false)
    //         })
    //         .catch(() => {
    //             setEditMode(true);
    //             console.log("сработал CATCH")
    //         })

    // }

    return (
        <li className={cn("list-group-item")}>
            {/* <div className={s.flexContainer}>
                <div >
                    <span className={s.idRound}>{`id ${props.user.id}`}</span>
                </div>
                <div className={""}>
                    <button onClick={setEditMode} className={"btn btn-primary"} >Edit</button>
                </div>
            </div>
            {editMode ? <UserDataReduxForm initialValues={props.user} onSubmit={onSubmit} user={props.user} /> :
                <div>
                    <div><b>Username: {props.user.username}</b></div>
                    <div>First name: {props.user.first_name}</div>
                    <div>Last name: {props.user.last_name}</div>
                </div>
            } */}




            
            <div className={s.flexContainer}>
                <div >
                    <span className={s.idRound}>{`id ${props.user.id}`}</span>
                </div>
                {/* <div className={""}>
                    <button onClick={console.log("123")} className={"btn btn-primary"} >Edit</button>
                </div> */}
            </div>

            <div><b>Username: {props.user.username}</b></div>
            <div>First name: {props.user.first_name}</div>
            <div>Last name: {props.user.last_name}</div>
        

        </li>



    )
}



export default User;