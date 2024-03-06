import React, { useContext } from "react";
import { ShoppingContext } from "../ShoppingContex";

function Checkout() {
  const { cartItems } = useContext(ShoppingContext);

  console.log(cartItems);

  const renderedProducts = cartItems.map((product) => (
    <div
      key={product.id}
      className="mt-3 flex justify-evenly text-white text-center font-serif font-bold"
    >
      <img className="w-12 h-12 rounded-sm" src={product.item.imgUrl} />
      <h3 className="text-lg ml-3">{product.item.name}</h3>
      <h4 className="font-serif text-lg ml-3">Rs:{`${product.item.itemPrice} x ${product.itemCount} = ${product.item.itemPrice*product.itemCount}`}</h4>
    </div>
  ));

  return (
    <div className="bg-primary h-[100vh] w-full flex lg:flex-row md:flex-row sm:flex-col  justify-evenly items-center px-3 lg:pt-0 md:pt-20 sm:pt-20">
      <div className="lg:w-[60%] md:w-[70%] sm:w-[80%] bg-primary">
        <h1 className="mt-3 text-5xl font-bold font-serif text-white">
          Checkout Page
        </h1>

        <h2 className="mt-3 text-grey text-xl font-bold  font-mono">
          Yours Details
        </h2>

        <p className="mt-3 text-xl text-white">
          Please enter your shopping details here
        </p>
        <form action="#">
          <div className="mt-5">
            <input
              className="bg-primary text-white  border-b-[1px] border-white  px-3 w-full h-9  outline-none "
              type="text"
              name="Full Name"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mt-5">
            <input
              className="bg-primary text-white  border-b-[1px] border-white  px-3 w-full h-9  outline-none "
              type="email"
              name="Email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mt-5">
            <input
              className="bg-primary text-white  border-b-[1px] border-white  px-3 w-full h-9  outline-none"
              type="text"
              name="Address "
              placeholder="Enter the shipping Address"
              required
            />
          </div>

          <div className="mt-5">
            <button className="w-full h-10 bg-show-brown text-white hover:bg-light-yellow">
              Proceed to Shipping
            </button>
          </div>
        </form>
      </div>
      <div className="lg:w-[30%] md:w-[50%] sm:w-[60%] lg:ml-5 md:ml-0 sm:ml-0">
        <h1 className="text-xl font-bold font-serif text-white">Items</h1>
        <div>{renderedProducts}</div>
      </div>
    </div>
  );
}

export default Checkout;
