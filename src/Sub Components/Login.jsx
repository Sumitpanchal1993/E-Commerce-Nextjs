"use client";

import React, { useRef, useState } from "react";
import "./Login.css";
import { useGlobalStore } from "@/Store/GlobalStore";
import UserSignupForm from "./UserSignupForm";

function Login({ closeModal }) {
  const { isLoggedIn, setIsLoggedIn } = useGlobalStore();
  const username = useRef();
  const userPassword = useRef();
  const [error, setError] = useState("");
  const [signup, setSignup] = useState(false);

  const validateEmail = (val) =>
    val.includes("@") && val.includes(".") && !val.includes(" ");

  const handleOnSubmit = async (e) => {
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

    try {
      // Simulated API login
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // username: emailVal,
          // password: passVal,
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 30, // optional, defaults to 60
        }),
        // credentials: "include", // Include cookies (if needed)
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Login Success:", result);
        setIsLoggedIn(true);
        closeModal?.(false);
      } else {
        setError(result.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
    {signup ? (
      <UserSignupForm setSignup={setSignup} />
    ) : (
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

      <button className="spbtn-secondary" type="button" onClick={() => setSignup(true)}>
        Sign Up
      </button>
    </form>)}
    </>
  );
}

export default Login;
