import axios from 'axios';
import {setAlert} from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

// Register User
export const registerUser = ({firstName, lastName, email, password}) => async dispatch => {
    const config = {
        headers: { // sending data so we need headers
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({firstName, lastName, email, password});

    try {
        const res = await axios.post('http://localhost:6060/api/users', body, config); // takes in endpoint to backend, body and config
        dispatch({ // if successful response
            type: REGISTER_SUCCESS,
            payload: res.data // this will be the token
        });
    } catch (err) {  // if error dispatch the type of REGISTER_FAIL
            const errors = err.response.data.errors // remember the array is called 'errors'
            if (errors) { // if there are errors loop through the array of errors
                errors.forEach(error => dispatch(setAlert(error.msg)))
            }

            dispatch({
                type: REGISTER_FAIL
            })
        }
    }