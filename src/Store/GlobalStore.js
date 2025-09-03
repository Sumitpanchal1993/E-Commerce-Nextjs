// context/GlobalStore.js
'use client'; // Required for Next.js 13+ if using app directory

import React, { createContext, useState, useContext } from 'react';

// Create context
const GlobalStore = createContext();

// Create provider
export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  


  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // function for userLoginstate
  const handleLogout = () => {
    // dispatchAction(IS_NOT_LOGIN(true));
    setIsLoggedIn(false);
  };

  //functions to modify cart
  const ADD_TO_CART = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const REMOVE_FROM_CART = (item) => {
    setCartItems(prevItems => prevItems.filter(i => i.id !== item.id));
  };

  const duplicateCartItems = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };


  // ✅ Declare contextData properly
  const contextData = {
    isLoggedIn,
    setIsLoggedIn,
    cartItems,
    setCartItems,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    error,
    setError,
    loading, 
    setLoading,isAdmin, setIsAdmin,handleLogout
  };

  return (
    <GlobalStore.Provider value={contextData}>
      {children}
    </GlobalStore.Provider>
  );
};

// Custom hook for easier use
export const useGlobalStore = () => useContext(GlobalStore);
