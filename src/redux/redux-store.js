import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from "redux-thunk";
const { combineReducers, createStore, applyMiddleware } = require("redux");



let reducers = combineReducers({
    auth: authReducer,
    usersPage: usersReducer,
    form: formReducer,

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store;
export default store;