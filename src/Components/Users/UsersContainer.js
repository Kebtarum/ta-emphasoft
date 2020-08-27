import React from 'react';
import { logout } from '../../redux/authReducer';
import { getUsers, filterList, saveUserInfo } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Users from './Users';
import { compose } from 'redux';

class UsersContainer extends React.Component {

    // refreshProfile() {
       
    //         let token = this.props.savedToken;
    //         if(!token){
    //             return <Redirect to={'/'} />
    //         }
        
    // }

    componentDidMount() {

        // this.refreshProfile()
        
        let {savedToken} = this.props;
        if(!savedToken){
            return <Redirect to={'/'} /> 
        }
        this.props.getUsers(savedToken);
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/'} />
        }
        return (
            <div>
                <Users logout={this.props.logout}
                savedToken={this.props.savedToken}
                allUsers={this.props.allUsers}
                currentUsers={this.props.currentUsers}
                filterList={this.props.filterList}
                saveUserInfo={this.props.saveUserInfo} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        savedToken: state.auth.savedToken,
        allUsers: state.usersPage.allUsers,
        currentUsers: state.usersPage.currentUsers,
    }
}

export default compose(
    connect(mapStateToProps, { logout, getUsers, filterList, saveUserInfo }),
    withRouter
    )(UsersContainer);