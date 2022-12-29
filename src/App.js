import './App.css';
import React, {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import Register from "./Register";
import {useForm} from "react-hook-form";

const initialUserList = [
  {
    email: "gFrank1987@yahoo.com",
    firstName: "George",
    id: uuid(),
    lastName: "Frank",
    password: "pa$$Word",
    userName: "george1987"
  },
  {
    email: "rWeasley1999@gmail.com",
    firstName: "Ronald",
    id: uuid(),
    lastName: "Weasley",
    password: "grinGott$45",
    userName: "weasley1999"
  }
]

function App() {
  const [openModal, setOpenModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [userList, setUserList] = useState(initialUserList);
  const {register, handleSubmit} = useForm();

  // saves initial list of users to local storage if it does not already exist
  useEffect(() => {
    if (localStorage.getItem("userList") === null) {
      localStorage.setItem("userList", JSON.stringify(userList));
    }
  }, []);

  const ifUserExists = (userData) => {
    const listOfRegisteredUsers = JSON.parse(localStorage.getItem("userList"));
    const currentUserName = userData.userName;
    const currentPassword = userData.password;
    console.log(listOfRegisteredUsers[0])
    for (let i = 0; i < listOfRegisteredUsers.length; i++) {
      if (listOfRegisteredUsers[i].userName === currentUserName && listOfRegisteredUsers[i].password === currentPassword) {
        console.log("HI")
      } else {
        console.log("NOPE")
      }
    }
  }

  return (

      <div className="login_registration_wrapper">
        <div className="login_content">
          <form className="login_form" onSubmit={handleSubmit((userData) => {
            ifUserExists(userData);
          })}>
            <p className="login_userName">
              <label className="login_userName_Label" htmlFor="userName">User Name</label>
              <input className="login_userName_input" {...register("userName", {required: true})}/>
            </p>
            <p className="login_password">
              <label className="login_password_label" htmlFor="password">Password</label>
              <input className="login_password_input" {...register("password", {required: true})}/>
            </p>
            <button className="login_submit_btn btn" type="submit">Login</button>
          </form>
          <p className="login_not_a_member_text">Not a member?</p>
          <p className="login_registerHere_btn btn" onClick={() => {
            setIsOpen(true);
          }}>Register <span>here!</span></p>
          {isOpen &&
              <Register open={isOpen} setIsOpen={setIsOpen} userList={userList} setUserList={setUserList}/>}
        </div>
      </div>

  );
}

export default App;
