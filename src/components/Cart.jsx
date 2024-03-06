import React, { useContext } from "react";
import {useNavigate } from "react-router-dom";
import { ShoppingContext } from "../ShoppingContex";

function Cart() {
  //{itemsCount:whatever,{}}
  const { cartItems } = useContext(ShoppingContext);

  const navigate = useNavigate()

  const renderedProducts = cartItems.map((product) => (
    <div key={product.item.id} className="mt-2 items-center">
      <img className="w-10 h-10 rounded-sm" src={product.item.imgUrl} />
      <div>
        <h3 className="font-bold">{product.item.name}</h3>
        <h4 className="font-serif">Rs:{`${product.item.itemPrice} x ${product.itemCount} = ${product.item.itemPrice*product.itemCount}`}</h4>
      </div>
    </div>
  ));

  return (
    <div className="absolute top-9 right-0 rounded-md bg-primary text-white text-center w-[300px] shadow-lg">
      {renderedProducts? renderedProducts: <p>The cart is empty</p>}
      <button
        onClick={()=>navigate("/checkout")}
        className="my-3 p-2 w-20 h-10 rounded-md bg-dark-brown hover:bg-show-brown text-white"
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
