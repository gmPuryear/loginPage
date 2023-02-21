import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

// Register User
export const register = ({firstName, LastName, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({firstName, lastName, email, password});

    try {
        const res = {
            await axios.post('/api/users', body, config);
            dispatch({
                         type: REGISTER_SUCCESS,
                         payload: res.data
                     });
        }
    catch (err) {
            dispatch({
                type: REGISTER_FAIL
            })
        }
    }
}