"use client";
import React from "react";
import "./Orders.css";
// import { useSelector } from "react-redux";
import { useGlobalStore } from "@/Store/GlobalStore";
import Carousel from "@/Sub Components/Carousel";

function Orders() {
  // const redux_cart = useSelector((state) => {return state.redux_cart;});
  const { cartItems } = useGlobalStore();

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80",
  ]
  // console.log(redux_cart);
  return (
    <>
      <div className="foundation">
        <Carousel images= {images}/>
        {cartItems.map((item, id) => {
          return <h1 key={id}>Added Orders</h1>;
        })}
      </div>
    </>
  );
}

export default Orders;
