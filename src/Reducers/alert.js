import {SET_ALERT, REMOVE_ALERT} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {  // this action is going to have a type and payload(the data)
        // the type is what we need to evaluate
    const {type, payload} = action;

    switch (type) {
        case SET_ALERT:  // dispatched this set_alert
            return [...state, payload]; // return array with new alert that was added
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);  // returns all alerts except the one that matches the payload's ID
        default:
            return state;
    }
}