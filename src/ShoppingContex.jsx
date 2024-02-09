// ShoppingContext.js
import React, { createContext, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <ShoppingContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </ShoppingContext.Provider>
  );
};
