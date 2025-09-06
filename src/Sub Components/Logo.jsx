"use client";
import React from "react";
import Link from "next/link";
import "./Logo.css";

function Logo() {
  return (
    <>
      <div className="topLogo">
        <Link href="/">
          <span className="material-symbols-outlined">Storefront</span>
          <div>
            <h4>Gift</h4>
            <h4>Gallery</h4>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Logo;
