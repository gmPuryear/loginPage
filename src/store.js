import {configureStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from "./slices/authSlice";

// 3 main things of REDUX Toolkit:
    // 1. State: initial values assigned to variables
    // 2. Actions: What the React components call when they want something to happen. Such as when you push button, and call increment
    // 3. Reducer: this is what DOES something based on the action. Like when you push increment, the variable is changed

// Redux "createSlice()" slices: allows for you to code all state, actions, and reducers as paramaters
export const store = configureStore ({
    reducer: {
        auth: authReducer
    }
    })

 
export default store;