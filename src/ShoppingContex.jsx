// ShoppingContext.js
import React, { createContext, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  /*
  Only added this
  ,{itemCount:items,item}
  */
  const addToCart = (itemCart,items) => {
    setCartItems([...cartItems,{itemCount:items,item:itemCart}]);
  };

  return (
    <ShoppingContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </ShoppingContext.Provider>
  );
};
