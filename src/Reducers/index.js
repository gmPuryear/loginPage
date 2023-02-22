// This is the ROOT reducer
import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';

export default combineReducers (  // this will include any reducers we create
    {
        alert, // this is the alert reducer
        auth // auth reducer
    }
);