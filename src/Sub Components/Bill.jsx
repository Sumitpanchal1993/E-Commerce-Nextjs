"use client";
import React from "react";
import "./Bill.css";
// import { useSelector } from "react-redux";
import { useGlobalStore } from "@/Store/GlobalStore";

function Bill() {
  // const redux_cart = useSelector((state) => {return state.redux_cart;});
  const { cartItems } = useGlobalStore();
  const platformFees = cartItems.length>0 ? 10 : 0;
  const shippingFees = cartItems.length>0 ? 99 : 0;
  const couponDiscount = cartItems.length>0 ? 50 : 0;
  let discount = cartItems.map((item) => {
    return Number((item.discountPercentage * item.price) / 100);
  })
  .reduce(sum, 0);
  let totalMRP = cartItems.map((item) => {
    return item.price;
  })
  .reduce(sum, 0);
  
  let total =   totalMRP - discount - couponDiscount + platformFees + shippingFees;
  
  function sum(total, num) {
    return (total += num);
  }

  function onPlaceOrder() {
    alert("Wow You Have Placed the Order Successfully");
  }
  return (
    <>
      <div className="billBase">
        <div>
          <h3>Price Detail</h3>
        </div>
        <div>
          <span>Total Items</span>
          <span>({cartItems.length} Items)</span>
        </div>
        <hr />
        <div className="amount">
          <span>Total MRP</span>
          <span>₹{totalMRP.toFixed(2)}</span>
        </div>
        <div className="amount">
          <span>Discount on MRP</span>
          <span>₹{discount.toFixed(2)}</span>
        </div>
        <div className="amount">
          <span>Coupon Discount</span>
          <span>₹{couponDiscount.toFixed(2)}</span>
        </div>
        <div className="amount">
          <span>Platform Fees</span>
          <span>₹{platformFees.toFixed(2)}</span>
        </div>
        <div className="amount">
          <span>Shipping Fees</span>
          <span>₹{shippingFees.toFixed(2)}</span>
        </div>
        <hr />
        <div className="amount">
          <span>Total Amount to Pay</span>
          <span>₹{total.toFixed(2)}</span>
        </div>

        <div>
          <button className="spbtn-primary" onClick={onPlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Bill;
