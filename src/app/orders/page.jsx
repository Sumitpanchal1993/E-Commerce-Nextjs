'use client';
import React from "react";
import "./Orders.css";
import { useSelector } from "react-redux";

function Orders() {
  const redux_cart = useSelector((state) => {
    return state.redux_cart;
  });

  console.log(redux_cart);
  return (
    <>
      <div className="orderBase">
        <div>
          {redux_cart.map((item, id) => {
            return <h1 key={id}>Added Orders</h1>;
          })}
        </div>
      </div>
    </>
  );
}

export default Orders;
