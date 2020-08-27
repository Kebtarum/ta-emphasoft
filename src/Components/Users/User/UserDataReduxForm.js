// import React from 'react';
// import s from './User.module.css'
// import cn from 'classnames'
// import { Field, reduxForm } from 'redux-form';

// function UserDataForm(props) {

//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//             <b>Username: {props.user.username}</b>
//             </div>
//             <div>
//                 First name: <Field component={"input"} name={"first_name"} {...props} />
//             </div>
//             <div>
//                 Last name: <Field component={"input"} name={"last_name"} {...props} />
//             </div>
//             <button className={"btn btn-primary"} >Save</button>
//         </form>
//     )
// }


// const UserDataReduxForm = reduxForm({
//     form: `/edit-user`,

// })(UserDataForm);

// export default UserDataReduxForm;