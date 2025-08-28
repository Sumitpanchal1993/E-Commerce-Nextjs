// context/GlobalStore.js
'use client'; // Required for Next.js 13+ if using app directory

import React, { createContext, useState, useContext } from 'react';

// Create context
const GlobalStore = createContext();

// Create provider
export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const ADD_TO_CART = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const REMOVE_FROM_CART = (item) => {
    setCartItems(prevItems => prevItems.filter(i => i.id !== item.id));
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
    setLoading,
  };

  return (
    <GlobalStore.Provider value={contextData}>
      {children}
    </GlobalStore.Provider>
  );
};

// Custom hook for easier use
export const useGlobalStore = () => useContext(GlobalStore);
