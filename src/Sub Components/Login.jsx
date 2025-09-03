'use client";'
import React, { useRef, useState } from "react";
import "./Login.css";
import { useGlobalStore } from "@/Store/GlobalStore";

function Login({ closeModal }) {
  const { isLoggedIn, setIsLoggedIn } = useGlobalStore();
  const username = useRef();
  const userPassword = useRef();
  const [error, setError] = useState("");

  const validateEmail = (val) =>
    val.includes("@") && val.includes(".") && !val.includes(" ");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const emailVal = username.current.value.trim();
    const passVal = userPassword.current.value.trim();

    if (!validateEmail(emailVal)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passVal) {
      setError("Password cannot be empty.");
      return;
    }

    // Simulate login
    const userDetail = {
      username: emailVal,
      password: passVal,
    };

    console.log("User Logged In:", userDetail);
    setIsLoggedIn(true);
    closeModal?.(false);
  };

  return (
    <form className="loginBase" onSubmit={handleOnSubmit}>
      <h2>Login to Your Account</h2>

      <div>
        <label htmlFor="username">Email Address:</label>
        <input
          type="text"
          id="username"
          ref={username}
          onChange={() => setError("")}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          ref={userPassword}
          onChange={() => setError("")}
        />
      </div>

      {error && <p className="errorText">{error}</p>}

      <div className="formLink">
        <a href="#">Forgot username or password?</a>
      </div>

      <button className="spbtn-primary" type="submit">
        Login
      </button>

      <button className="spbtn-secondary" type="button">
        Sign Up
      </button>
    </form>
  );
}

export default Login;





