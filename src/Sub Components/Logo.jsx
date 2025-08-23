
"use client";
import React from "react";
import Link from "next/link";
import './Logo.css'

function Logo() {
  return (
    <>
      <div className="topLogo">
        <Link href='/' >
          <span className="material-symbols-outlined">Storefront</span>
          <h4>Gift Gallery</h4>
        </Link>
      </div>
    </>
  );
}
export default Logo;
