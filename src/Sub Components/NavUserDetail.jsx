
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useGlobalStore } from "@/Store/GlobalStore";
// import { useSelector } from "react-redux";

function NavUserDetail({logout}) {
  const {cartItems} = useGlobalStore()
    const [userName, setUserName] = useState("Sumit");
    const [userID, setUserID] = useState("Sumitpanchal08");


  // const cartItem = useSelector((state)=> state.redux_cart);


    const dropdown = ()=>{
        let status = document.querySelector('.dropdown')
        if (status.style.display == 'none'){
          status.style.display = 'block'
        }else{
          status.style.display = 'none'
        }
    
      }
    

  return (
    <>
      <span className="material-symbols-outlined">account_circle</span>
      <div className="userDetail">
        <h4>{`Hi! ${userName}`}</h4>
        <p>{userID}</p>
      </div>
    <button className="dropdown_btn badge">
    <Link href='/my_cart'>
      <img src="/Media/Cart.png" alt="" />
    </Link>
    {cartItems.length!==0 &&<span>{cartItems.length}</span>}
    </button>
      <button className="dropdown_btn" onClick={dropdown}>
        <span className="material-symbols-outlined">arrow_drop_down</span>

      </button>

      <div className="dropdown">
        <ul>
          <li>
            <Link href="/myprofile">My Profile</Link>
          </li>
          <li>
            <Link href="/myorder">Orders</Link>
          </li>
          <li>
            <Link href="/my_cart">Cart</Link>
          </li>
          <li>
            <Link href="#">Wishlist</Link>
          </li>
          <li>
            <button onClick={logout} style={{background:'none',border:'none',padding:0,margin:0,cursor:'pointer',color:'inherit'}}>Log Out</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavUserDetail;
