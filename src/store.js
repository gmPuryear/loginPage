import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// 3 main things of REDUX Toolkit:
    // 1. State: initial values assigned to variables
    // 2. Actions: What the React components call when they want something to happen. Such as when you push button, and call increment
    // 3. Reducer: this is what DOES something based on the action. Like when you push increment, the variable is changed

// Redux "createSlice()" slices: allows for you to code all state, actions, and reducers as paramaters

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;