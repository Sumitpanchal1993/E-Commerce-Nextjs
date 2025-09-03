'use client';
import React from "react";
import "./Orders.css";
// import { useSelector } from "react-redux";
import { useGlobalStore } from '@/Store/GlobalStore';

function Orders() {
  // const redux_cart = useSelector((state) => {return state.redux_cart;});
const {cartItems} = useGlobalStore();
  // console.log(redux_cart);
  return (
    <>
      <div className="foundation">
        <div>
          {cartItems.map((item, id) => {
            return <h1 key={id}>Added Orders</h1>;
          })}
        </div>
      </div>
    </>
  );
}

export default Orders;
