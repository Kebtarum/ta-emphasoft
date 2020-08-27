import React from 'react';
import './App.css';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import Login from './Components/Login/Login';
import { Provider, connect } from 'react-redux';
import store from "./redux/redux-store"
import UsersContainer from './Components/Users/UsersContainer';

class App extends React.Component {


  render() {
  //   if (!this.props.isAuth) {
  //     debugger;
  //     return <Redirect to={'/'} />
  // }
    return (
            <div className="container-md">
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/users">
                <UsersContainer />
              </Route>
            </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth,
  }
}

const AppContainer = connect(mapStateToProps, {})(App);

const FinalJSApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <AppContainer />
        </HashRouter>
      </Provider>
    </React.StrictMode>
  )
}

export default FinalJSApp;
