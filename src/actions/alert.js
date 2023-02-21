import {v4 as uuidv4} from 'uuid';
import {SET_ALERT, REMOVE_ALERT} from './types';


export const setAlert = (msg, alertType) => dispatch => {
    const id = uuidv4();
    
    dispatch({  // this is object is being sent to the alert reducer
        type: SET_ALERT,
        payload: {msg, alertType, id}
    });
};  