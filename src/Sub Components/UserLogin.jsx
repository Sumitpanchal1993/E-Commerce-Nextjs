import React, { useState } from "react";
import Link from "next/link";
import "./UserLogin.css";
import NavUserDetail from "./NavUserDetail";
import { useSelector } from "react-redux";
import Modal from "@/Components/Modal";
import Login from "@/Sub Components/Login";
import { IS_NOT_LOGIN } from "../Redux/Reducer/Redux_Login";
import { useDispatch } from "react-redux";

function UserLogin() {
  
   const [isModalOpen, setIsModalOpen] = useState(false);
   const login = useSelector((state)=> state.redux_login_state);
  //  const [userLogin, setUserLogin] = useState(login);
     const dispatchAction = useDispatch();

  console.log("ReduxStore", login);
  // console.log("Component status ", userLogin);
  // const handleLogin = () => {
  //   setUserLogin(true);
  // };

  const handleLogout = () => {
    dispatchAction(IS_NOT_LOGIN(true));
    // setUserLogin(false);
  };

  return (
    <>
      <div className="headerRHS">
        {login ? (
          <NavUserDetail logout={handleLogout} />
        ) : (
          <Link href="#">
            <button className="mybtn" onClick={() => setIsModalOpen(true)}>
              Login
            </button>
          </Link>
        )}
      </div>
        <Modal
        isOpen={isModalOpen}
        title="Login to Your Account"
        onClose={() => setIsModalOpen(false)}
        onOk={() => {
          console.log('OK clicked');
          setIsModalOpen(false);
        }}
        onCancel={() => {
          console.log('Cancel clicked');
          setIsModalOpen(false);
        }}
      >
        <Login />
      </Modal>
    </>
  );
}

export default UserLogin;
