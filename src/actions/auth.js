// import axios from 'axios';
// import {serAlert} from './alert';
// import {
//     REGISTER_SUCCESS,
//     REGISTER_FAIL
// }
//     from './types';
//
// // Register User
// export const register = ({firstName, LastName, email, password}) =>
// async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     const body = JSON.stringify({first, lastName, email, password});
//
//     try {
//         const res = {
//             await axios.post('/api/users', body, config);
//             dispatch({
//                          type: REGISTER_SUCCESS
//                          payload: res.data
//                      });
//         }
//     catch
//         (err)
//         {
//             const errors = err.response.data.errors;
//
//             if (errors) {
//                 errors.forEach(error => {
//                     dispatch({setAlert(error.msg, 'danger')}) // danger means it will be in red
//                 })
//             }
//             dispatch({
//                 type: REGISTER_FAIL
//             })
//         }
//     }
// }