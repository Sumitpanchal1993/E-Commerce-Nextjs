"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useGlobalStore } from "@/Store/GlobalStore";
// import { useSelector } from "react-redux";

function NavUserDetail({ logout }) {
  const { cartItems } = useGlobalStore();
  const [userName, setUserName] = useState("User");
  const [userID, setUserID] = useState("Username_here");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const cartItem = useSelector((state)=> state.redux_cart);

  // const dropdown = () => {
  //   let status = document.querySelector(".dropdown");
  //   if (status.style.display == "none") {
  //     status.style.display = "block";
  //   } else {
  //     status.style.display = "none";
  //   }
  // };
  const dropdown = () => {
  setDropdownVisible(!isDropdownVisible);
};

  return (
    <>
       <button className="cart_btn badge">
        <Link href="/my_cart">
          <img src="/Media/Cart.png" alt="" />
        </Link>
        {cartItems.length !== 0 && <span>{cartItems.length}</span>}
      </button>
      <span className="material-symbols-outlined">account_circle</span>
      <div className="userDetail">
        <h4>{`Hi! ${userName}`}</h4>
        <p>{userID}</p>
      </div>
   
      <button className="dropdown_btn" style={{padding:"0 3px"}} onClick={dropdown}>
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </button>

      <div className={`dropdown ${isDropdownVisible ? "show" : ""}`}>
  <ul>
    <li><Link href="/myprofile">My Profile</Link></li>
    <li><Link href="/orders">Orders</Link></li>
    <li><Link href="/my_cart">Cart</Link></li>
    <li><Link href="#">Wishlist</Link></li>
    <li onClick={logout}><Link href="/">Logout</Link></li>
  </ul>
</div>
    </>
  );
}

export default NavUserDetail;
