import React, { useState } from "react";
import Link from "next/link";
import "./UserLogin.css";
import NavUserDetail from "./NavUserDetail";
import { useSelector } from "react-redux";
import Modal from "@/Components/Modal";
import Login from "@/Sub Components/Login";

function UserLogin() {
  
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const login = useSelector((state)=> state.redux_login_state);
  console.log(login);
  const handleLogin = () => {
    setUserLogin(true);
  };

  const handleLogout = () => {
    setUserLogin(false);
  };

  return (
    <>
      <div className="headerRHS">
        {userLogin ? (
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
