// THIS REDUCER BASICALLY MAKES SURE THE USER IS LOGGED IN WHEN GOING TO EACH PAGE
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

// vv State for authentication vv
const initialState = {
    token: localStorage.getItem('token'), // token is stored in local storage
    isAuthenticated: null, // once we make a request to register or login and get a good response we change to true
    loading: true, // We want to make sure that when we load user and see their authenticated, we want to make sure that loading
    // is done that we got a response from backend. Once we get the response, we will change to false so we know its been loaded
    user: null // When we get user data back from backend, this info will be put in here
}

export default function(state = initialState, action) { // action that is dispatched
    console.log(action);
    const {
        type,
        payload} = action;

    switch (type) {
        case REGISTER_SUCCESS: // if register is a success we save token to local storage
            localStorage.setItem('token', payload.token); // storage key is 'token' and value is the token from payload object
            return {
                ...state, // returning whatever is currently in state
                ...payload,
                isAuthenticated: true, //
                loading: false // weve gotten the response and its been loaded so set to false
            }
        case REGISTER_FAIL:  // if registration fails
                localStorage.removeItem('token'); // if failed login, we want to remove the token completely
                return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    loading: false // even though it failed its done loading
                }
                default:
                    return state // return whatever is current state

    }
}