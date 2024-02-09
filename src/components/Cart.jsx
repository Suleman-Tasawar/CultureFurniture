import React, { useContext } from "react";
import { redirect } from "react-router-dom";
import { ShoppingContext } from "../ShoppingContex";
import uniqid from "uniqid";

function Cart() {
  const { cartItems } = useContext(ShoppingContext);

  const renderedProducts = cartItems.map((product) => (
    <div key={uniqid()} className="mt-3">
      <img className="w-10 h-10 rounded-sm" src={product.imgUrl} />
      <h3>{product.name}</h3>za
      <h4>{product.itemPrice}</h4>
    </div>
  ));

  function navigateToCheckout() {
    return redirect("/checkout");
  }
  return (
    <div className="absolute top-9 right-0 rounded-md bg-light-yellow text-white text-center w-[200px] h-auto">
      {renderedProducts}

      <button
        onClick={navigateToCheckout}
        className="mt-3 w-20 h-10 rounded-md bg-dark-brown hover:bg-show-brown text-white"
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
