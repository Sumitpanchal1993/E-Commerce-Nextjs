
"use client";
import React, { useState } from "react";
import "./ProductCard.css";
// import { ADD_TO_CART } from "../Redux/Reducer/Redux_Cart";
// import { useDispatch } from "react-redux";
import ProductPreview from "./PrductPreview";
import { useGlobalStore } from "@/Store/GlobalStore";

function ProductCard({ item, handleProductDetail }) {
  const {ADD_TO_CART, isLoggedIn} = useGlobalStore();
  // const dispatchAction = useDispatch();
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="productcardbase">
        <div
          className="productimage"
          onClick={() => {
            setShowPreview(true);
            handleProductDetail(item);
          }}
        >
          <img src={item.images[0]} alt="" />
        </div>
        <div className="productdetail">
          <h4>{item.title}</h4>
          <div className="itemPrice">
            <span>
              <strong>Rs {item.price.toFixed(2)}</strong>
            </span>
            <span>
              <s>Rs 1500</s>
            </span>
            <span>{item.discountPercentage}% OFF</span>
          </div>
          <div className="button">
            <button
              className="mybtn"
              onClick={() => {
                console.log("Bought");
              }}
            >
              Buy Now
            </button>
            <button
              className="mybtn"
              onClick={() => {
                if(isLoggedIn){
                  ADD_TO_CART(item);

                }
                else{
                  alert("Please login to add items to cart");
                }
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {showPreview && (
        <ProductPreview
          product={item}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
}

export default ProductCard;
