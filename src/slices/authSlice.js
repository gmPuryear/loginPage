// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//     token: localStorage.getItem("token"),
//     name: "",
//     email: "",
//     id: "",
//     LoginStatus: "",
//     LoginError: "",
//     userLoaded: false
// };

// export const loginUser = createAsyncThunk(
//     "auth/loginUser",
//     (values, {rejectWithValues}) => {
//         try {

//             // const token = await axios.post('http://localhost:6060/api/auth', )

//         } catch(err) {

//         }
//     })

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {},
//     extraReducers: {} // for HTTP requests
// })

// export default authSlice.reducer;