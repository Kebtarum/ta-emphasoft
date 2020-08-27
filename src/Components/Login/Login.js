import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { giveToken } from '../../redux/authReducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from './Login.module.css'
import cn from 'classnames'
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

// const renderField = ({ input, name, meta: { touched, error, warning } }) => (
//     <div>

//         <input {...input} placeholder={name} className={"form-control"} />
//         {touched && ((error && <span className={s.errorSpan}>{error}</span>) || (warning && <span className={s.errorSpan}>{warning}</span>))}

//     </div>
// )

const renderField = ({ input, name, meta }) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={(hasError)}>

        <input {...input} placeholder={name} className={"form-control" + ' ' + (hasError ? s.error : "")} />
        {hasError && <span className={s.errorSpan}>{meta.error}</span>}

    </div>
    )
}
    


const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={"form-group"}>
                <label for="username">Username</label>
                <Field component={renderField} name={"username"}
                    placeholder={"username"}
                    validate={[required, maxLength50]} />
            </div>

            <div className={"form-group"}>
                <label for="password">Password</label>
                <Field component={renderField} name={"password"}
                    placeholder={"password"} className={"form-control"}
                    validate={[required, maxLength50]} />
            </div>
            <div >
                <button className={"btn btn-primary"}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: '/login',
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.giveToken(formData.username, formData.password)
            .catch(err => alert("Invalid username or password"))
    }
    if (props.isAuth) {
        return <Redirect to={'/users'} />
    }

    return (
        <div className={cn("container", s.loginContainer)}>
            <div className={cn("text-center",s.marginContainer)}>
                <h2>Тестовое задание</h2>
            </div>
            <div className={s.marginContainer}>
            <div>
                <span>Для авторизации введите данные указанные ниже</span>
                </div>
                <div>
                <span>Username: <b>test_super</b></span>
                </div>
                <div>
                <span>Password: <b>{"Nf<U4f<rDbtDxAPn"}</b></span>
            </div>
            </div>
            <div>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
                isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, { giveToken})(Login);