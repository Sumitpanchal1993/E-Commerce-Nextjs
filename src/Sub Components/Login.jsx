"use client";
import React, { useRef, useState } from "react";
import "./Login.css";
import { useSelector } from "react-redux";
import { IS_LOGIN } from "../Redux/Reducer/Redux_Login";
import { useDispatch } from "react-redux";

function Login() {
  const username = useRef();
  const userPassword = useRef();
  const dispatchAction = useDispatch();
  const [userdata, setUserdata] = useState({});
  const login = useSelector((state) => state.redux_login_state);

  const onChangeHandler = (val) => {
    let pTag = document.getElementById("errMsg");
    if (val.includes("@") && val.includes(".") && !val.includes(" ")) {
      pTag.innerHTML = "";
    } else {
      pTag.innerHTML = "Enter Correct Email";
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let pTag = document.getElementById("errMsg");
    if (
      username.current.value.includes("@") &&
      username.current.value.includes(".")
    ) {
      let userDetail = {
        username: username.current.value,
        password: userPassword.current.value,
      };
      setUserdata(userDetail);
      console.log(userdata);
    } else {
      pTag.innerHTML = "Please Check Your email or Phone No entered";
    }
  };

  return (
    <>
      <form
        className="loginBase"
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <div>
          <label htmlFor="username">Enter Email:</label>
          <input
            type="text"
            ref={username}
            onChange={() => {
              onChangeHandler(username.current.value);
            }}
          />
          <p id="errMsg" style={{ color: "red" }}>
            {}
          </p>
        </div>
        <div>
          <label htmlFor="password"> Enter the Password:</label>
          <input type="password" ref={userPassword} />
        </div>
        <div>
          <a href="">Forgot Username or Password ?</a>
        </div>
        <div>
          <button
            className="mybtn"
            onClick={() => {
              dispatchAction(IS_LOGIN(true));
            }}
          >
            Login
          </button>
        </div>
        <button className="mybtn">SignUp</button>
      </form>
    </>
  );
}

export default Login;
