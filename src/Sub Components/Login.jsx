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

      <button className="mybtn" type="submit">
        Login
      </button>

      <button className="mybtn secondary" type="button">
        Sign Up
      </button>
    </form>
  );
}

export default Login;




// "use client";
// import React, { useRef, useState } from "react";
// import "./Login.css";
// // import { useSelector } from "react-redux";
// // import { IS_LOGIN } from "../Redux/Reducer/Redux_Login";
// // import { useDispatch } from "react-redux";
// import { useGlobalStore } from "@/Store/GlobalStore";

// function Login({closeModal}) {  
//   const { isLoggedIn, setIsLoggedIn } = useGlobalStore();
//   const username = useRef();
//   const userPassword = useRef();
//   // const dispatchAction = useDispatch();
//   const [userdata, setUserdata] = useState({});
//   // const login = useSelector((state) => state.redux_login_state);

//   const onChangeHandler = (val) => {
//     let pTag = document.getElementById("errMsg");
//     if (val.includes("@") && val.includes(".") && !val.includes(" ")) {
//       pTag.innerHTML = "";
//     } else {
//       pTag.innerHTML = "Enter Correct Email";
//     }
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     let pTag = document.getElementById("errMsg");
//     if (
//       username.current.value.includes("@") &&
//       username.current.value.includes(".")
//     ) {
//       let userDetail = {
//         username: username.current.value,
//         password: userPassword.current.value,
//       };
//       setUserdata(userDetail);
//       console.log(userdata);
//     } else {
//       pTag.innerHTML = "Please Check Your email or Phone No entered";
//     }
//   };

//   return (
//     <>
//       <form
//         className="loginBase"
//         onSubmit={(e) => {
//           handleOnSubmit(e);
//         }}
//       >
//         <div>
//           <label htmlFor="username">Enter Email:</label>
//           <input
//             type="text"
//             ref={username}
//             onChange={() => {
//               onChangeHandler(username.current.value);
//             }}
//           />
//           <p id="errMsg" style={{ color: "red" }}>
//             {}
//           </p>
//         </div>
//         <div>
//           <label htmlFor="password"> Enter the Password:</label>
//           <input type="password" ref={userPassword} />
//         </div>
//         <div>
//           <a href="">Forgot Username or Password ?</a>
//         </div>
//         <div>
//           <button
//             className="mybtn"
//             onClick={() => {
//               if (!isLoggedIn){
//                 setIsLoggedIn(true);
//                 closeModal(false);
//               }
//             }}
//           >
//             Login
//           </button>
//         </div>
//         <button className="mybtn">Sign Up</button>
//       </form>
//     </>
//   );
// }

// export default Login;
