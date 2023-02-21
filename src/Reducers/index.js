// This is the ROOT reducer
import {combineReducers} from 'redux';
import alert from './alert';

export default combineReducers (  // this will include any reducers we create
    {
        alert // this is the alert reducer
    }
);