import React, { useState } from "react";
import Link from "next/link";
import "./UserLogin.css";
import NavUserDetail from "./NavUserDetail";

function UserLogin() {
  const [userLogin, setUserLogin] = useState(false);

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
          <Link href="/login">
            <button className="mybtn" onClick={handleLogin}>
              Login
            </button>
          </Link>
        )}
      </div>
    </>
  );
}

export default UserLogin;
